'use client'

import {usePathname,useRouter}   from "next/navigation";

import {locales, type Locale} from "@/lib/i18n"

export default function LocaleSwitcher()
{

    const pathname = usePathname();
    const router = useRouter();

    const current = (pathname.split('/')[1] || 'en') as Locale;


    function toLocale(next: Locale) {
        const parts = pathname.split('/');
        parts[1] = next;
        router.push(parts.join('/') || '/');
    }




    return (
        <select value={current} onChange={(e)=>toLocale(e.target.value as Locale)}>
            {locales.map((locale) => (
                <option value={locale} key={locale} >
                    {locale.toUpperCase()}
                </option>
            ))}
        </select>
    )
}