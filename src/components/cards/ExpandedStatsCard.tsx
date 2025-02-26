"use client";

import { OptionsSvg } from "@/components/icons/OptionsSvg";

interface ExpandedStats {
  icon: React.ReactNode;
  title: string;
  leftLabel: string;
  leftValue: number;
  middleLabel?: string;
  middleValue?: number;
  rightLabel: string;
  rightValue: number;
}

export const ExpandedStatsCard = ({ 
  icon,
  title,
  leftLabel,
  leftValue,
  middleLabel,
  middleValue,
  rightLabel,
  rightValue
}: ExpandedStats) => {
  return (
    <div className="w-full bg-white rounded-[11.02px] p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <div className="flex items-center gap-[7.35px]">
          <div className="w-[33.06px] h-[33.06px] flex items-center justify-center bg-[#F9F5FF] rounded-[7.35px] p-[7.35px]">
            {icon}
          </div>
          <h2 className="font-raleway font-bold text-[14px] leading-[22.04px] tracking-[0.005em]">
            {title}
          </h2>
        </div>
        <button className="p-1.5 lg:p-2 hover:bg-gray-50 rounded-full">
          <OptionsSvg className="w-5 h-5 lg:w-6 lg:h-6 text-[#667085]" />
        </button>
      </div>

      <div className="h-[1px] bg-[#EAECF0] mb-4 lg:mb-6" />

      <div className={`grid ${middleLabel && middleValue ? 'grid-cols-3' : 'grid-cols-2'} divide-x divide-[#EAECF0]`}>
        {middleLabel && middleValue ? (
          <>
            <div className="pr-2 lg:pr-4">
              <h3 className="font-raleway font-semibold text-[12px] leading-[22.04px] tracking-[0.005em] text-[#777980] mb-1">
                {leftLabel}
              </h3>
              <p className="font-raleway font-bold text-[24px] leading-[28.18px] tracking-[0.01em] text-[#1D1F2C]">
                {leftValue.toLocaleString()}
              </p>
            </div>
            <div className="px-2 lg:px-4">
              <h3 className="font-raleway font-semibold text-[12px] leading-[22.04px] tracking-[0.005em] text-[#777980] mb-1">
                {middleLabel}
              </h3>
              <p className="font-raleway font-bold text-[24px] leading-[28.18px] tracking-[0.01em] text-[#1D1F2C]">
                {middleValue.toLocaleString()}
              </p>
            </div>
            <div className="pl-2 lg:pl-4">
              <h3 className="font-raleway font-semibold text-[12px] leading-[22.04px] tracking-[0.005em] text-[#777980] mb-1">
                {rightLabel}
              </h3>
              <p className="font-raleway font-bold text-[24px] leading-[28.18px] tracking-[0.01em] text-[#1D1F2C]">
                {rightValue.toLocaleString()}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="pr-2 lg:pr-4">
              <h3 className="font-raleway font-semibold text-[12px] leading-[22.04px] tracking-[0.005em] text-[#777980] mb-1">
                {leftLabel}
              </h3>
              <p className="font-raleway font-bold text-[24px] leading-[28.18px] tracking-[0.01em] text-[#1D1F2C]">
                {leftValue.toLocaleString()}
              </p>
            </div>
            <div className="pl-2 lg:pl-4">
              <h3 className="font-raleway font-semibold text-[12px] leading-[22.04px] tracking-[0.005em] text-[#777980] mb-1">
                {rightLabel}
              </h3>
              <p className="font-raleway font-bold text-[24px] leading-[28.18px] tracking-[0.01em] text-[#1D1F2C]">
                {rightValue.toLocaleString()}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};