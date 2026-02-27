import React from 'react';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';

import { ActiveUsers } from './active-users';
import { FileSharing } from './file-sharing';
import { DraggableItem } from '../../../../../hooks/use-drag-item';
import { useDraggableList } from '../../../hooks/use-draggable-list';
import { DragContextWrapper } from '../../../../../hooks/use-drag-context-wrapper';

const SECTION_TWO_ITEMS = [
  { id: 'file-sharing', component: <FileSharing /> },
  { id: 'active-users', component: <ActiveUsers /> },
];
export const SectionTwo: React.FC = () => {
  const { items, handleDragEnd } = useDraggableList(SECTION_TWO_ITEMS, (item) => item.id);
  return (
    <DragContextWrapper onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((i) => i.id)} strategy={rectSortingStrategy}>
        <div
          className='grid grid-cols-2 gap-3 min-h-94'
          aria-live='polite'
          aria-label='Sortable section two'
        >
          {items.map(({ id, item }) => (
            <DraggableItem key={id} id={id}>
              {item.component}
            </DraggableItem>
          ))}
        </div>
      </SortableContext>
    </DragContextWrapper>
  );
};
