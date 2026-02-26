import React, { type ReactNode } from 'react';
import { ArrowDown } from 'lucide-react';

import { TinyChart } from '../charts/tiny-chart';
import { Card, HeaderWithIcon } from '../../../../components';
import { cn, getIcon, getStatusColor } from '../../../../libs/utils';

type Props = {
  className?: string;
  title: string;
  icon: ReactNode;
  value?: string;
  percentageChange?: number;
  isNegative?: boolean;
};
export const SummaryGroupCard: React.FC<Props> = ({
  className,
  title,
  icon,
  percentageChange = 0,
  value,
  isNegative=false,
}) => {
  return (
    <Card className={cn('flex flex-col gap-8 relative min-h-35 py-4', className)}>
      <HeaderWithIcon title={title} icon={icon} isTitleMedium />
      <div className='flex items-center gap-2'>
        <h3 className='text-xl font-bold text-dark'>{value}</h3>
        <div className={cn(getIcon(isNegative))}>
          <ArrowDown className={getStatusColor(isNegative)} />
        </div>
        <p className={getStatusColor(isNegative)}>{`${percentageChange}%`}</p>
      </div>
      <div className='text-dark font-medium text-xs'>Compared to last week</div>
      <div className='absolute bottom-4 right-2'>
        <TinyChart isNegative={isNegative } />
      </div>
    </Card>
  );
};
