import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  {
    uv: 350,
  },
  {
    uv: 1800,
  },
  {
    uv: 680,
  },
  {
    uv: 3000,
  },
  {
    uv: 4000,
  },
];
type Props = { isNegative?: boolean };
export const TinyChart: React.FC<Props> = ({ isNegative }) => {
  const stoke = !isNegative ? '#34A853' : '#EA4336';
  const fill = !isNegative ? '#34A85324' : '#FFEBEB';
  const chartData = isNegative ? [...data].reverse() : data;
  return (
    <ResponsiveContainer width={170} height={90}>
      <AreaChart
        width={200}
        height={60}
        data={chartData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area type='monotone' dataKey='uv' strokeWidth={2} stroke={stoke} fill={fill} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
