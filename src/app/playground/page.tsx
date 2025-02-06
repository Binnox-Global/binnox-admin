import { StatsCard } from "@/components/cards/StatsCard";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { VisitorsChart } from "@/components/charts/VisitorsChart";
import { FileSvg } from "@/components/icons/FileSvg";
import { UserOverviewChart } from "@/components/charts/UserOverviewChart";
import { SalesOverviewChart } from "@/components/charts/SalesOverviewChart";
import { CustomerAcquisitionChart } from "@/components/charts/CustomerAcquisitionChart";
import { ProfileGrowthChart } from "@/components/charts/ProfileGrowthChart";
import { WeeklyRevenueChart } from "@/components/charts/WeeklyRevenueChart";
import { RecentOrders } from "@/components/tables/RecentOrders";

export default function Playground() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-semibold mb-6">Component Playground</h1>
      
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

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <RevenueChart />
        <ReviewCard
          averageRating={4.0}
          distribution={{
            5: 50,
            4: 50,
            3: 50,
            2: 50,
            1: 50
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <VisitorsChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <UserOverviewChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <SalesOverviewChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <CustomerAcquisitionChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <ProfileGrowthChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <WeeklyRevenueChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <RecentOrders />
      </div>
    </div>
  );
}