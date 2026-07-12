// Estrae le foto/video del portfolio dal file originale in un JSON.
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

const items = [...document.querySelectorAll('#page-portfolio .pg-item')].map((el) => {
  const video = el.getAttribute('data-video');
  const img = el.getAttribute('data-src');
  const type = video ? 'video' : 'image';
  const src = opt(video || img || '');
  const name = el.getAttribute('data-name') || '';
  const loc = el.getAttribute('data-loc') || '';
  const [catRaw, ...rest] = loc.split('·').map((s) => s.trim());
  const category = (catRaw || 'other').toLowerCase();
  const colBreak = (el.getAttribute('class') || '').includes('col-break');
  return { type, src, name, loc, category, location: rest.join(' · '), colBreak };
});

const categories = [...new Set(items.map((i) => i.category))];
const OUT = new URL('../src/data/portfolio.json', import.meta.url);
writeFileSync(OUT, JSON.stringify({ categories, items }, null, 2));
const videos = items.filter((i) => i.type === 'video').length;
console.log(`OK — ${items.length} media (${videos} video) · categorie: ${categories.join(', ')}`);
