// i18n/config.ts
export const locales = ['en', 'fa', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
export const rtlLocales: Locale[] = ['fa'];
export const isRTL = (l: string) => rtlLocales.includes(l as Locale);
