import { getTranslations } from 'next-intl/server';

export default async function manifest() {
  const locale = 'en';
  const t = await getTranslations({ locale, namespace: 'Manifest' });

  const manifest = {
    name: t('name'),
    start_url: '/',
    theme_color: '#101E33',
  };

  return manifest;
}