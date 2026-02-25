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
            ? 'bg-[#eef3ff] text-[#596efe] font-bold'
            : 'text-[#919191] hover:bg-[#eef3ff] hover:text-[#596efe] hover:font-bold',
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
