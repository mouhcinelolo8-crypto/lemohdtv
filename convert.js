const fs = require('fs');
let html = fs.readFileSync('C:/Users/EL AOUFI/.gemini/antigravity/brain/ef81d3fe-78d6-47a9-8946-09ad6404e7be/.system_generated/steps/201/content.md', 'utf8');
let bodyStart = html.indexOf('<header');
let bodyEnd = html.indexOf('</body>');
let body = html.substring(bodyStart, bodyEnd);

body = body.replace(/class=/g, 'className=');
body = body.replace(/stroke-linecap/g, 'strokeLinecap');
body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
body = body.replace(/stroke-width/g, 'strokeWidth');
body = body.replace(/<img([^>]*[^/])>/g, '<img$1 />');
body = body.replace(/<input([^>]*[^/])>/g, '<input$1 />');
body = body.replace(/fetchpriority/g, 'fetchPriority');
body = body.replace(/<!--.*?-->/gs, '');
body = body.replace(/style=".*?"/g, '');
body = body.replace(/onclick=".*?"/g, '');
body = body.replace(/<script.*?<\/script>/gs, '');

fs.writeFileSync('src/app/page.tsx', 'import Link from "next/link";\nexport default function Home() { return (<>\n' + body + '\n</>); }');
