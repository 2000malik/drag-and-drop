import React, { Fragment } from 'react';
import { Globe } from 'lucide-react';

import { SectionOne } from './section-one';
import { SectionCard } from '../cards/section-card';
import { SectionTwo } from './section-two';

export const CloudNetwork: React.FC = () => {
  return (
    <Fragment>
      <SectionCard
        title='Cloud Network'
        icon={<Globe size={21} />}
        onChevron={() => console.log('chevron')}
      />
      <SectionOne />
      <SectionTwo />
    </Fragment>
  );
};
