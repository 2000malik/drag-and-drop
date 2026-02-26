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

export const getStatusColor = (status: number, variant: ColorVariant = 'text'): string => {
  const color = status < 1 ? 'danger' : 'success';
  return `${variant}-${color}`;
};

export const getIcon = (status: number): string => {
  return status < 1 ? '180deg' : 'initial';
};
