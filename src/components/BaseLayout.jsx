import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children, locale }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full scroll-smooth" lang={locale}  >
      <body className={clsx(inter.className, 'flex scroll-smooth h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
        <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}