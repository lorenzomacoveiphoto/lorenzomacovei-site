// Estrae la Home (#homeScroll) dal file originale e genera le 3 versioni tradotte.
import { readFileSync, writeFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';

const SRC = '/Users/lorenzomacovei/Desktop/sito web/index_7 (8).html';
const i18n = JSON.parse(readFileSync(new URL('../src/data/i18n.json', import.meta.url), 'utf8'));

const { document } = parseHTML(readFileSync(SRC, 'utf8'));
const home = document.querySelector('#homeScroll');
if (!home) throw new Error('non trovo #homeScroll');
const homeHTML = home.outerHTML;

function localize(htmlStr, lang) {
  const { document: d } = parseHTML(`<div id="__r">${htmlStr}</div>`);
  d.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    const v = i18n[lang]?.[k];
    if (v != null) el.innerHTML = v;
  });
  // height:100% dipendeva dal contenitore SPA; nel multipagina uso 100vh
  const hs = d.querySelector('#homeScroll');
  if (hs) hs.setAttribute('style', (hs.getAttribute('style') || '').replace('height:100%', 'height:100vh'));
  return d.querySelector('#__r').innerHTML;
}

const out = {};
for (const lang of ['en', 'it', 'es']) out[lang] = localize(homeHTML, lang);
writeFileSync(new URL('../src/data/home-html.json', import.meta.url), JSON.stringify(out));
console.log('OK home —', Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.length])));
