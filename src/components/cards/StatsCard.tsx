import { OptionsSvg } from "../icons/OptionsSvg";
import { CaretUpSvg } from "../icons/CaretUpSvg";

interface StatsCardProps {
  title: string;
  value: string | number;
  percentage?: number;
  timeFrame?: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({
  title,
  value,
  percentage,
  timeFrame = "today",
  icon,
}: StatsCardProps) => {
  const isPositive = percentage && percentage > 0;

  return (
    <div className="relative w-full min-w-[175px] min-h-[162px] bg-white rounded-[11.02px] p-6 shadow-[0px_3.67px_27.55px_0px_#2E2D740D] flex flex-col gap-[14.7px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center w-[33.064px] h-[33.064px] p-[7.348px] rounded-[7.348px] bg-[#F4ECFB]">
          {icon}
        </div>
        <div className="flex items-center">
          <button className="text-[#858D9D] hover:text-[#1D1F2C]">
            <OptionsSvg size={16} />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-raleway text-[12px] font-semibold leading-[22.043px] tracking-[0.06px] text-[#777980]">
          {title}
        </h3>
        <p className="font-raleway text-[24px] font-bold tracking-[0.24px] text-[#1D1F2C] break-words">
          {value}
        </p>
        {percentage !== undefined && (
          <div className="flex items-center gap-1">
            <div className={`flex items-center text-[12.858px] font-bold tracking-[0.064px] leading-[140%] ${
              isPositive ? "text-[#1A9882]" : "text-red-500"
            }`}>
              {isPositive ? (
                <CaretUpSvg size={12} />
              ) : (
                <CaretUpSvg size={12} className="rotate-180" />
              )}
              <span>{Math.abs(percentage)}%</span>
            </div>
            <span className="font-raleway text-[12.858px] font-semibold leading-[18.369px] tracking-[0.064px] text-[#858D9D]">
              {timeFrame}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};