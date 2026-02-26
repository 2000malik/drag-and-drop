import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../libs/utils';

type Props = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

export const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn('bg-white rounded-lg p-3 min-h-25 overflow-hidden', className)}>
      {children}
    </div>
  );
};
