"use client";

import { ExpandedStatsCard } from "@/components/cards/ExpandedStatsCard";
import { ReturnOrdersAndComplaints } from "@/components/tables/ReturnOrdersAndComplaints";
import { ReturnIconSvg } from "@/components/icons/ReturnIconSvg";
import { ComplaintIconSvg } from "@/components/icons/ComplaintIconSvg";

export default function CustomerSupportPage() {

  return (
    <div className="h-full flex flex-col rounded-[15px]">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ExpandedStatsCard
          icon={<ReturnIconSvg />}
          title="Return"
          leftLabel="Processing"
          leftValue={10}
          middleLabel="Total"
          middleValue={113}
          rightLabel="Resolved"
          rightValue={70}
        />
        <ExpandedStatsCard
          icon={<ComplaintIconSvg />}
          title="Complaint"
          leftLabel="Processing"
          leftValue={6}
          middleLabel="Total"
          middleValue={56}
          rightLabel="Resolved"
          rightValue={50}
        />
      </div>

      {/* Table Section */}
      <ReturnOrdersAndComplaints />
    </div>
  );
}