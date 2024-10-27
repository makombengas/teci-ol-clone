"use client";

import { useParams, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import {routing} from '@/i18n/routing';

const LanguageSelector = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const searchParams = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());
    function onSelectChange(nextLocale) {
        startTransition(() => {
          router.replace({ pathname, params, query }, { locale: nextLocale, scroll: false });
        });
      }

  return (
    <div className="relative inline-block text-left">
      <div className="  group">
        <button
          type="button"
          className="hover:text-[#57B8D5]  text-[#0060AB] font-extrabold md:text-[1rem]  xl:text-[1.5rem]  inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-sm   focus:outline-none"
        >
          {t('label')}
        </button>
        
        <div className="origin-top-right absolute   mt-2 mx-auto min-w-[12rem] flex justify-start -right-8     divide-y divide-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="py-1 bg-slate-100 flex  ml-[1.25rem] flex-col">
          {routing.locales.map((cur) => (
              <button
              key={cur}
              className="hover:text-[#57B8D5]   block w-full text-left px-4 py-2 text-sm text-[#0060AB] font-extrabold md:text-[1rem]   "
              onClick={() => onSelectChange(cur)}
            >
              {t('locale', {locale: cur})}
            </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;