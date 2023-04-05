import { Inter } from 'next/font/google';

import { StyleSheet } from '@/components/StyleSheet';
import { globalStyles } from '@stitchesConfig';

import Providers from './providers';

export const metadata = {
  title: 'Gym Workout',
  description: 'My gym workout training'
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <StyleSheet />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        {globalStyles()}
      </body>
    </html>
  );
}
