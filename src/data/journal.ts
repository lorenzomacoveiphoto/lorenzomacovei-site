// Metadati degli articoli del Diario. Aggiungere un articolo qui (+ le sue chiavi
// di traduzione) crea automaticamente la sua pagina reale con URL proprio.
export type Lang = 'en' | 'it' | 'es';

export interface Article {
  slug: string;
  type: 'story' | 'guide';
  date: string; // ISO, usata per l'ordine (più recenti prima)
  meta: string; // riga occhiello, es. "Guatemala · People · 2025"
  cover: string; // immagine card + anteprima social
  hero: string; // immagine grande nell'articolo
  titleKey: string; // chiave in i18n.json
  descKey: string;
  bodyPrefix?: string; // storie: prefisso dei paragrafi, es. "article_confini_p_"
  bodyCount?: number;
  endImage?: string; // immagine di chiusura opzionale
}

const CDN = 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto';

export const articles: Article[] = [
  {
    slug: 'guaviare-giungla-colombia-guida',
    type: 'guide',
    date: '2026-08-01',
    meta: 'Colombia · Guaviare · Guide · 2026',
    cover: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto/v1787080141/DSCF7689_2_v8quwj.jpg',
    hero: 'https://res.cloudinary.com/dligvuje7/image/upload/q_auto/f_auto/v1787080141/DSCF7689_2_v8quwj.jpg',
    titleKey: 'guide_guaviare_title',
    descKey: 'guide_guaviare_desc',
  },
  {
    slug: 'raja-ampat',
    type: 'guide',
    date: '2026-06-15',
    meta: 'Indonesia · West Papua · Guide · 2026',
    cover: `${CDN}/v1780954114/IMG_7954_njn95r.jpg`,
    hero: `${CDN}/v1780954114/IMG_7954_njn95r.jpg`,
    titleKey: 'guide_raja_title',
    descKey: 'guide_raja_desc',
  },
  {
    slug: 'w-trek',
    type: 'guide',
    date: '2026-05-01',
    meta: 'Chilean Patagonia · Guide · 2026',
    cover: `${CDN}/v1780872218/IMG_6343_ff4jyl.jpg`,
    hero: `${CDN}/v1780872218/IMG_6343_ff4jyl.jpg`,
    titleKey: 'guide_wtrek_title',
    descKey: 'guide_wtrek_desc',
  },
  {
    slug: 'every-photo-is-a-window',
    type: 'story',
    date: '2026-02-01',
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
    slug: 'the-silent-witness-of-the-acatenango',
    type: 'story',
    date: '2025-04-01',
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
