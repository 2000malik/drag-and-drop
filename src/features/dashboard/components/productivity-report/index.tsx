import React from 'react';
import { PaintRoller } from 'lucide-react';

import { SectionCard } from '../cards/section-card';

export const ProductivityReport: React.FC = () => {
  return (
    <SectionCard
      title='Productivity Report'
      icon={<PaintRoller size={21} />}
      actionLabel='Upgrade Plan'
      onAction={() => console.log('upgrade')}
      onChevron={() => console.log('chevron')}
      showIcon
    />
  );
};
