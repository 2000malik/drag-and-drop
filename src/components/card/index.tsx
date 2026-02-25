import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge("bg-white rounded-lg p-2 min-h-25", className)}
    >
      {children}
    </div>
  );
};
