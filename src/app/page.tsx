'use client';

import Link from 'next/link';

import { Header } from '@/components/Header';
import { BarbellIcon, ClipboardListIcon } from '@/icons';

export default function HomePage() {
  const weekDay = new Date().getDay();

  return (
    <>
      <Header title="Gym Workout" />

      <div className="w-full h-[calc(100vh-64px)] grid place-content-center gap-2">
        <p className="text-center dark:text-white">Início: 15/05/2023</p>
        <Link href={`/training/${weekDay}`} className="flex flex-row gap-2 items-center justify-center p-3 border-solid border-2 border-black rounded hover:text-yellow-500 hover:border-yellow-500 dark:text-white dark:border-white"><BarbellIcon /> Ir para treino do dia</Link>
        <Link href="/list" className="flex flex-row gap-2 items-center justify-center p-3 border-solid border-2 border-black rounded hover:text-yellow-500 hover:border-yellow-500 dark:text-white dark:border-white"><ClipboardListIcon /> Escolher outro treino</Link>
      </div>
    </>
  );
}
