"use client";

import { StatsCard } from "@/components/cards/StatsCard";
import { FileSvg } from "@/components/icons/FileSvg";
import { RidersAnalytics } from "@/components/tables/RidersAnalytics";

export default function RidersAnalyticsPage() {
  return (
    <div className="flex flex-col gap-[50px]">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total Riders"
          value="12"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Active Riders"
          value="9"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Inactive Riders"
          value="3"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Rides This Month"
          value="624"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard
          title="Total Made"
          value="₦1,956,179"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Withdrawn"
          value="₦1,390,000"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Wallet Balance"
          value="₦566,179"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Riders Analytics Table */}
      <RidersAnalytics />
    </div>
  );
} 