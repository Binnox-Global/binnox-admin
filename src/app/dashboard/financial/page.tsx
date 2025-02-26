"use client";

import { StatsCard } from "@/components/cards/StatsCard";
import { RecentRevenues } from "@/components/tables/RecentRevenues";
import { FileSvg } from "@/components/icons/FileSvg";
import { RecentTransactions } from "@/components/cards/RecentTransactions";
import { WeeklyRevenueChart } from "@/components/charts/WeeklyRevenueChart";

export default function FinancialPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Buttons */}
      <div className="flex justify-between">
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
          <FileSvg className="text-white" size={20} />
          Download Financials
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#00C814] text-white rounded-lg">
          Withdrawal
        </button>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatsCard
              title="Revenue"
              value="₦12,200,000"
              icon={<FileSvg className="text-[#F46702]" size={24} />}
            />
            <StatsCard
              title="Net Profit (This year)"
              value="₦3,900,000"
              icon={<FileSvg className="text-[#F46702]" size={24} />}
            />
          </div>

          {/* Weekly Revenue Chart */}
          <WeeklyRevenueChart />

          {/* Recent Revenues Table */}
          <RecentRevenues />
        </div>

        {/* Right Column */}
        <div className="self-start">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
} 