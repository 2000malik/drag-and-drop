import React from 'react';

import { CloudNetwork } from './components/cloud-network';

export const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <CloudNetwork />
    </div>
  );
};
