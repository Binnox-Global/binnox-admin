"use client";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { StatsCard } from "@/components/cards/StatsCard";
// import Modal from "@/components/DialogComponent";
import { DialogComponent } from "@/components/DialogComponent";
import OrderDetails from "@/components/DialogComponent/OrderDetails";
import ProductDiscount from "@/components/DialogComponent/ProductDiscount";
import WithdrawalDetails from "@/components/DialogComponent/WithdrawalDetails";
import { FileSvg } from "@/components/icons/FileSvg";
import { OptionsSvg } from "@/components/icons/OptionsSvg";
import { RecentOrders } from "@/components/tables/RecentOrders";
import { useState } from "react";
import Image from "next/image";
import { ProgressBarComponent } from "@/components/ProgressBarComponent/ProgressBar";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[50px] text-black">
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
          <RecentOrders />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
          <BinnoxGrowthComponent />
          <ReviewCard
            averageRating={4.0}
            distribution={{
              5: 50,
              4: 50,
              3: 50,
              2: 50,
              1: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function BinnoxGrowthComponent() {
  return (
    <div className="min-w-[330.64px] w-full h-[551.06px] relative p-[22px] bg-white rounded-lg shadow-[0px_3.6737585067749023px_27.553190231323242px_0px_rgba(131,98,234,0.05)] overflow-hidden">
      <div className="flex-col justify-start items-start gap-[1.84px] inline-flex w-full">
        <div className="text-[#1d1f2c] text-lg font-semibold font-['Raleway'] leading-7 tracking-tight inline-flex justify-between items-center w-full">
          Binnox Growth
          <button className="text-[#858D9D] hover:text-[#1D1F2C]">
            <OptionsSvg size={16} />
          </button>
        </div>
        <div className="text-[#777980] text-[12.86px] font-normal font-['Raleway'] leading-[18.37px] tracking-tight">
          Based on State
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[165px]">
        <Image
          src="/images/Map.svg"
          alt="Binnox Growth Chart"
          width={286}
          height={165}
          className="w-full h-full"
        />
      </div>

      <div className="mt-[22px] flex-col justify-center items-center gap-[22px] inline-flex w-full">
        {/*  */}
        <StateGrowthComponent
          state="Abuja"
          customers={1200}
          progress={80}
          progressColor="bg-[#22CAAD]"
        />
        <StateGrowthComponent
          state="Lagos"
          customers={1340}
          progress={60}
          progressColor="bg-[#F86624]"
        />
        <StateGrowthComponent
          state="Kaduna"
          customers={120}
          progress={49}
          progressColor="bg-[#F9C80E]"
        />
        <StateGrowthComponent
          state="Awka"
          customers={1220}
          progress={90}
          progressColor="bg-[#883DCF]"
        />
        <StateGrowthComponent
          state="Niger"
          customers={2300}
          progress={25}
          progressColor="bg-[#EB3D4D]"
        />
      </div>
    </div>
  );
}

function StateGrowthComponent({
  state,
  customers,
  progress,
  progressColor,
}: {
  state: string;
  progressColor: string;
  customers: number;
  progress: number;
}) {
  return (
    <div className="min-w-[286.55px] w-full max-w-[300px] h-[37.84px] justify-evenly items-center gap-[11.02px] inline-flex">
      <div className="w-[36.74px] h-[36.74px] bg-[#e0e2e7] rounded-[91.84px]" />
      <div className="flex-col justify-center items-start gap-[1.84px] inline-flex">
        <div className=" text-[#1d1f2c] text-[12.86px] font-medium font-['Raleway'] leading-[18.37px] tracking-tight">
          {state}
        </div>
        <div className=" text-[#667085] text-[11.02px] font-normal font-['Raleway'] leading-none tracking-tight">
          {customers} Customers
        </div>
      </div>
      <div className="h-[17px] justify-start items-center gap-[7.35px] flex">
        <ProgressBarComponent
          progress={progress}
          className="w-[50px] bg-[#e0e2e7]"
          progressColor={progressColor}
        />
        <div className="text-center text-[#858d9d] text-[11.02px] font-semibold font-['Raleway'] leading-none tracking-tight">
          {progress}%
        </div>
      </div>
    </div>
  );
}