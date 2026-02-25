import React from 'react';

import { OnlineUsers } from './components/online-users';
import { CloudNetwork } from './components/cloud-network';
import { DeviceManagement } from './components/device-mgt';
import { ProductivityReport } from './components/productivity-report';

export const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <CloudNetwork />
      <DeviceManagement />
      <ProductivityReport />
      <OnlineUsers />
    </div>
  );
};
