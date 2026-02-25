import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Main: React.FC<Props> = ({ children }) => {
  return <div className="p-2 max-w-7xl mx-auto min-h-screen">{children}</div>;
};
