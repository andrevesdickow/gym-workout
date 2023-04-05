'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import * as S from '@/styles/pages/home.styles';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const weekDay = new Date().getDay();
      router.replace(`/training/${weekDay}`);
    }, 2000);
  }, [router]);

  return (
    <>
      <Header title="Gym Workout" />

      <S.Main>
        <Loader />
      </S.Main>
    </>
  );
}
