/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TooltipProps } from 'recharts';
import { productivity_data } from '../../../data';

const COLORS = {
  public: '#1a1aff',
  anyoneWithLink: '#4d4dff',
  withinOrg: '#9999ff',
  dark: '#3e3e3e',
};

const CustomTooltip: React.FC<TooltipProps<any, any>> = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className='bg-gray-400/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg'>
      <p className='text-white text-xs font-semibold mb-2 uppercase tracking-wider'>{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.name} className='flex items-center gap-2'>
          <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: entry.color }} />
          <span className='text-white text-sm'>
            {entry.name}: <b>{entry.value}</b>
          </span>
        </div>
      ))}
    </div>
  );
};

const CustomLegend: React.FC = () => (
  <div className='flex justify-center gap-10 mt-4'>
    {[
      { label: 'Public', color: COLORS.public },
      { label: 'Anyone with link', color: COLORS.anyoneWithLink },
      { label: 'Within Organisation', color: COLORS.withinOrg },
    ].map(({ label, color }) => (
      <div key={label} className='flex items-center gap-2'>
        <span className='w-4 h-4 rounded-sm' style={{ backgroundColor: color }} />
        <span className='text-sm font-semibold text-dark'>{label}</span>
      </div>
    ))}
  </div>
);

export const ProductivityBarChart: React.FC = () => {
  return (
    <div className='w-full'>
      <ResponsiveContainer width='100%' height={490}>
        <BarChart
          data={productivity_data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          barGap={-8}
        >
          <CartesianGrid vertical={false} stroke='#e5e7eb' strokeDasharray='4 4' />
          <XAxis
            dataKey='month'
            axisLine={false}
            tickLine={false}
            tick={{ fill: COLORS.dark, fontSize: 12 }}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: COLORS.dark, fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
          <Bar
            dataKey='anyoneWithLink'
            name='Anyone with link'
            fill={COLORS.anyoneWithLink}
            radius={[6, 6, 0, 0]}
            maxBarSize={18}
            
          />
          <Bar
            dataKey='public'
            name='Public'
            fill={COLORS.public}
            radius={[6, 6, 0, 0]}
            maxBarSize={18}
          />
          <Bar
            dataKey='withinOrg'
            name='Within Organisation'
            fill={COLORS.withinOrg}
            radius={[6, 6, 0, 0]}
            maxBarSize={18}
          />
        </BarChart>
      </ResponsiveContainer>
      <CustomLegend />
    </div>
  );
};
