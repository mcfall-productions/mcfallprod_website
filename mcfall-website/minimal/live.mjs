// Writes the live homepage: the built draft (index.html) wrapped in the real page head
// (title, share tags, Google Analytics). Run by the deploy after `npm run build`.
// Usage: node mcfall-website/minimal/live.mjs dist/index.html
import { readFileSync, writeFileSync } from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const out = process.argv[2] || 'dist/index.html';
const body = readFileSync(here + 'index.html', 'utf8').replace(/<title>[^<]*<\/title>\s*/, '');
const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<title>McFall Productions | Back catalog revenue and podcast production</title>
<meta name="description" content="We make your podcast's back catalog earn again, and we produce shows end to end. From the producers of The School of Greatness with Lewis Howes.">
<link rel="canonical" href="https://mcfallprod.com/">
<meta property="og:type" content="website">
<meta property="og:url" content="https://mcfallprod.com/">
<meta property="og:title" content="We make every podcast episode earn.">
<meta property="og:description" content="The one you publish next week, and the hundreds you've already made. Podcast production and back catalog revenue, from the team behind The School of Greatness.">
<meta property="og:image" content="https://mcfallprod.com/og.png">
<meta name="twitter:card" content="summary_large_image">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RJE415F7JT"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RJE415F7JT');</script>
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
`;
writeFileSync(out, head + body + '\n</body>\n</html>\n');
console.log('wrote', out);
