import React from 'react';
import { Card } from '../../../../components';
import { cn } from '../../../../libs/utils';

type CountryStatProps = {
  flagSrc: string;
  country: string;
  percentage: number;
  className?: string;
};

export const CountryStatCard: React.FC<CountryStatProps> = ({
  flagSrc,
  country,
  percentage,
  className,
}) => {
  return (
    <Card className={cn('flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-xl', className)}>
      <img
        src={flagSrc}
        alt={`${country} flag`}
        className='w-12 h-8 object-cover rounded-sm shrink-0'
      />
      <div className='flex flex-col gap-1 flex-1'>
        <p className='text-sm font-medium text-dark'>{country}</p>
        <div className='flex items-center gap-2'>
          <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
            <div
              className='h-full bg-[#81d44a] rounded-full transition-all duration-500'
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className='text-sm text-gray-500 shrink-0'>{percentage}%</span>
        </div>
      </div>
    </Card>
  );
};
