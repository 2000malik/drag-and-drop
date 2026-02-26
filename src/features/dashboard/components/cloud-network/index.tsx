import React, { Fragment } from 'react';
import { Globe, UserRound } from 'lucide-react';

import { SectionCard } from '../cards/section-card';
import { SummaryGroupCard } from '../cards/summary-group-card';
import { cloudSummaryCards } from '../../data';

export const CloudNetwork: React.FC = () => {
  return (
    <Fragment>
      <SectionCard
        title='Cloud Network'
        icon={<Globe size={21} />}
        onChevron={() => console.log('chevron')}
      />
      <div className='grid grid-cols-2 gap-3'>
        <div className='grid grid-cols-2 gap-2'>
          {cloudSummaryCards.map((item) => (
            <SummaryGroupCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              value={item.value}
              percentageChange={item.percentageChange}
              isNegative={item.isNegative}
            />
          ))}
        </div>

        <SummaryGroupCard title='Users' icon={<UserRound size={17} />} />
      </div>
    </Fragment>
  );
};
