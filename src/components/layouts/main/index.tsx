import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className='fixed top-17 left-65.5 right-3 bottom-3 overflow-y-auto scroll-smooth mt-3'>
      <div className='max-w-7xl mx-auto'>{children}</div>
    </main>
  );
};
