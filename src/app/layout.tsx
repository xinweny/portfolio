import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xin Wen Yap',
  description: '',
  metadataBase: new URL('https://example.com'),
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'Xin Wen Yap',
    images: [{
      url: '',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
