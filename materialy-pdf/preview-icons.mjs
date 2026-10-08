import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { ICONS, iconSvg } from './icons.mjs';
const require = createRequire(execSync('npm root -g').toString().trim() + '/');
const { chromium } = require('playwright');
const cells = Object.keys(ICONS).map(n => `<div style="text-align:center;font:12px sans-serif">${iconSvg(n,{size:110})}<br>${n}</div>`).join('');
const html = `<body style="margin:0;background:#fff"><div style="display:grid;grid-template-columns:repeat(8,130px);gap:8px;padding:10px">${cells}</div>`;
const b = await chromium.launch(); const pg = await b.newPage({viewport:{width:1100,height:700}});
await pg.setContent(html); await pg.screenshot({path:'preview/icons.png',fullPage:true}); await b.close();
