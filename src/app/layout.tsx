import { Inter } from 'next/font/google';

import { StyleSheet } from '@/components/StyleSheet';
import { globalStyles } from '@stitchesConfig';

import Providers from './providers';

export const metadata = {
  title: 'Gym Workout',
  description: 'Treino do meu cotidiano',
  authors: { name: 'Andrêves Dickow', url: 'https://github.com/andrevesdickow' },
  keywords: ['gym', 'training', 'workout']
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: JSX.Element
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
