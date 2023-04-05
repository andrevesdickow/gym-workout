import { NextResponse } from 'next/server';

import list from '@/data/trainings';

export async function GET() {
  return NextResponse.json(list);
}
