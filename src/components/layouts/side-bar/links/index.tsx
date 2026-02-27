import React, { type ReactNode } from 'react';
import { cn } from '../../../../libs/utils';

type ItemType = {
  name: string;
  Icon: ReactNode;
  link?: string;
  isActive?: boolean;
};

type SidebarSectionProps = {
  items: ItemType[];
};

const SidebarItem: React.FC<ItemType> = ({ name, Icon, link = '#', isActive }) => {
  return (
    <li key={name}>
      <a
        href={link}
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
          isActive
            ? 'bg-primary-light text-primary-text font-bold'
            : 'text-dark hover:bg-primary-light hover:text-primary-text hover:font-bold',
        )}
      >
        {Icon}
        <span className='text-sm'>{name}</span>
      </a>
    </li>
  );
};
export const SidebarSection: React.FC<SidebarSectionProps> = ({ items }) => {
  return (
    <ul className='flex flex-col gap-1 '>
      {items.map((item) => (
        <SidebarItem key={item.name} {...item} />
      ))}
    </ul>
  );
};
