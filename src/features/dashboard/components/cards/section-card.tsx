import React, { type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '../../../../libs/utils';
import { Button, Card, HeaderWithIcon } from '../../../../components';

type Props = {
  title: string;
  icon: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onChevron?: () => void;
  className?: string;
  showIcon?: boolean;
};

export const SectionCard: React.FC<Props> = ({
  title,
  icon,
  actionLabel,
  onAction,
  onChevron,
  className,
  showIcon,
}) => {
  return (
    <Card className={cn('min-h-17 flex items-center justify-between', className)}>
      <HeaderWithIcon title={title} icon={icon} />
      <div className='flex gap-5'>
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
    </Card>
  );
};
