import { IoArrowBack as ArrowBackIcon } from 'react-icons/io5';

import Link from 'next/link';

import * as S from './styles';

type HeaderProps = {
  title: string;
  backHref?: string;
}

export const Header = ({ title, backHref }: HeaderProps) => {
  return (
    <S.Header>
      {backHref && (
        <Link href={backHref}>
          <ArrowBackIcon />
        </Link>
      )}
      <S.HeaderTitleContent>
        <h2>{title}</h2>
      </S.HeaderTitleContent>
    </S.Header>
  );
};