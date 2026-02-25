import React from 'react';
import user from '../../../../assets/svgs/woman-user-circle-icon.svg';

type Props = {
  name?: string;
  email?: string;
  pic?: string;
};
export const Avatar: React.FC<Props> = ({ name, email, pic }) => {
  return (
    <div className='px-4 flex items-center  gap-3 mt-3'>
      <img src={pic || user} alt='company-logo' width='50px' height='50px' loading='lazy' />
      <div className='flex flex-col'>
        <p className='text-sm font-medium'>{name || 'Chidinma Snaarp'}</p>
        <a href='mailto:hr@snaarp.com' className='text-xs text-gray-500'>
          {email || 'chidinma@snaarp.com'}
        </a>
      </div>
    </div>
  );
};
