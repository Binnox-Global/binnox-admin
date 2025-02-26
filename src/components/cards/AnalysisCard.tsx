"use client";

import { InfoCircleSvg } from "@/components/icons/InfoCircleSvg";
import { ArrowUpSvg } from "@/components/icons/ArrowUpSvg";
import { ArrowDownSvg } from "@/components/icons/ArrowDownSvg";

interface AnalysisItemProps {
  title: string;
  value: string | number;
  yesterday: {
    value: number;
    trend: "up" | "down";
  };
}

const AnalysisItem = ({ title, value, yesterday }: AnalysisItemProps) => {
  const isPositive = yesterday.value > 0;
  const color = isPositive ? "#00C814" : "#FF3D00";
  const Arrow = isPositive ? ArrowUpSvg : ArrowDownSvg;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <h3 className="text-[#98A2B3] text-sm font-medium">{title}</h3>
        <InfoCircleSvg className="text-[#98A2B3]" size={16} />
      </div>
      
      <div className="text-2xl font-bold mt-1">{value}</div>
      
      <div className="flex items-center gap-1 mt-1">
        <span className="text-[#475467] text-xs">yesterday</span>
        <div className="flex items-center gap-0.5" style={{ color }}>
          <span className="text-xs">({yesterday.value > 0 ? "+" : ""}{yesterday.value}%)</span>
          <Arrow className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export const AnalysisCard = () => {
  const analysisData = [
    {
      title: "Total Visitor",
      value: "400",
      yesterday: { value: -0.05, trend: "down" }
    },
    {
      title: "New Users",
      value: "17",
      yesterday: { value: -1.27, trend: "down" }
    },
    {
      title: "Order",
      value: "128",
      yesterday: { value: 30.57, trend: "up" }
    },
    {
      title: "Conversion Rate",
      value: "8.40%",
      yesterday: { value: 3.26, trend: "up" }
    },
    {
      title: "Average sessions",
      value: "01:29",
      yesterday: { value: 112.45, trend: "up" }
    },
    {
      title: "Distance Covered",
      value: "8,250km",
      yesterday: { value: -5.27, trend: "down" }
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Analysis</h2>
      <div className="grid grid-cols-2 gap-x-12 gap-y-6">
        {analysisData.map((item, index) => (
          <AnalysisItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};