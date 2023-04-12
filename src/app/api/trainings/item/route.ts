import { NextResponse } from 'next/server';

import { filter, head, toNumber } from 'lodash';

import list from '@/data/trainings';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const weekDay = searchParams.get('weekday');

  const trainingDay = filter(list, item => item.weekDay === toNumber(weekDay));

  return NextResponse.json(head(trainingDay) || []);
}
