import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

type ColorVariant = 'text' | 'bg' | 'border';

export const isActiveLink = ({ link, pathname }: { link?: string; pathname: string }) => {
  if (link === '/') {
    return pathname === link;
  }
  return pathname?.startsWith(`${link}`);
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getStatusColor = (status: boolean, variant: ColorVariant = 'text'): string => {
  const color = status ? 'danger' : 'success';
  return `${variant}-${color}`;
};

export const getIcon = (status: boolean): string => {
  return status ? 'rotate-0' : 'rotate-180';
};
