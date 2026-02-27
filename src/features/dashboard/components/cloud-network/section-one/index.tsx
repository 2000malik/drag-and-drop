import React from 'react';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import { Card } from '../../../../../components';
import { cloudSummaryCards } from '../../../data';
import { StorageDonutChart } from '../../charts/storage-donut';
import { SummaryGroupCard } from '../../cards/summary-group-card';
import { DraggableItem } from '../../../../../hooks/use-drag-item';
import { useDraggableList } from '../../../hooks/use-draggable-list';
import { DragContextWrapper } from '../../../../../hooks/use-drag-context-wrapper';

export const SectionOne: React.FC = () => {
  const { items, handleDragEnd } = useDraggableList(cloudSummaryCards, (card) => card.title);
  return (
    <div className='grid grid-cols-2 gap-3 min-h-100'>
      <DragContextWrapper onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((i) => i.id)} strategy={rectSortingStrategy}>
          <div
            className='grid grid-cols-2 gap-2 h-full'
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
                  className='h-full'
                />
              </DraggableItem>
            ))}
          </div>
        </SortableContext>
      </DragContextWrapper>
      <Card className='h-full'>
        <StorageDonutChart />
      </Card>
    </div>
  );
};
