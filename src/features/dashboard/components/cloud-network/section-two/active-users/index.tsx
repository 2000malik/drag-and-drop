import React, { useEffect, useState } from 'react';
import { UserRound } from 'lucide-react';
import { verticalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import { MapCard } from './map-card';
import { country_data } from '../../../../data';
import { Card, Select } from '../../../../../../components';
import { durationFilters } from '../../../../../../constants';
import { CountryStatCard } from '../../../cards/country-stat-card';
import { DraggableItem } from '../../../../../../hooks/use-drag-item';
import { useDraggableList } from '../../../../hooks/use-draggable-list';
import { TransparentSectionCard } from '../../../cards/transparent-section-card';
import { DragContextWrapper } from '../../../../../../hooks/use-drag-context-wrapper';

export const ActiveUsers: React.FC = () => {
  const [coords, setCoords] = useState({ lat: 6.5244, lng: 3.3792 });
  const { items: countries, handleDragEnd } = useDraggableList(country_data, (c) => c.country);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => console.warn('Location access denied, using Lagos as default'),
    );
  }, []);

  return (
    <Card className='h-full flex flex-col px-6'>
      <TransparentSectionCard
        title='Active Users'
        icon={<UserRound size={17} />}
        action={
          <Select
            options={durationFilters}
            placeholder='Select period'
            defaultValue='month'
            onChange={(e) => console.log(e.target.value)}
            className='w-23'
          />
        }
      />

      <div className='grid grid-cols-2 gap-5 flex-1 min-h-0'>
        <MapCard lat={coords.lat} lng={coords.lng} className='h-full' />

        <DragContextWrapper onDragEnd={handleDragEnd}>
          <SortableContext
            items={countries.map((c) => c.id)}
            strategy={verticalListSortingStrategy}
          >
            <div
              className='flex flex-col gap-2 h-full'
              aria-live='polite'
              aria-label='Sortable country list'
            >
              {countries.map(({ id, item }) => (
                <DraggableItem key={id} id={id}>
                  <CountryStatCard
                    flagSrc={item.flagSrc}
                    country={item.country}
                    percentage={item.percentage}
                    className='flex-1'
                  />
                </DraggableItem>
              ))}
            </div>
          </SortableContext>
        </DragContextWrapper>
      </div>
    </Card>
  );
};
