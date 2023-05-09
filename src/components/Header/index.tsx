import Link from 'next/link';

import { ArrowLeftShortIcon } from '@/icons';

type HeaderProps = {
  title: string;
  backHref?: string;
}

export const Header = ({ title, backHref }: HeaderProps) => {
  return (
    <header className="w-full h-16 flex gap-2 place-items-center bg-yellow-500 dark:text-white">
      {backHref && (
        <Link href={backHref} className="w-8 h-8 grid place-content-center text-lg rounded-full hover:border-solid hover:border-2 hover:border-white hover:bg-white/25">
          <ArrowLeftShortIcon />
        </Link>
      )}
      <div className="w-full flex justify-center items-center p-4">
        <h2 className="font-bold uppercase text-xl">{title}</h2>
      </div>
    </header>
  );
};
