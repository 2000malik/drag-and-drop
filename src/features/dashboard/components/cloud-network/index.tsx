import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';

import { Button, Card, HeaderWithIcon } from '../../../../components';

export const CloudNetwork: React.FC = () => {
  return (
    <Card className='min-h-17 flex items-center justify-between'>
      <HeaderWithIcon title='Cloud Network' icon={<Globe size={26} />} />
      <ChevronDown />
      <Button>
        View Details
      </Button>
    </Card>
  );
};
