import './globals.css';
import ThemeRegistry from './_theme/ThemeRegistry';
import { Metadata } from 'next';
import { Navbar } from './_components/navbar/Navbar';
import { Footer } from './_components/Footer';
import { Box, Stack } from '@mui/joy';
import { Redirects } from './_components/Redirects';

export const metadata: Metadata = {
  title: { default: 'W3C Web of Things', template: '%s | W3C Web of Things' },
  description: 'Open web standards for interoperable connected products, platforms, and services.',
  keywords: ['W3C', 'Web of Things', 'WoT', 'IoT', 'interoperability', 'open standards'],
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Mastodon integration */}
        <link rel="me" href="https://w3c.social/@wot" />
      </head>
      <body>
        <Redirects />
        <ThemeRegistry>
          <Stack minHeight="100vh">
            <Navbar />
            <Box component="main" flex={1}>
              {props.children}
            </Box>
            <Footer />
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
