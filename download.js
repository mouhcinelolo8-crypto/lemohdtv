const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('../_temp_build/target_site.html', 'utf8');
const imgRegex = /src=[\"'](\/_next\/static\/media\/[^\"']+|\/images\/[^\"']+)[\"']/g;
const bgRegex = /url\([\"']?(\/_next\/static\/media\/[^\"')]+)[\"']?\)/g;

let matches = [...html.matchAll(imgRegex)].map(m => m[1]);
let bgMatches = [...html.matchAll(bgRegex)].map(m => m[1]);
let urls = [...new Set([...matches, ...bgMatches])];

if (!fs.existsSync('public')) fs.mkdirSync('public');
if (!fs.existsSync('public/images')) fs.mkdirSync('public/images');
if (!fs.existsSync('public/_next')) fs.mkdirSync('public/_next');
if (!fs.existsSync('public/_next/static')) fs.mkdirSync('public/_next/static');
if (!fs.existsSync('public/_next/static/media')) fs.mkdirSync('public/_next/static/media');

urls.forEach(url => {
  const fullUrl = 'https://lemohdtv.us' + url;
  const destPath = path.join('public', url.replace(/\//g, path.sep));
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  https.get(fullUrl, response => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(destPath);
      response.pipe(file);
      console.log('Downloaded', url);
    } else {
      console.log('Failed to download', url, response.statusCode);
    }
  }).on('error', err => {
    console.log('Error downloading', url, err.message);
  });
});
