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
<title>McFall Productions | Podcast discovery and production</title>
<meta name="description" content="We make every podcast episode findable in Google, YouTube, Apple and Spotify: titles, show notes and transcripts for your whole back catalog, published for you. From the producers of The School of Greatness.">
<link rel="canonical" href="https://mcfallprod.com/">
<meta property="og:type" content="website">
<meta property="og:url" content="https://mcfallprod.com/">
<meta property="og:title" content="We build every podcast episode to earn.">
<meta property="og:description" content="In Google, YouTube, Apple and Spotify, under the words people actually search. The one you publish next week, and the hundreds you've already made.">
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
