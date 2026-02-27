import React from 'react';

import { cn } from '../../../../../../../libs/utils';

type MapCardProps = {
  className?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
};

export const MapCard: React.FC<MapCardProps> = ({ className, lat = 0, lng = 0 }) => {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik`;

  return (
    <div className={cn('overflow-hidden p-0 min-h-0 border border-gray-300 rounded-lg', className)}>
      <iframe
        src={src}
        title='Map'
        width='100%'
        height='100%'
        className='w-full h-full min-h-80 border-0 rounded-lg'
        loading='lazy'
      />
    </div>
  );
};
