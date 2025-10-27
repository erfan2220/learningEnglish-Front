import 'server-only';

export async function getDictionary(locale: string)
{
    const dict= await import(`../../lib/i18n/dictionaries/locales/${locale}.json`).then(m => m.default);

    return dict as Record<string, any>;
}