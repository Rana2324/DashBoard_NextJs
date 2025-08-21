import React from "react";

export function SidebarMenuBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
      {children}
    </span>
  );
}
