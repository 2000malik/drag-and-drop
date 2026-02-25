import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="fixed top-17 left-70.5 right-3 bottom-3 overflow-y-auto scroll-smooth p-2">
      {children}
    </main>
  );
};
