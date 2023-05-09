'use client';

import { useState } from 'react';

import { IconButton } from '@/components/IconButton';
import { PlayIcon, ResetIcon } from '@/icons';

export const Countdown = () => {
  const [counter, setCounter] = useState(50);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        }

        clearInterval(interval);
        return prevCounter;
      });
    }, 1000);
  };

  const handleReset = () => {
    setPlaying(false);
    setCounter(50);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <span className="text-7xl dark:text-white">{counter}</span>
        <div className="flex gap-2">
          <IconButton icon={<PlayIcon />} onClick={handlePlay} disabled={playing} />
          <IconButton icon={<ResetIcon />} onClick={handleReset} disabled={counter !== 0} />
        </div>
      </div>
    </div>
  );
};
