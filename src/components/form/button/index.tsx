import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../../libs/utils';

type Props = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  variant?: 'outline' | 'solid';
  showIcon?: boolean;
};

export const Button: React.FC<Props> = ({ children, variant = 'solid', className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        variant === 'outline'
          ? 'border border-gray-300 bg-white text-btn-outline'
          : 'bg-primary text-white',
        className,
      )}
    >
      {children}
    </button>
  );
};
