import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeftShortIcon } from '@/icons';

type HeaderProps = {
  title: string;
  backHref?: string;
}

export const Header = ({ title, backHref }: HeaderProps) => {
  return (
    <header className="w-full h-16 flex gap-2 place-items-center px-2 bg-yellow-500 dark:text-white">
      {backHref && (
        <Link href={backHref} className="w-8 h-8 grid place-content-center text-lg rounded-full hover:border-solid hover:border-2 hover:border-white hover:bg-white/25">
          <ArrowLeftShortIcon className="w-6 h-6" />
        </Link>
      )}
      <div className="w-full flex justify-center items-center p-4">
        <h2 className="font-bold uppercase text-xl flex items-center gap-2">
          <Image src="/icon.png" width={32} height={32} alt="Logo" className="dark:invert" /> {title}
        </h2>
      </div>
    </header>
  );
};
