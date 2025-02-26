"use client";

import { AnalysisCard } from "@/components/cards/AnalysisCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { ProfileGrowthChart } from "@/components/charts/ProfileGrowthChart";
import { FileSvg } from "@/components/icons/FileSvg";
import { UsersAnalytics } from "@/components/tables/UsersAnalytics";

export default function UsersAnalyticsPage() {
  return (
    <div className="flex flex-col gap-[50px]">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total Users"
          value="1,278"
          percentage={16}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Active Users"
          value="902"
          percentage={2}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Inactive Users"
          value="376"
          percentage={-5}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="New Users"
          value="28"
          percentage={1}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Profile Growth and Analysis Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <div className="h-auto">
          <ProfileGrowthChart />
        </div>
        <div className="h-auto">
          <AnalysisCard />
        </div>
      </div>

      {/* Users Analytics Table */}
      <UsersAnalytics />
    </div>
  );
} 