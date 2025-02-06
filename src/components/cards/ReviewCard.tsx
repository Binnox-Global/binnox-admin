import { OptionsSvg } from "../icons/OptionsSvg";
import { StarIconSvg } from "../icons/StarIconSvg";

interface ReviewCardProps {
  averageRating: number;
  distribution: {
    [key: number]: number;
  };
}

export const ReviewCard = ({
  averageRating,
  distribution,
}: ReviewCardProps) => {
  return (
    <div className="w-full sm:min-w-[300px] lg:min-w-[331px] min-h-[320px] rounded-[7.348px] bg-white shadow-[0px_3.674px_27.553px_0px_rgba(131,98,234,0.05)] p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="font-raleway text-base sm:text-[18.369px] font-semibold leading-[27.553px] tracking-[0.184px] text-black">
          Customer Review
        </h2>
        <button className="text-[#858D9D] hover:text-[#1D1F2C]">
          <OptionsSvg size={16} />
        </button>
      </div>

      <div className="w-full flex flex-col p-3 sm:p-4 rounded-[5px] bg-[#F4670233] mb-4 sm:mb-6">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-2 sm:gap-0">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIconSvg 
                key={i}
                className="text-[#F46702]"
                filled={i < Math.floor(averageRating)}
                size={20}
              />
            ))}
          </div>
          <span className="text-black font-raleway text-base sm:text-lg font-semibold">
            {averageRating.toFixed(1)} out of 5
          </span>
        </div>
      </div>

      <div className="text-center text-[rgba(55,53,53,0.60)] font-raleway text-xs font-semibold leading-[27.553px] tracking-[0.12px] mb-4">
        Total review
      </div>

      <div className="space-y-3">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2 sm:gap-4">
            <span className="w-[50px] sm:w-[60px] font-raleway text-[#1D1F2C] text-sm sm:text-base whitespace-nowrap">
              {rating} star
            </span>
            <div className="flex-1 h-2 rounded-full bg-[#F8F9FB] overflow-hidden">
              <div
                className="h-full bg-[#F46702] rounded-full transition-all duration-300"
                style={{
                  width: `${distribution[rating] || 0}%`
                }}
              />
            </div>
            <span className="w-[45px] sm:w-[60px] text-right text-[#858D9D] text-sm sm:text-base">
              {distribution[rating] || 0}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};