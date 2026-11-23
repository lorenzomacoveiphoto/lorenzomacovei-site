// Metadati degli articoli del Diario. Ogni articolo ha uno slug PER LINGUA,
// così l'URL è localizzato (es. IT /journal/ogni-foto-e-una-finestra).
export type Lang = 'en' | 'it' | 'es';

export interface Article {
  id: string; // chiave stabile interna (non cambia mai)
  type: 'story' | 'guide';
  date: string; // ISO, usata per l'ordine (più recenti prima)
  slugs: Record<Lang, string>; // slug URL per lingua
  meta: string; // riga occhiello, es. "Guatemala · People · 2025"
  cover: string; // immagine card + anteprima social
  hero: string; // immagine grande nell'articolo
  titleKey: string; // chiave in i18n.json
  descKey: string;
  bodyPrefix?: string; // storie: prefisso dei paragrafi, es. "article_confini_p_"
  bodyCount?: number;
  midImage?: string; // immagine opzionale a metà articolo
  midAfter?: number; // inserita DOPO il paragrafo con questo indice (0-based)
  midCaption?: string; // didascalia opzionale per midImage
  endImage?: string; // immagine di chiusura opzionale
}

const CDN = 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto';

export const articles: Article[] = [
  {
    id: 'antalya',
    type: 'story',
    date: '2026-11-23',
    slugs: {
      en: 'why-i-wasnt-in-antalya',
      it: 'perche-non-ero-ad-antalya',
      es: 'por-que-no-estuve-en-antalya',
    },
    meta: 'COP31 · Antalya · 2026',
    cover: `${CDN}/v1795443775/image_tskgdo.jpg`,
    hero: `${CDN}/v1795443775/image_tskgdo.jpg`,
    titleKey: 'article_antalya_title',
    descKey: 'article_antalya_desc',
    bodyPrefix: 'article_antalya_p_',
    bodyCount: 19,
    midImage: `${CDN}/v1795443776/IMG_1345_zmwysb.jpg`,
    midAfter: 11,
    midCaption: 'Fill the Gap — Antalya',
    endImage: `${CDN}/v1795443835/Capture_d_e%CC%81cran_2026-11-23_a%CC%80_19.23.33_t0og4g.jpg`,
  },
  {
    id: 'guaviare',
    type: 'guide',
    date: '2026-08-01',
    slugs: {
      en: 'guaviare-jungle-guide-colombia',
      it: 'guaviare-giungla-colombia-guida',
      es: 'guaviare-selva-colombia-guia',
    },
    meta: 'Colombia · Guaviare · Guide · 2026',
    cover: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto/v1787080141/DSCF7689_2_v8quwj.jpg',
    hero: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto/v1787080141/DSCF7689_2_v8quwj.jpg',
    titleKey: 'guide_guaviare_title',
    descKey: 'guide_guaviare_desc',
  },
  {
    id: 'raja-ampat',
    type: 'guide',
    date: '2026-06-15',
    slugs: {
      en: 'raja-ampat-backpacker-guide',
      it: 'raja-ampat-guida-backpacker',
      es: 'raja-ampat-guia-mochileros',
    },
    meta: 'Indonesia · West Papua · Guide · 2026',
    cover: `${CDN}/v1780954114/IMG_7954_njn95r.jpg`,
    hero: `${CDN}/v1780954114/IMG_7954_njn95r.jpg`,
    titleKey: 'guide_raja_title',
    descKey: 'guide_raja_desc',
  },
  {
    id: 'w-trek',
    type: 'guide',
    date: '2026-05-01',
    slugs: {
      en: 'w-trek-torres-del-paine-guide',
      it: 'w-trek-guida-torres-del-paine',
      es: 'w-trek-guia-torres-del-paine',
    },
    meta: 'Chilean Patagonia · Guide · 2026',
    cover: `${CDN}/v1780872218/IMG_6343_ff4jyl.jpg`,
    hero: `${CDN}/v1780872218/IMG_6343_ff4jyl.jpg`,
    titleKey: 'guide_wtrek_title',
    descKey: 'guide_wtrek_desc',
  },
  {
    id: 'every-photo-is-a-window',
    type: 'story',
    date: '2026-02-01',
    slugs: {
      en: 'every-photo-is-a-window',
      it: 'ogni-foto-e-una-finestra',
      es: 'cada-foto-es-una-ventana',
    },
    meta: 'Italy · Moldova · 2026',
    cover: `${CDN}/v1780878455/BE98473E-9543-483E-ABF5-6E8DD9C4EA1D_ttmvum.jpg`,
    hero: '',
    titleKey: 'article_confini_title',
    descKey: 'article_confini_desc',
    bodyPrefix: 'article_confini_p_',
    bodyCount: 13,
    endImage: `${CDN}/v1780878455/BE98473E-9543-483E-ABF5-6E8DD9C4EA1D_ttmvum.jpg`,
  },
  {
    id: 'the-silent-witness-of-the-acatenango',
    type: 'story',
    date: '2025-04-01',
    slugs: {
      en: 'the-silent-witness-of-the-acatenango',
      it: 'la-testimone-silenziosa-dell-acatenango',
      es: 'la-testigo-silenciosa-del-acatenango',
    },
    meta: 'Guatemala · People · 2025',
    cover: `${CDN}/v1781139855/IMG_1969_2_zifyla.jpg`,
    hero: `${CDN}/v1781139855/IMG_1969_2_zifyla.jpg`,
    titleKey: 'article_consuelo_title',
    descKey: 'article_consuelo_desc',
    bodyPrefix: 'article_consuelo_p_',
    bodyCount: 9,
  },
];

export const byDateDesc = (a: Article, b: Article) => (a.date < b.date ? 1 : -1);

// Ordine di visualizzazione delle guide (non cronologico, scelto a mano).
export const guideOrder = ['raja-ampat', 'w-trek', 'guaviare'];
export const byGuideOrder = (a: Article, b: Article) =>
  guideOrder.indexOf(a.id) - guideOrder.indexOf(b.id);

// URL localizzato di un articolo in una lingua.
export const articlePath = (a: Article, lang: Lang) => `/${lang}/journal/${a.slugs[lang]}`;

// I 3 URL alternati (per hreflang e cambio-lingua).
export const articleLangPaths = (a: Article): Record<Lang, string> => ({
  en: `/en/journal/${a.slugs.en}`,
  it: `/it/journal/${a.slugs.it}`,
  es: `/es/journal/${a.slugs.es}`,
});
