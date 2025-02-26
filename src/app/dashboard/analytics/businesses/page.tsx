"use client";

import { StatsCard } from "@/components/cards/StatsCard";
import { FileSvg } from "@/components/icons/FileSvg";
import { BusinessAnalytics } from "@/components/tables/BusinessAnalytics";

// Import the components we need for the sales chart and top products
import { SalesReport } from "@/components/charts/SalesReport";
import { TopProducts } from "@/components/tables/TopProducts";
import { SalesOverviewChart } from "@/components/charts/SalesOverviewChart";

export default function BusinessAnalyticsPage() {
  return (
    <div className="flex flex-col gap-[50px]">
      {/* Stats Cards First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total Businesses"
          value="102"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Active Businesses"
          value="28"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Verified Businesses"
          value="53"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Inactive"
          value="20"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Stats Cards Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatsCard
          title="Total Made"
          value="₦18,567,099"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Withdrawn"
          value="₦16,000,000"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Total Wallet Balance"
          value="₦2,567,099"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Sales Report and Top Products Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      <SalesOverviewChart />
      <div className="bg-white rounded-lg p-6 self-start">
        <TopProducts />
      </div>
    </div>

      {/* Business Analytics Table */}
      <BusinessAnalytics />
    </div>
  );
} 