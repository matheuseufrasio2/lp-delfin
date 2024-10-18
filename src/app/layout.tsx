import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Agencia Delfin',
  description: 'Agencia de Marketing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ibmPlexSans.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
