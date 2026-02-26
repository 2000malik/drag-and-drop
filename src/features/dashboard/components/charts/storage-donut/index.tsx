import React from 'react';
import { OctagonAlert, Server } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import { storage_chart_data } from '../../../data';
import { Button, Card, HeaderWithIcon } from '../../../../../components';

const USED_PERCENTAGE = 80;

const Legend: React.FC = () => (
  <div className='grid grid-cols-3 gap-x-8 gap-y-3 mt-6'>
    {storage_chart_data.map((entry) => (
      <div key={entry.name} className='flex items-center gap-2'>
        <span className='w-3 h-3 rounded-sm shrink-0' style={{ backgroundColor: entry.color }} />
        <span className='text-sm whitespace-nowrap text-dark'>{entry.name}</span>
      </div>
    ))}
  </div>
);

export const StorageDonutChart: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <HeaderWithIcon title='Storage' icon={<Server size={17} />} isTitleMedium />
      <div className='flex gap-3 w-full'>
        <div className='relative w-64 h-64 shrink-0'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={storage_chart_data}
                cx='50%'
                cy='50%'
                outerRadius={120}
                innerRadius={85}
                dataKey='value'
                strokeWidth={2}
                stroke='#fff'
              >
                {storage_chart_data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Pie
                data={[{ value: 1 }]}
                cx='50%'
                cy='50%'
                outerRadius={78}
                innerRadius={62}
                dataKey='value'
                strokeDasharray='8 6'
                stroke='#596efe'
                strokeWidth={3}
                fill='transparent'
                isAnimationActive={false}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
            <span className='text-2xl font-bold text-dark'>{USED_PERCENTAGE}%</span>
            <span className='text-base text-dark'>Used</span>
          </div>
        </div>

        <div className='flex flex-col flex-1 justify-between'>
          <Card className='border-l-4 border-l-amber-400 border-r-4 border-r-amber-400 shadow-sm px-4 py-3'>
            <div className='flex items-start gap-2'>
              <OctagonAlert size={16} className='text-amber-400 shrink-0 mt-0.5' />
              <div>
                <p className='text-sm font-bold text-purple'>Note</p>
                <p className='text-sm text-dark'>You've almost reached your limit</p>
                <p className='text-sm text-dark'>
                  You have used {USED_PERCENTAGE}% of your available storage. Upgrade plan to access
                  more space.
                </p>
              </div>
            </div>
          </Card>

          <Legend />

          <div className='flex justify-end mt-10'>
            <Button showIcon variant='outline'>
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
