import 'server-only';
import type { Locale } from './config';

const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  'pt-br': () => import('./dictionaries/pt-br.json').then((module) => module.default),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDictionary = async (locale: Locale): Promise<any> => dictionaries[locale]();
