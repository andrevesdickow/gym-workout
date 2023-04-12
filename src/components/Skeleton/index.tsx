import * as S from './styles';

type SkeletonProps = {
  height?: number | string;
  width?: number | string;
  variant?: 'circular' | 'text' | 'box';
}

export const Skeleton = ({
  height = 20,
  width = '100%',
  variant = 'box'
}: SkeletonProps) => {
  let skeletonHeight = height;
  const skeletonWidth = width;

  if (variant === 'circular') {
    skeletonHeight = skeletonWidth;
  }

  return (
    <S.SkeletonBox
      role="progressbar"
      css={{ height: skeletonHeight, width: skeletonWidth }}
      variant={variant}
    />
  );
};
