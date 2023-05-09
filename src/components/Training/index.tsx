import Image from 'next/image';

import { Countdown } from '@/components/Countdown';

type TrainingProps = {
  title: string;
  imgSrc: string;
  imgPriority?: boolean;
  reps?: string;
  hasCountdown?: boolean;
};

export const Training = ({
  title,
  imgSrc,
  imgPriority,
  reps,
  hasCountdown = true
}: TrainingProps) => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center gap-6 p-2">
      <h3 className="p-6 text-lg font-bold dark:text-white">{title} {reps && <small className="text-xs">({reps})</small>}</h3>
      <Image
        src={imgSrc}
        alt={title}
        width={360}
        height={360}
        priority={imgPriority}
        className="w-auto h-auto md:w-full md:h-auto md:max-h-60 dark:invert"
      />
      {hasCountdown === true && <Countdown />}
    </div>
  );
};
