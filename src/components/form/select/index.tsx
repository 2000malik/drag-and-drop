import React, { type ComponentPropsWithoutRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '../../../libs/utils';

type SelectOption = {
  label: string;
  value: string;
};

type Props = ComponentPropsWithoutRef<'select'> & {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  hideLabel?: boolean;
};

export const Select: React.FC<Props> = ({
  options,
  placeholder,
  label,
  hideLabel = true,
  className,
  ...props
}) => {
  const id = useId();

  return (
    <div className='relative flex items-center'>
      <label htmlFor={id} className={cn('text-sm text-gray-600', hideLabel && 'sr-only')}>
        {label ?? placeholder ?? 'Select an option'}
      </label>
      <select
        {...props}
        id={id}
        className={cn(
          'appearance-none border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          className,
        )}
      >
        {placeholder && (
          <option value='' disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className='absolute right-2 text-gray-500 pointer-events-none' />
    </div>
  );
};
