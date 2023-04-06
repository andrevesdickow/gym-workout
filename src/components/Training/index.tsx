import Image from 'next/image';

import { Countdown } from '@/components/Countdown';

import * as S from './styles';

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
    <S.Container>
      <h3>{title} {reps && <small>({reps})</small>}</h3>
      <Image
        src={imgSrc}
        alt={title}
        width={360}
        height={360}
        priority={imgPriority}
      />
      {hasCountdown === true && <Countdown />}
    </S.Container>
  );
};
