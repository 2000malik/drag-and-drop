import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';

export const useDraggableList = <T>(initialItems: T[], getId: (item: T) => string) => {
  const [items, setItems] = useState(() => initialItems.map((item) => ({ id: getId(item), item })));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((i) => i.id === active.id);
        const newIndex = prev.findIndex((i) => i.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return { items, setItems, handleDragEnd };
};
