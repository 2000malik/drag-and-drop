import React from 'react';

import logo from '../../../assets/svgs/snaarp-logo-black.svg';

import { Avatar } from './avatar';
import { SidebarSection } from './links';
import { SIDE_BAR_LINKS } from '../../../constants/side-bar';

export const SideBar: React.FC = () => {
  return (
    <aside className='bg-white rounded-lg px-2 pt-10 fixed top-3 bottom-3 left-3 w-65 flex flex-col'>
      {/* Logo */}
      <div className='mb-9 flex items-center justify-center'>
        <img src={logo} alt='Snaarp logo' width={100} height={100} fetchPriority='high' />
      </div>

      {/* Scrollable Content */}
      <div className='flex-1 overflow-y-auto scroll-smooth'>
        <SidebarSection items={SIDE_BAR_LINKS.slice(0, 9)} />
      </div>
      <div className=''>
        <SidebarSection items={SIDE_BAR_LINKS.slice(9, SIDE_BAR_LINKS.length)} />
        <div className='border-t border-[#ececec] mt-4 mb-4'>
          <Avatar />
        </div>
      </div>
    </aside>
  );
};
