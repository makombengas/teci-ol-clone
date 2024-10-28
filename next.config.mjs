import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
      },
      experimental: {
        // ... autres configurations ...
      },
      pageExtensions: ['jsx', 'js'],
      // Spécifiez le layout racine
      rootLayout: './src/components/BaseLayout',
};
 
export default withNextIntl(nextConfig);