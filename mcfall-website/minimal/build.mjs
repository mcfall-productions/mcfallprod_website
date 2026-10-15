// Assembles the published page: engine CSS + src/page.html -> index.html (body only, as the
// artifact publisher expects) and lab/preview.html (wrapped, for local viewing and checks).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const engine = process.env.SCROLLCRAFT_CSS || `${process.env.HOME}/.claude/plugins/cache/nateherk/nateherk-design/0.3.1/skills/scroll-craft/engine/scrollcraft.css`;
const page = readFileSync(here + 'src/page.html', 'utf8').replace('/*@ENGINE_CSS@*/', () => readFileSync(engine, 'utf8'));
writeFileSync(here + 'index.html', page);
mkdirSync(here + 'lab', { recursive: true });
writeFileSync(here + 'lab/preview.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><base href="../"><style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + page + '</body></html>');
console.log('built', page.length, 'bytes');
