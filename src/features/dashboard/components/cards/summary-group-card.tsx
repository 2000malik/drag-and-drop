import React, { type ReactNode } from 'react';

import { cn } from '../../../../libs/utils';
import { Card, HeaderWithIcon } from '../../../../components';
import { TinyChart } from '../charts/tiny-chart';
import { ArrowDown } from 'lucide-react';

type Props = {
  className?: string;
  title: string;
  icon: ReactNode;
  value?: string;
  percentageChange?: string;
};
export const SummaryGroupCard: React.FC<Props> = ({
  className,
  title,
  icon,
  percentageChange = '',
  value,
}) => {
  return (
    <Card className={cn('flex flex-col gap-8 relative min-h-45 py-6', className)}>
      <HeaderWithIcon title={title} icon={icon} isTitleMedium />
      <div className='flex items-center gap-3'>
        <h3 className='text-xl font-bold text-dark'>3,555 {value}</h3>
        <ArrowDown />
        <p>{`14${percentageChange}%`}</p>
        
      </div>
      <div className="text-dark font-normal text-base">
            Compared to last week
        </div>
      <div className='absolute bottom-7 right-4'>
        <TinyChart isNegative />
      </div>
    </Card>
  );
};
