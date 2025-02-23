import { StatsCard } from "@/components/cards/StatsCard";
import WalletActivityCard from "@/components/cards/WalletActivityCard";
import { FileSvg } from "@/components/icons/FileSvg";
import { WithdrawalHistory } from "@/components/tables/WithdrawalHistory";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-[50px] text-black">
      <div className="h-[45.27px] items-center justify-between inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <div className="text-black text-[40px] font-bold font-['Raleway'] leading-[13.05px] tracking-tight">
            Dominos Pizza Wallet
          </div>
        </div>
        <Link
          href={"./wallet/update"}
          className="px-5 py-[15px] bg-[#000] rounded-[7px] justify-center items-center gap-2.5 flex text-right text-white text-xs font-bold font-['Raleway'] leading-[13.05px] tracking-tight"
        >
          Update wallet
        </Link>
      </div>
      {/* Regular Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatsCard
          title="Total Revenue"
          value="₦95,324"
          percentage={16}
          timeFrame="₦45,000 today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />

        <StatsCard
          title="Total Orders"
          value="902"
          percentage={2}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />

        <StatsCard
          title="Customers"
          value="1278"
          percentage={-5}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />

        <StatsCard
          title="Businesses Online"
          value="28"
          percentage={1}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />

        <StatsCard
          title="Riders Online"
          value="12"
          percentage={1}
          timeFrame="today"
          icon={<FileSvg className="text-[#F46702]" size={24} />}
        />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column - Charts */}
        <div className="space-y-8">
          <WalletActivityCard />

          <WithdrawalHistory />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8"></div>
      </div>
    </div>
  );
}

export default page;
