'use client';

import Link from 'next/link';

import map from 'lodash/map';

import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import * as S from '@/styles/pages/list.styles';
import { useQuery } from '@tanstack/react-query';

type Training = {
  title: string;
  description?: string;
  src: string;
  reps?: string;
}

type TrainingDay = {
  weekDay: number;
  weekDayName: string;
  trainings: Training[];
}

// async function getList(): Promise<TrainingDay[]> {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trainings/list`);
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default function ListPage() {
  // const data = await getList();

  const { isLoading, data } = useQuery<TrainingDay[]>({
    queryKey: ['training-weekdays'],
    queryFn: () =>
      fetch('/api/trainings/list').then(
        (res) => res.json()
      )
  });

  return (
    <>
      <Header title="Gym Workout" />

      <S.Main>
        <S.List>
          {isLoading
            ? (<Loader />)
            : map(data, (item) => (
              <li key={item.weekDay}>
                <Link href={`/training/${item.weekDay}`}>{item.weekDayName}</Link>
              </li>
            ))
          }
        </S.List>
      </S.Main>
    </>
  );
}
