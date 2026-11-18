// Renders og.html to public/og.png (1200x630) with headless Chrome.
import { execFileSync } from 'node:child_process';
const here = new URL('.', import.meta.url).pathname;
const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const out = new URL('../../../public/og.png', import.meta.url).pathname;
execFileSync(chrome, ['--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', '--virtual-time-budget=5000', `--screenshot=${out}`, `file://${here}og.html`], { stdio: 'inherit' });
console.log('wrote', out);
