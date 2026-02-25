import React from 'react';
import { Globe } from 'lucide-react';

import { SectionCard } from '../cards/section-card';

export const CloudNetwork: React.FC = () => {
  return (
    <SectionCard
      title='Cloud Network'
      icon={<Globe size={21} />}
      onChevron={() => console.log('chevron')}
    />
  );
};
