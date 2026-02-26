import React, { type ReactNode } from 'react';
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DndContextProps,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

type Props = DndContextProps & {
  children?: ReactNode;
};
export const DragContextWrapper: React.FC<Props> = ({ children, ...props }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} {...props}>
      {children}
    </DndContext>
  );
};
