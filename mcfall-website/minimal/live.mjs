// Writes the live homepage: the built draft (index.html) wrapped in the real page head
// (title, share tags, Google Analytics). Run by the deploy after `npm run build`.
// Usage: node mcfall-website/minimal/live.mjs dist/index.html
import { readFileSync, writeFileSync } from 'node:fs';
const here = new URL('.', import.meta.url).pathname;
const out = process.argv[2] || 'dist/index.html';
const body = readFileSync(here + 'index.html', 'utf8').replace(/<title>[^<]*<\/title>\s*/, '');
// Analytics loads only for US time zones (no cookie consent banner). Same list as the audit popup.
const usZones = body.match(/var US_ZONES = '([^']+)'/)?.[1];
if (!usZones) throw new Error('US_ZONES not found in the page');
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
<meta property="og:description" content="So listeners find it when they search Google, YouTube, Apple and Spotify. The one you publish next week, and the hundreds you've already made.">
<meta property="og:image" content="https://mcfallprod.com/og.png?v=2">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"McFall Productions","url":"https://mcfallprod.com/","logo":"https://mcfallprod.com/favicon.svg","image":"https://mcfallprod.com/og.png?v=2","email":"team@mcfallprod.com","description":"Podcast production and back catalog company. Titles, show notes and transcripts for every episode, published for you. Producers of The School of Greatness and The Daily Motivation.","founder":[{"@type":"Person","name":"Lauren McFall","jobTitle":"Co-Founder & Executive Producer"},{"@type":"Person","name":"Scott McFall","jobTitle":"Co-Founder & Director of Editing & AI Innovation"}],"keywords":"podcast production, podcast back catalog, podcast SEO, show notes, transcripts"}</script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}(function(){var z='';try{z=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(e){}if('${usZones}'.split(' ').indexOf(z)<0)return;gtag('js',new Date());gtag('config','G-RJE415F7JT');var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-RJE415F7JT';document.head.appendChild(g);})();</script>
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
`;
writeFileSync(out, head + body + '\n</body>\n</html>\n');
console.log('wrote', out);
