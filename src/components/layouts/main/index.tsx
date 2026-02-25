import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="p-2 max-w-7xl mx-auto min-h-screen overflow-y-auto scroll-smooth">
      {children}
    </main>
  );
};
