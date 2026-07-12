// Estrae il markup dell'articolo W-Trek dal file originale e genera le 3 versioni
// (en/it/es) sostituendo i testi via data-i18n. Output: src/data/wtrek-html.json
import { readFileSync, writeFileSync } from 'node:fs';
import { parseHTML } from 'linkedom';

const SRC = '/Users/lorenzomacovei/Desktop/sito web/index_7 (8).html';
const i18n = JSON.parse(readFileSync(new URL('../src/data/i18n.json', import.meta.url), 'utf8'));

const { document } = parseHTML(readFileSync(SRC, 'utf8'));
const root = document.querySelector('#journal-post-wtrek');
if (!root) throw new Error('non trovo #journal-post-wtrek');

const wrap = root.querySelector('.wrap');
const modal = root.querySelector('#stayModal');
const wrapHTML = wrap.outerHTML;
const modalHTML = modal ? modal.outerHTML : '';

function localize(htmlStr, lang) {
  const { document: d } = parseHTML(`<div id="__root">${htmlStr}</div>`);
  d.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    const v = i18n[lang]?.[k];
    if (v != null) el.innerHTML = v;
  });
  // i video sono lazy (data-src): imposto il src così funzionano con i controlli
  d.querySelectorAll('video[data-src]').forEach((v) => {
    v.setAttribute('src', v.getAttribute('data-src'));
    v.removeAttribute('data-src');
    v.setAttribute('preload', 'metadata');
  });
  return d.querySelector('#__root').innerHTML;
}

const out = {};
for (const lang of ['en', 'it', 'es']) {
  out[lang] = localize(wrapHTML, lang) + '\n' + localize(modalHTML, lang);
}

const OUT = new URL('../src/data/wtrek-html.json', import.meta.url);
writeFileSync(OUT, JSON.stringify(out));
console.log(`OK — generato wtrek-html.json (en/it/es), lunghezze:`, Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.length])));
