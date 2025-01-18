import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import '../globals.css'
import LocaleProvider from '@/providers/localStorage';
import Footer from '@/components/Footer/Footer';

export default async function LocaleLayout({ children, params }) {
   const { locale } = await params;

  // Verificar que el 'locale' entrante sea válido
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Proporcionar todos los mensajes al lado del cliente
  // es la forma más sencilla de comenzar
  const messages = await getMessages();
  setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale}/>
        <NextIntlClientProvider messages={messages}>

          <Navbar/>
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
