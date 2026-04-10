export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'pt-br'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
