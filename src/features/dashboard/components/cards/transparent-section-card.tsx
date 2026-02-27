import React, { type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '../../../../libs/utils';
import { Button, HeaderWithIcon } from '../../../../components';

type Props = {
  title: string;
  icon: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onChevron?: () => void;
  className?: string;
  subTitle?: string;
  showIcon?: boolean;
  action?: ReactNode;
};

export const TransparentSectionCard: React.FC<Props> = ({
  title,
  icon,
  actionLabel,
  onAction,
  onChevron,
  className,
  subTitle,
  action,
  showIcon,
}) => {
  return (
    <div className={cn('min-h-17 flex items-center justify-between', className)}>
      <div className='flex flex-col gap-1'>
        <HeaderWithIcon  title={title} icon={icon} />
        <p className='text-dark text-sm '>{subTitle}</p>
      </div>
      <div className='flex gap-5'>
        {action && action}
        {actionLabel && (
          <Button showIcon={showIcon} onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        {onChevron && (
          <Button className='bg-white p-0' onClick={onChevron}>
            <ChevronDown className='text-dark' />
          </Button>
        )}
      </div>
    </div>
  );
};
