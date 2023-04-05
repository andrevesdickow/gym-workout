import React from 'react';

import * as S from './styles';

type IconButtonProps = {
  icon: React.ReactElement;
} & React.ComponentProps<typeof S.Button>

export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <S.Button {...rest}>{icon}</S.Button>
  );
};