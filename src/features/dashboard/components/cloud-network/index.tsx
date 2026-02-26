import React, { Fragment } from 'react';
import { Globe, UserRound } from 'lucide-react';

import { SectionCard } from '../cards/section-card';
import { SummaryGroupCard } from '../cards/summary-group-card';

export const CloudNetwork: React.FC = () => {
  return (
    <Fragment>
      <SectionCard
        title='Cloud Network'
        icon={<Globe size={21} />}
        onChevron={() => console.log('chevron')}
      />
      <div className='grid grid-cols-3 gap-4'>
        <SummaryGroupCard title='Users' icon={<UserRound size={17} />} />
        <SummaryGroupCard title='Users' icon={<UserRound size={17} />} />
        {/* <SummaryGroupCard title='Users' icon={<UserRound size={17} />} />
        <SummaryGroupCard title='Users' icon={<UserRound size={17} />} /> */}
      </div>
    </Fragment>
  );
};
