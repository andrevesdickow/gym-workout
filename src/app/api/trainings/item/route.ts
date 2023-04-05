import { NextResponse } from 'next/server';

import list from '@/data/trainings';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const weekDay = searchParams.get('weekday');

  const trainingDay = list.filter(item => item.weekDay === Number(weekDay));

  return NextResponse.json(trainingDay[0]);
}