'use client';

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';

import map from 'lodash/map';

import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { Training } from '@/components/Training';
import { CloseIcon } from '@/icons';
import { useQuery } from '@tanstack/react-query';

type Training = {
  title: string;
  description?: string;
  src: string;
  reps?: string;
  hasCountdown?: boolean;
}

type TrainingDay = {
  weekDay: number;
  weekDayName: string;
  trainings: Training[];
}

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const swStyles = {
  slide: {
    width: '100%',
    height: 'calc(100vh - 64px)'
  }
} as { [key: string]: React.CSSProperties };

export default function TrainingPage({ params }: {
  params: { weekday: number };
}) {
  const { weekday } = params;

  const { isLoading, data } = useQuery<TrainingDay>({
    queryKey: ['trainings'],
    queryFn: () =>
      fetch(`/api/trainings/item?weekday=${weekday}`, { cache: 'no-store' }).then(
        (res) => res.json()
      )
  });

  const renderTraining = () => {
    if (!data?.trainings) {
      return (
        <section className="w-full h-[calc(100vh-64px)] grid place-content-center">
          <h4 className="flex font-bold dark:text-white"><CloseIcon className="text-2xl text-yellow-500 mr-2" /> Nenhum treino encontrado</h4>
        </section>
      );
    }

    const views = map(data?.trainings, (item, index) => (
      <Training
        key={item.title}
        title={item.title}
        imgSrc={item.src}
        imgPriority={index === 0}
        reps={item.reps}
        hasCountdown={item.hasCountdown}
      />
    ));

    return (
      <BindKeyboardSwipeableViews
        containerStyle={swStyles.slide}
        axis="y"
        resistance>
        {views}
      </BindKeyboardSwipeableViews>
    );
  };

  return (
    <>
      <Header title="Gym Workout" backHref="/list" />

      <main>
        {isLoading
          ? (<section className="w-full h-[calc(100vh-64px)] grid place-content-center"><Loader /></section>)
          : renderTraining()}
      </main>
    </>
  );
}
