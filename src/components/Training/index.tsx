import Image from 'next/image';

import * as S from './styles';

type TrainingProps = {
  title: string;
  imgSrc: string;
  imgPriority?: boolean;
  reps?: string;
};

export const Training = ({
  title,
  imgSrc,
  imgPriority,
  reps
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
    </S.Container>
  );
};