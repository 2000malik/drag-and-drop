import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentPropsWithoutRef<'div'> & {
  title?: string;
  icon?: ReactNode;
};

export const HeaderWithIcon: React.FC<Props> = ({ title, icon, className, ...props }) => {
  return (
    <div className={twMerge('flex gap-2 items-center justify-between', className)} {...props}>
      <div className='bg-gray-100 rounded-md p-3 h-9 flex items-center'>
        {icon && <span className='text-gray-700'>{icon}</span>}
      </div>
      {title && <h3 className='text-lg font-bold text-dark'>{title}</h3>}
    </div>
  );
};
