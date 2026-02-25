import React from "react";
import { Bell, Copy, Search } from "lucide-react";

import { Input } from "../../form";

export const Header: React.FC = () => {
  return (
    // shadow-md
    <div className="fixed top-3 left-70.5 right-3 flex items-center justify-between px-3 h-15 rounded-lg bg-white z-10">
      <Input
        placeholder="Search for users, group or settings"
        className="w-125 text-sm h-9"
        id="dashboard-search"
        leftIcon={<Search size={16} />}
      />
      <div className="flex gap-3 items-center">
        <button
          className="bg-gray-100 rounded-md p-3 h-9 flex items-center"
          id="notification-button"
          aria-label="Notifications"
        >
          <Bell size={16} className="text-gray-700" />
        </button>
        <div className="flex gap-1 bg-gray-100 rounded-md p-3 h-9 items-center">
          <p className="text-sm">Agent Code:</p>
          <b className="text-blue-700 text-sm">03485885hfydks</b>
          <button id="copy-agent-code-button" aria-label="Copy Agent Code">
            <Copy size={16} className="text-gray-700 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
