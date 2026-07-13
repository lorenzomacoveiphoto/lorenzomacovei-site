// Estrae le foto/video del portfolio + le proporzioni reali (Cloudinary fl_getinfo)
// e assegna a ogni "cornice" un colore da una scala. Output: portfolio.json
import { readFileSync, writeFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';

const SRC = '/Users/lorenzomacovei/Desktop/sito web/index_7 (8).html';
const { document } = parseHTML(readFileSync(SRC, 'utf8'));

function opt(url) {
  if (!url.includes('res.cloudinary.com')) return url;
  if (url.includes('/q_auto') || url.includes('/f_auto')) return url;
  return url
    .replace('/image/upload/', '/image/upload/q_auto/f_auto/')
    .replace('/video/upload/', '/video/upload/q_auto/');
}

// scala di colori sobri per le cornici (sfondo scuro del sito)
const palette = ['#38474e', '#4a4038', '#3c4a3e', '#48383f', '#3f3f4c', '#4e4636', '#374751', '#463a3a', '#3d4a48', '#45473a', '#3a4a45', '#4a3d48'];

async function dims(src, type) {
  if (type === 'video') return { w: 3, h: 4 }; // default per il video
  try {
    const info = src.replace('/image/upload/q_auto/f_auto/', '/image/upload/fl_getinfo/');
    const r = await fetch(info);
    const j = await r.json();
    const w = j.input?.width || j.output?.width;
    const h = j.input?.height || j.output?.height;
    if (w && h) return { w, h };
  } catch (e) {}
  return { w: 4, h: 3 };
}

const nodes = [...document.querySelectorAll('#page-portfolio .pg-item')];
const items = [];
let i = 0;
for (const el of nodes) {
  const video = el.getAttribute('data-video');
  const img = el.getAttribute('data-src');
  const type = video ? 'video' : 'image';
  const src = opt(video || img || '');
  const name = el.getAttribute('data-name') || '';
  const loc = el.getAttribute('data-loc') || '';
  const [catRaw, ...rest] = loc.split('·').map((s) => s.trim());
  const category = (catRaw || 'other').toLowerCase();
  const { w, h } = await dims(src, type);
  items.push({ type, src, name, loc, category, location: rest.join(' · '), w, h, color: palette[i % palette.length] });
  i++;
}

const categories = [...new Set(items.map((i) => i.category))];
const OUT = new URL('../src/data/portfolio.json', import.meta.url);
writeFileSync(OUT, JSON.stringify({ categories, items }, null, 2));
console.log(`OK — ${items.length} media · categorie: ${categories.join(', ')} · proporzioni caricate`);
