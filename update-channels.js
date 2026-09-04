const http = require('http');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const M3U_URL = 'http://line.dndnscloud.ru/get.php?username=5f6595c816&password=2f5201f399e3&type=m3u_plus&output=ts';
const OUTPUT_PATH = path.join(__dirname, 'src', 'data', 'channels.json');

console.log('Connecting to IPTV server...');

http.get(M3U_URL, {
  headers: {
    'User-Agent': 'VLC/3.0.16 LibVLC/3.0.16'
  }
}, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed to download M3U. Server returned status code: ${res.statusCode}`);
    console.error('If you see 884, it means the server blocked the request or the account is currently active elsewhere.');
    process.exit(1);
  }

  console.log('Download started! Parsing channels...');

  const rl = readline.createInterface({
    input: res,
    crlfDelay: Infinity
  });

  const categoriesMap = {};
  let totalChannels = 0;

  rl.on('line', (line) => {
    if (line.startsWith('#EXTINF:')) {
      const groupMatch = line.match(/group-title="([^"]+)"/i);
      if (groupMatch && groupMatch[1]) {
        const category = groupMatch[1].trim();
        
        // Extract channel name which is usually after the last comma
        const commaIndex = line.lastIndexOf(',');
        const channelName = commaIndex !== -1 ? line.substring(commaIndex + 1).trim() : 'Unknown Channel';

        if (!categoriesMap[category]) {
          categoriesMap[category] = [];
        }
        
        categoriesMap[category].push(channelName);
        totalChannels++;
      }
    }
  });

  rl.on('close', () => {
    console.log(`\nFinished parsing! Found ${totalChannels} total channels.`);
    
    // Convert to an array, sort alphabetically, and save
    const categoriesArray = Object.keys(categoriesMap).map(cat => ({
      name: cat,
      count: categoriesMap[cat].length,
      channels: categoriesMap[cat]
    })).sort((a, b) => a.name.localeCompare(b.name));

    const finalData = {
      lastUpdated: new Date().toISOString(),
      totalChannels,
      categories: categoriesArray
    };

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(finalData), 'utf8');
    console.log(`\nSuccessfully saved to ${OUTPUT_PATH}`);
    console.log('Your website will now display these categories and channels on the /channels page!');
  });

}).on('error', (err) => {
  console.error('Error connecting to server:', err.message);
});
