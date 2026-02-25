import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const isActiveLink = ({
  link,
  pathname,
}: {
  link?: string;
  pathname: string;
}) => {
  if (link === "/") {
    return pathname === link;
  }
  return pathname?.startsWith(`${link}`);
};


export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));