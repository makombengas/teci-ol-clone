import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

const routing = defineRouting({
  locales: ['en','fr', 'de'],
  defaultLocale: 'en',
  localeDetection: true,
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      de: '/pfadnamen',
      fr: '/noms-de-fichiers'
    }
  }
});

const Pathnames = Object.keys(routing.pathnames);
const Locale = routing.locales;

const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation(routing);

export { routing, Pathnames, Locale, Link, getPathname, redirect, usePathname, useRouter };