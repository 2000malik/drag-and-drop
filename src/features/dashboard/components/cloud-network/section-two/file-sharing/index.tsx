import React from 'react';
import { ChartColumnIncreasing, Files, Landmark } from 'lucide-react';

import { Card, Select } from '../../../../../../components';
import { durationFilters } from '../../../../../../constants';
import { TransparentSectionCard } from '../../../cards/transparent-section-card';
import { ProductivityBarChart } from '../../../charts/productive-bar-chart';

export const FileSharing: React.FC = () => {
  return (
    <Card className='h-full flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <TransparentSectionCard
          title='File Sharing'
          subTitle={`Keep track of your files and how they're shared`}
          icon={<Files size={17} />}
        />
        <div className='flex gap-2'>
          <div className='flex items-center justify-center border border-primary-light rounded-lg px-3 bg-primary-light text-primary-text'>
            <Landmark />
          </div>
          <div className='flex items-center justify-center border border-gray-300 rounded-lg px-3 bg-white'>
            <ChartColumnIncreasing />
          </div>
          <Select
            options={durationFilters}
            placeholder='Select period'
            defaultValue='month'
            onChange={(e) => console.log(e.target.value)}
            className='w-23'
          />
        </div>
      </div>
      <ProductivityBarChart />
    </Card>
  );
};
