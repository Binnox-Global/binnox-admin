"use client";
import {
  HeaderComponent,
  SidebarComponent,
} from "@/components/NavigationComponent";
import React, { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isFull, setIsFull] = useState(true);
  return (
    <div className="relative flex min-h-full">
      <div className="w-full fixed top-0 z-[10]">
        {/* Header */}
        <HeaderComponent />
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 z-[10] h-screen overflow-hidden overflow-y-scroll bg-[#000000] ${
          !isFull ? " w-[120px] " : " w-[240px]"
        }`}
      >
        <SidebarComponent isFull={isFull} setIsFull={setIsFull} />
      </div>

      <div
        className={` ${
          isFull ? "ms-[240px]" : " ms-[120px] "
        } flex flex-col flex-1 min-h-[100vh] relative `}
      >
        {/* Page Content */}
        <main className=" p-[50px] bg-gray-100 relative mt-[90px]  min-h-[100%]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
