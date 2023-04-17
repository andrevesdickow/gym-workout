'use client';

import Link from 'next/link';

import { Header } from '@/components/Header';
import { BarbellIcon, ClipboardListIcon } from '@/icons';
import * as S from '@/styles/pages/home.styles';

export default function HomePage() {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const weekDay = new Date().getDay();
  //     router.replace(`/training/${weekDay}`);
  //   }, 100);
  // }, [router]);

  const weekDay = new Date().getDay();

  return (
    <>
      <Header title="Gym Workout" />

      <S.Main>
        <Link href={`/training/${weekDay}`}><BarbellIcon /> Ir para treino do dia</Link>
        <Link href="/list"><ClipboardListIcon /> Escolher outro treino</Link>
      </S.Main>
    </>
  );
}
