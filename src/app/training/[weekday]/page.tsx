'use client';

import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';


import { Countdown } from '@/components/Countdown';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { Training } from '@/components/Training';
import { CSSProperties } from '@stitches/react';
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

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const swStyles = {
  slide: {
    width: '100%',
    height: 'calc(100vh - 64px)'
  }
} as { [key: string]: CSSProperties };

export default function TrainingPage({ params }: {
  params: { weekday: number };
}) {
  const { weekday } = params;

  const { isLoading, data } = useQuery<TrainingDay>({
    queryKey: ['trainings'],
    queryFn: () =>
      fetch(`/api/trainings/item?weekday=${weekday}`).then(
        (res) => res.json()
      )
  });

  const renderTraining = () => {
    const views = [] as JSX.Element[];
    const dataLength = data?.trainings.length || 0;

    for (let index = 0; index < dataLength; index++) {
      const item = data?.trainings[index];

      if (item) {
        views.push(
          <Training
            key={item.title}
            title={item.title}
            imgSrc={item.src}
            imgPriority={index === 0}
            reps={item.reps}
          />
        );

        if (index < (dataLength - 1)) {
          views.push(<Countdown />);
        }
      }
    }

    // const views = data?.trainings.map((item, index) => (
    //   <Training
    //     key={item.title}
    //     title={item.title}
    //     imgSrc={item.src}
    //     imgPriority={index === 0}
    //     reps={item.reps}
    //   />
    // ));

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
          ? (<Loader />)
          : renderTraining()}
        {/* <BindKeyboardSwipeableViews
          containerStyle={swStyles.slide}
          axis="y"
          resistance
        > */}
        {/* <Training
            title="Agachamento búlgaro"
            imgSrc="/img/leg/agachamento-bulgaro.gif"
            imgPriority
          />
          <Countdown />
          <Training
            title="Elevação pélvica"
            imgSrc="/img/leg/elevacao-pelvica.gif"
          />
          <Countdown />
          <Training
            title="Cadeira abdutora"
            imgSrc="/img/leg/abducao.webp"
          />
          <Countdown />
          <Training
            title="Cadeira flexora"
            imgSrc="/img/leg/cadeira-flexora.gif"
          />
          <Countdown />
          <Training
            title="Mesa flexora"
            imgSrc="/img/leg/mesa-flexora.webp"
          />
          <Countdown />
          <Training
            title="Panturrilheira"
            imgSrc="/img/leg/panturrilha-sentado.gif"
          /> */}
        {/* </BindKeyboardSwipeableViews> */}
      </main>
    </>
  );
}
