import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "../../../libs/utils";

type Props = ComponentPropsWithoutRef<"input"> & {
  leftIcon?: ReactNode;
};

export const Input: React.FC<Props> = ({ className, leftIcon, ...props }) => {
  return (
    <div className="relative flex items-center">
      {leftIcon && (
        <span className="absolute left-3 text-gray-400">{leftIcon}</span>
      )}
      <input
        {...props}
        className={cn(
          "border border-gray-300 rounded-lg p-2",
          leftIcon && "pl-9",
          className,
        )}
      />
    </div>
  );
};
