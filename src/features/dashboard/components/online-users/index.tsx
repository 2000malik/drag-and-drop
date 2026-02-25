import React from 'react';
import { UserRound } from 'lucide-react';

import { TransparentSectionCard } from '../cards/transparent-section-card';
import { Card } from '../../../../components';

export const OnlineUsers: React.FC = () => {
  return (
    <Card>
      <TransparentSectionCard
        title='Online Users'
        subTitle='View your comprehensive online users'
        icon={<UserRound size={21} />}
      />
    </Card>
  );
};
