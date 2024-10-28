import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest() {
  const locale = 'en';
  const t = await getTranslations({ locale, namespace: 'Manifest' });

  return {
    name: t('name'),
    start_url: '/',
    theme_color: '#101E33',
    name: 'Your App Name',
    short_name: 'App',
    description: 'Your app description',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '',
        sizes: '192x192',
        type: 'images/png'
      },
      {
        src: '',
        sizes: '512x512',
        type: 'images/png'
      }
    ]
  };
}