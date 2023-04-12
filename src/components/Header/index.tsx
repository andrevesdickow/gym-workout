import Link from 'next/link';

import { ArrowLeftShortIcon } from '@/icons';

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
          <ArrowLeftShortIcon />
        </Link>
      )}
      <S.HeaderTitleContent>
        <h2>{title}</h2>
      </S.HeaderTitleContent>
    </S.Header>
  );
};
