import '../globals.css';
import ThemeRegistry from '../_theme/ThemeRegistry';
import { Metadata, Route } from 'next';
import { redirect } from 'next/navigation';
import { Navbar } from '../_components/navbar/Navbar';
import { Footer } from '../_components/Footer';
import { Alert, Box, Link, Stack } from '@mui/joy';
import { Redirects } from '../_components/Redirects';
import { LocaleProvider } from '../_components/i18n/LocaleProvider';
import { LOCALES, LOCALE_HREFLANG, isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAlternates, SITE_URL } from '@/lib/i18n/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale: Locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'W3C Web of Things',
      template: '%s | Web of Things',
    },
    description: dict.metadata.description,
    alternates: getAlternates(locale, '/'),
    openGraph: {
      siteName: 'Web of Things',
      title: 'W3C Web of Things',
      description: dict.metadata.description,
      locale: LOCALE_HREFLANG[locale],
      type: 'website',
    },
  };
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (!isLocale(lang)) {
    redirect('/en' as Route);
  }

  const dict = getDictionary(lang);

  return (
    <html lang={LOCALE_HREFLANG[lang]}>
      <head>
        {/* Mastodon integration */}
        <link rel="me" href="https://w3c.social/@wot" />
      </head>
      <body>
        <LocaleProvider lang={lang} dict={dict}>
          <Redirects />
          <ThemeRegistry>
            <Stack minHeight="100vh">
              <Navbar />
              <Box component="main" flex={1}>
                {lang !== 'en' && (
                  <Alert variant="soft" sx={{ borderRadius: 0, textAlign: 'center' }}>
                    {dict.alertBanner.translationNotice}{' '}
                    <Link href="https://github.com/w3c/wot-marketing/issues">GitHub</Link>
                  </Alert>
                )}
                {props.children}
              </Box>
              <Footer />
            </Stack>
          </ThemeRegistry>
        </LocaleProvider>
      </body>
    </html>
  );
}
