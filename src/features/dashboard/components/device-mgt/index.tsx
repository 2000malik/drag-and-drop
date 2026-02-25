import React from 'react';
import { MonitorSmartphone } from 'lucide-react';

import { SectionCard } from '../cards/section-card';

export const DeviceManagement: React.FC = () => {
  return (
    <SectionCard
      title='Device Management'
      icon={<MonitorSmartphone size={21} />}
      actionLabel='Upgrade Plan'
      onAction={() => console.log('upgrade')}
      onChevron={() => console.log('chevron')}
      showIcon
    />
  );
};
