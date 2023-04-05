import Link from 'next/link';

import { Header } from '@/components/Header';
import * as S from '@/styles/pages/list.styles';

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

async function getList(): Promise<TrainingDay[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/trainings/list`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function ListPage() {
  const list = await getList();

  return (
    <>
      <Header title="Gym Workout" />

      <S.Main>
        <S.List>
          {list.map((item) => (
            <li key={item.weekDay}>
              <Link href={`/training/${item.weekDay}`}>{item.weekDayName}</Link>
            </li>
          ))}
        </S.List>
      </S.Main>
    </>
  );
}
