"use client";

import { DeliveryTruckSvg } from "@/components/icons/DeliveryTruckSvg";
import { OptionsSvg } from "@/components/icons/OptionsSvg";

interface DeliveryStats {
  processing: number;
  processed: number;
}

const defaultStats: DeliveryStats = {
  processing: 10,
  processed: 4720
};

export const DeliveryStatsCard = ({ stats = defaultStats }: { stats?: DeliveryStats }) => {
  return (
    <div className="w-full bg-white rounded-[30px] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F9F5FF] rounded-[20px]">
            <DeliveryTruckSvg className="w-8 h-8 text-[#F46702]" />
          </div>
          <h2 className="text-[32px] font-bold">Delivery</h2>
        </div>
        <button className="p-2 hover:bg-gray-50 rounded-full">
          <OptionsSvg className="w-6 h-6 text-[#667085]" />
        </button>
      </div>

      <div className="h-[1px] bg-[#EAECF0] mb-6" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-[32px] text-[#667085] font-medium mb-2">Processing</h3>
          <p className="text-[48px] font-bold">{stats.processing}</p>
        </div>
        <div>
          <h3 className="text-[32px] text-[#667085] font-medium mb-2">Processed</h3>
          <p className="text-[48px] font-bold">{stats.processed.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};