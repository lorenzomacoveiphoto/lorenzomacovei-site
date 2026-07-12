// Estrae l'oggetto `const i18n = { en:{...}, it:{...}, es:{...} }` dal vecchio
// file HTML e lo salva come JSON, così le pagine Astro riusano le traduzioni.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SRC = '/Users/lorenzomacovei/Desktop/sito web/index_7 (8).html';
const OUT = new URL('../src/data/i18n.json', import.meta.url);

const html = readFileSync(SRC, 'utf8');

const marker = 'const i18n = {';
const mi = html.indexOf(marker);
if (mi === -1) throw new Error('non trovo `const i18n = {`');

// dalla `{` iniziale, cammina bilanciando le graffe, ignorando stringhe e template
let i = html.indexOf('{', mi);
const start = i;
let depth = 0;
let quote = null; // ' " `
for (; i < html.length; i++) {
  const c = html[i];
  const prev = html[i - 1];
  if (quote) {
    if (c === quote && prev !== '\\') quote = null;
    continue;
  }
  if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
  if (c === '{') depth++;
  else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
}
const objText = html.slice(start, i);

// eval sicuro: è un oggetto letterale del file dell'utente
const i18n = new Function('return (' + objText + ');')();

const langs = Object.keys(i18n);
mkdirSync(new URL('../src/data/', import.meta.url), { recursive: true });
writeFileSync(OUT, JSON.stringify(i18n, null, 2));

const keys = i18n[langs[0]] ? Object.keys(i18n[langs[0]]).length : 0;
console.log(`OK: lingue = ${langs.join(', ')} · chiavi per lingua ≈ ${keys}`);
console.log(`scritto: ${OUT.pathname}`);
