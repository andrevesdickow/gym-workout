'use client';

import { useState } from 'react';

import { IconButton } from '@/components/IconButton';
import { Play } from '@phosphor-icons/react';

import * as S from './styles';

export const Countdown = () => {
  const [counter, setCounter] = useState(60);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        }

        navigator.vibrate(200);
        clearInterval(interval);
        return prevCounter;
      });
    }, 1000);
  };

  return (
    <S.Container>
      <S.Timer>
        <span>{counter}</span>
        <IconButton icon={<Play />} onClick={handlePlay} disabled={playing} />
      </S.Timer>
    </S.Container>
  );
};