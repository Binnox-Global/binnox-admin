import CircleProgressBarCard from "@/components/cards/CircleProgressBarCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { FileSvg } from "@/components/icons/FileSvg";
import { RecentDelivery } from "@/components/tables/RecentDelivery";
import { RiderList } from "@/components/tables/RiderList";

const percentage = 85;

function RidersPage() {
  return (
    <div className="flex flex-col gap-[50px] text-black">
      {/* Regular Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column - Charts */}
        <div className="space-y-8">
          <RecentDelivery />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
          {/* state circle progress bar */}
          <CircleProgressBarCard percentage={percentage} />
        </div>
      </div>

      <div className="">
        <RiderList />
      </div>
    </div>
  );
}

export default RidersPage;
