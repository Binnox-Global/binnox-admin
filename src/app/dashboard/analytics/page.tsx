"use client";

import { StatsCard } from "@/components/cards/StatsCard";
import { ExpandedStatsCard } from "@/components/cards/ExpandedStatsCard";
import { ProfileGrowthChart } from "@/components/charts/ProfileGrowthChart";
import { UsersAnalytics } from "@/components/tables/UsersAnalytics";
import { BusinessAnalytics } from "@/components/tables/BusinessAnalytics";
import { RidersAnalytics } from "@/components/tables/RidersAnalytics";
import { FileSvg } from "@/components/icons/FileSvg";
import { AnalysisCard } from "@/components/cards/AnalysisCard";
import { SalesOverviewChart } from "@/components/charts/SalesOverviewChart";
import { TopProducts } from "@/components/tables/TopProducts";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ExpandedStatsCard
          title="Delivery"
          leftLabel="Processing"
          leftValue={10}
          rightLabel="Processed"
          rightValue={4720}
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <ExpandedStatsCard
          title="Product"
          leftLabel="Available"
          leftValue={102234}
          rightLabel="Sold out"
          rightValue={28901}
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <ExpandedStatsCard
          title="Complaint"
          leftLabel="Refund"
          leftValue={15}
          rightLabel="Report"
          rightValue={36}
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Stats Cards Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Sales"
          value="₦89,345,910"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Orders"
          value="4,245"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Revenue"
          value="₦12,200,000"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Growth (This Month)"
          value="45.01%"
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

      {/* Sales Overview and Top Products Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      <SalesOverviewChart />
      <div className="bg-white rounded-lg p-6 self-start">
        <TopProducts />
      </div>
    </div>

      {/* Analytics Tables */}
      <div className="space-y-6">
        <UsersAnalytics />
        <BusinessAnalytics />
        <RidersAnalytics />
      </div>
    </div>
  );
}