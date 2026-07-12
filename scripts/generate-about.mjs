// Estrae la sezione About dal file originale e genera le 3 versioni tradotte.
import { readFileSync, writeFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';

const SRC = '/Users/lorenzomacovei/Desktop/sito web/index_7 (8).html';
const i18n = JSON.parse(readFileSync(new URL('../src/data/i18n.json', import.meta.url), 'utf8'));

const { document } = parseHTML(readFileSync(SRC, 'utf8'));
const about = document.querySelector('#page-about');
if (!about) throw new Error('non trovo #page-about');
const inner = about.innerHTML;

function localize(htmlStr, lang) {
  const { document: d } = parseHTML(`<div id="__r">${htmlStr}</div>`);
  d.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    const v = i18n[lang]?.[k];
    if (v != null) el.innerHTML = v;
  });
  // il link "storia delle origini" punta all'articolo reale
  d.querySelectorAll('.about-read-link').forEach((a) => {
    a.setAttribute('href', `/${lang}/journal/every-photo-is-a-window`);
    a.removeAttribute('onclick');
  });
  return d.querySelector('#__r').innerHTML;
}

const out = {};
for (const lang of ['en', 'it', 'es']) out[lang] = localize(inner, lang);
writeFileSync(new URL('../src/data/about-html.json', import.meta.url), JSON.stringify(out));
console.log('OK about —', Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.length])));
