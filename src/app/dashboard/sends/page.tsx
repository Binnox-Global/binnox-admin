"use client";

import { StatsCard } from "@/components/cards/StatsCard";
import { SendsTable } from "@/components/tables/SendsTable";
import { RejectedSendsTable } from "@/components/tables/RejectedSendsTable";
import { OrderRecordsIconSvg } from "@/components/icons";
import { FileSvg } from "@/components/icons/FileSvg";

export default function SendsPage() {
  return (
    <div className="flex flex-col gap-[50px]">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatsCard
          title="Total Orders"
          value="102"
          percentage={8}
          timeFrame="this week"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Pending Orders"
          value="6"
          percentage={-2}
          timeFrame="this week"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Ongoing Order"
          value="4"
          percentage={5}
          timeFrame="this week"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Cancelled Order"
          value="20"
          percentage={-12}
          timeFrame="this week"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
        <StatsCard
          title="Completed Orders"
          value="65"
          percentage={15}
          timeFrame="this week"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Tables Section */}
      <div className="space-y-8">
        <RejectedSendsTable />
        <SendsTable />
      </div>
    </div>
  );
}