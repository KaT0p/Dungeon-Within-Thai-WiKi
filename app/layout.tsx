import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dungeon Within Thailand Wiki',
  description: 'ศูนย์รวมข้อมูล คู่มือ และกลยุทธ์เกม Dungeon Within สำหรับผู้เล่นชาวไทย',
  openGraph: {
    title: 'Dungeon Within Thailand Wiki',
    description: 'ศูนย์รวมข้อมูล คู่มือ และกลยุทธ์เกม Dungeon Within สำหรับผู้เล่นชาวไทย',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Dungeon Within Thailand Wiki' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dungeon Within Thailand Wiki',
    description: 'ศูนย์รวมข้อมูล คู่มือ และกลยุทธ์เกม Dungeon Within สำหรับผู้เล่นชาวไทย',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
