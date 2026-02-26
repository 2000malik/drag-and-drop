import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core';

import { cloudSummaryCards } from '../data';

type SummaryItem = {
  id: string;
  item: (typeof cloudSummaryCards)[number];
};
export const useSummaryActions = () => {
  const buildInitialItems = (): SummaryItem[] =>
    cloudSummaryCards.map((card) => ({
      id: card.title,
      item: card,
    }));

  const [items, setItems] = useState<SummaryItem[]>(buildInitialItems);

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
  return { items, setItems, buildInitialItems, handleDragEnd };
};
