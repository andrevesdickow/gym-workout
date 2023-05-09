import { Inter } from 'next/font/google';

import Providers from './providers';

import './globals.css';

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
    <html lang="pt-BR" className={`${inter.className} bg-white dark:bg-black/95`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
