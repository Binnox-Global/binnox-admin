"use client";
import { BusinessInfoCard } from "@/components/cards/BusinessInfoCard";
import { OrdersInProgressCard } from "@/components/cards/OrdersInProgressCard";
import { OrderStatusCard } from "@/components/cards/OrderStatusCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { FileSvg } from "@/components/icons/FileSvg";
import { RecentOrders } from "@/components/tables/RecentOrders";
import { WithdrawalHistory } from "@/components/tables/WithdrawalHistory";
import { useParams } from "next/navigation";

export default function BusinessDetailsPage() {
  const params = useParams(); // Get dynamic route params
  const businessId = params.id; // Extract the 'id' from the route

  return (
    <div className="flex flex-col gap-[50px] text-black">
      <div className="h-[45.27px] items-center justify-between inline-flex">
        <div className="justify-start items-center gap-5 flex">
          <div className="text-black text-[40px] font-bold font-['Raleway'] leading-[13.05px] tracking-tight">
            Dominos Pizza
          </div>
        </div>
        <div className="h-[33.75px] justify-end items-center gap-[23px] inline-flex">
          <div className="p-[10.87px] bg-[#00c713] rounded-md justify-center items-center gap-2 flex overflow-hidden">
            <div className="text-white text-[10.20px] font-bold font-['Raleway'] leading-[11.10px] tracking-tight">
              Active
            </div>
          </div>
          <div className="p-[10.87px] bg-[#ff0000] rounded-md justify-center items-center gap-2 flex overflow-hidden">
            <div className="text-white text-[10.20px] font-bold font-['Raleway'] leading-[11.10px] tracking-tight">
              Action
            </div>
            <div data-svg-wrapper>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.10034 0.610175C1.246 0.46456 1.44353 0.382757 1.64949 0.382757C1.85546 0.382757 2.05299 0.46456 2.19865 0.610175L7.08664 5.49817L11.9746 0.610175C12.0463 0.535989 12.132 0.476815 12.2268 0.436107C12.3215 0.395399 12.4235 0.373972 12.5266 0.373076C12.6297 0.37218 12.732 0.391833 12.8275 0.430888C12.9229 0.469943 13.0096 0.527618 13.0826 0.600548C13.1555 0.673478 13.2132 0.760201 13.2522 0.855659C13.2913 0.951117 13.3109 1.0534 13.31 1.15653C13.3091 1.25967 13.2877 1.36159 13.247 1.45635C13.2063 1.55112 13.1471 1.63683 13.0729 1.70848L7.6358 7.14563C7.49014 7.29125 7.29261 7.37305 7.08664 7.37305C6.88068 7.37305 6.68315 7.29125 6.53749 7.14563L1.10034 1.70848C0.954727 1.56282 0.872925 1.36529 0.872925 1.15933C0.872925 0.953365 0.954727 0.755835 1.10034 0.610175Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div data-svg-wrapper>
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.52986 20.9138C2.91626 20.9138 2.39118 20.6955 1.9546 20.2589C1.51801 19.8223 1.29935 19.2969 1.29861 18.6825V4.17939H0.182983V1.94814H5.76111V0.83252H12.4549V1.94814H18.033V4.17939H16.9174V18.6825C16.9174 19.2961 16.6991 19.8216 16.2625 20.2589C15.8259 20.6962 15.3004 20.9145 14.6861 20.9138H3.52986ZM5.76111 16.4513H7.99236V6.41064H5.76111V16.4513ZM10.2236 16.4513H12.4549V6.41064H10.2236V16.4513Z"
                fill="#FF0000"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column - Charts */}
        <div className="space-y-8">
          {/* Regular Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <StatsCard
              title="Total Orders"
              value="902"
              percentage={2}
              timeFrame="today"
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
          </div>

          <div className="">
            <RecentOrders />
          </div>
          <div className="">
            <WithdrawalHistory />
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
          <div className="min-w-[338px] w-full h-[52px] px-[10.87px] py-5 bg-black rounded-md justify-center items-center gap-1.5 inline-flex overflow-hidden">
            <div className="text-white text-sm font-bold font-['Raleway'] leading-[11.10px] tracking-tight">
              View Product Inventory (86)
            </div>
          </div>
          <OrderStatusCard />
          <OrdersInProgressCard />
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
          <BusinessInfoCard />
        </div>
      </div>
    </div>
  );
}
