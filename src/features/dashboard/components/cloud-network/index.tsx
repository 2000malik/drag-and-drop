import React, { Fragment } from 'react';
import { Globe } from 'lucide-react';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import { Card } from '../../../../components';
import { SectionCard } from '../cards/section-card';
import { StorageDonutChart } from '../charts/storage-donut';
import { SummaryGroupCard } from '../cards/summary-group-card';
import { DraggableItem } from '../../../../hooks/use-drag-item';
import { DragContextWrapper } from '../../../../hooks/use-drag-context-wrapper';
import { useDraggableList } from '../../hooks/use-draggable-list';
import { cloudSummaryCards } from '../../data';

export const CloudNetwork: React.FC = () => {
  const { items, handleDragEnd } = useDraggableList(cloudSummaryCards, (card) => card.title);

  return (
    <Fragment>
      <SectionCard
        title='Cloud Network'
        icon={<Globe size={21} />}
        onChevron={() => console.log('chevron')}
      />
      <div className='grid grid-cols-2 gap-3'>
        <DragContextWrapper onDragEnd={handleDragEnd}>
          <SortableContext items={items.map((i) => i.id)} strategy={rectSortingStrategy}>
            <div
              className='grid grid-cols-2 gap-2'
              aria-live='polite'
              aria-label='Sortable dashboard sections'
            >
              {items.map(({ item, id }) => (
                <DraggableItem key={item.title} id={id}>
                  <SummaryGroupCard
                    title={item.title}
                    icon={item.icon}
                    value={item.value}
                    percentageChange={item.percentageChange}
                    isNegative={item.isNegative}
                  />
                </DraggableItem>
              ))}
            </div>
          </SortableContext>
        </DragContextWrapper>
        <Card>
          <StorageDonutChart />
        </Card>
      </div>
    </Fragment>
  );
};
