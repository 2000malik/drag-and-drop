import React from "react";

export const SideBar: React.FC = () => {
  return (
    <aside className="bg-white rounded-lg p-2 h-screen fixed top-3 bottom-3 left-3 w-65 ">
      <div className="mb-1 flex items-center justify-center">
        <img src="/src/assets/svgs/snaarp-logo-black.svg" alt="company-logo" width="100px" height="100px" />
      </div>
    </aside>
  );
};
