import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn } from '../../libs/utils';

type Props = ComponentPropsWithoutRef<'div'> & {
  title?: string;
  icon?: ReactNode;
  isTransparent?: boolean;
};

export const HeaderWithIcon: React.FC<Props> = ({
  title,
  icon,
  isTransparent,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex gap-2 items-center', className)} {...props}>
      <div className={cn('rounded-md h-9 flex items-center', !isTransparent && 'bg-gray-100 p-3')}>
        {icon && <span className='text-gray-700'>{icon}</span>}
      </div>
      {title && <h3 className='text-lg font-bold text-dark'>{title}</h3>}
    </div>
  );
};
