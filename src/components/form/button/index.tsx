import React, { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { cn } from '../../../libs/utils';
import { Zap } from 'lucide-react';

type Props = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode;
  variant?: 'outline' | 'solid';
  showIcon?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  variant = 'solid',
  className,
  showIcon = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        variant === 'outline'
          ? 'border-[1.5px] border-btn-outline bg-white text-btn-outline'
          : 'bg-primary text-white',
        ' flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {showIcon && (
        <span className='mr-2'>
          <Zap />
        </span>
      )}
      {children}
    </button>
  );
};
