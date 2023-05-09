import React from 'react';

type IconButtonProps = {
  icon: React.ReactElement;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <button {...rest} className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full text-2xl hover:bg-white/30 focus:border-solid focus:border-1 focus:border-white/40 disabled:pointer-events-none disabled:bg-transparent disabled:opacity-70 dark:text-white">
      {icon}
    </button>
  );
};
