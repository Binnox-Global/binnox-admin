import {
  HeaderComponent,
  SidebarComponent,
} from "@/components/NavigationComponent";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <SidebarComponent />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <HeaderComponent />

        {/* Page Content */}
        <main className="p-6 bg-gray-100 h-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
