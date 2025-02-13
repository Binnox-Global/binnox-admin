"use client";
import { StatsCard } from "@/components/cards/StatsCard";
import { VisitorsChart } from "@/components/charts/VisitorsChart";
import { FileSvg } from "@/components/icons/FileSvg";
import { UserList } from "@/components/tables/UserList";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const percentage = 85;
export default function UsersPage() {
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
          <VisitorsChart />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
          {/* state circle progress bar */}
          <div className="w-[350px] h-[315px] p-[22px] relative bg-white rounded-[20px] backdrop-blur-[120px]  overflow-hidden inline-flex flex-col gap-[25px]">
            <div className="">
              <div className="text-black text-lg font-bold font-['Raleway'] leading-relaxed">
                User Satisfaction Rate
              </div>
              <div className="text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-[14px]">
                From all purchases
              </div>
            </div>

            {/* circle progress bar */}
            <div className="w-[200px] h-[200px] self-center">
              <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  // rotation: 0.25,
                  rotation: 1,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  // strokeLinecap: "butt",
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  // pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  pathColor: `rgba(244, 103, 2, ${percentage / 100})`,
                  textColor: "#f88",
                  trailColor: "#d6d6d6",
                  // backgroundColor: "#3e98c7",
                })}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <div className="w-12 h-12 bg-[#f46702] rounded-full justify-center items-center flex mb-2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5507_16191)">
                      <path
                        d="M15.0125 2.5C8.11249 2.5 2.52499 8.1 2.52499 15C2.52499 21.9 8.11249 27.5 15.0125 27.5C21.925 27.5 27.525 21.9 27.525 15C27.525 8.1 21.925 2.5 15.0125 2.5ZM15.025 25C9.49999 25 5.02499 20.525 5.02499 15C5.02499 9.475 9.49999 5 15.025 5C20.55 5 25.025 9.475 25.025 15C25.025 20.525 20.55 25 15.025 25ZM19.4 13.75C20.4375 13.75 21.275 12.9125 21.275 11.875C21.275 10.8375 20.4375 10 19.4 10C18.3625 10 17.525 10.8375 17.525 11.875C17.525 12.9125 18.3625 13.75 19.4 13.75ZM10.65 13.75C11.6875 13.75 12.525 12.9125 12.525 11.875C12.525 10.8375 11.6875 10 10.65 10C9.61249 10 8.77499 10.8375 8.77499 11.875C8.77499 12.9125 9.61249 13.75 10.65 13.75ZM15.025 21.875C17.5625 21.875 19.775 20.4875 20.9625 18.4375C21.2 18.025 20.9 17.5 20.4125 17.5H9.63749C9.16249 17.5 8.84999 18.025 9.08749 18.4375C10.275 20.4875 12.4875 21.875 15.025 21.875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5507_16191">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="text-center flex flex-col items-center justify-center gap-1">
                  <div className="text-black text-[28px] font-bold font-['Raleway'] leading-7">
                    {percentage}%
                  </div>
                  <div className="text-black/80 text-xs font-semibold font-['Raleway'] leading-3">
                    Based on star rating
                  </div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <UserList />
      </div>
    </div>
  );
}
