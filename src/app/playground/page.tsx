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
import { OrdersInProgressCard } from "@/components/cards/OrdersInProgressCard";
import { BusinessInfoCard } from "@/components/cards/BusinessInfoCard";
import { UserProfileCard } from "@/components/cards/UserProfileCard";
import { OrderStatusCard } from "@/components/cards/OrderStatusCard";
import { RidersInfoCard } from "@/components/cards/RidersInfoCard";
import { ReferralCard } from "@/components/cards/ReferralCard";
import { ExpandedStatsCard } from "@/components/cards/ExpandedStatsCard";
import { DeliveryTruckSvg } from "@/components/icons/DeliveryTruckSvg";
import { ProductsSvg } from "@/components/icons/ProductsSvg";
import { ComplaintsSvg } from "@/components/icons/ComplaintsSvg";
import { BusinessList } from "@/components/tables/BusinessList";
import { UserList } from "@/components/tables/UserList";
import { RiderList } from "@/components/tables/RiderList";
import { ChampionList } from "@/components/tables/ChampionList";
import { OrderList } from "@/components/tables/OrderList";
import { InventoryList } from "@/components/tables/InventoryList";
import { UsersAnalytics } from "@/components/tables/UsersAnalytics";
import { BusinessAnalytics } from "@/components/tables/BusinessAnalytics";
import { RidersAnalytics } from "@/components/tables/RidersAnalytics";
import { OrdersAnalytics } from "@/components/tables/OrdersAnalytics";
import { ReturnOrdersAndComplaints } from "@/components/tables/ReturnOrdersAndComplaints";
import { WithdrawalHistory } from "@/components/tables/WithdrawalHistory";
import { RecentDelivery } from "@/components/tables/RecentDelivery";
import { ComplaintHistory } from "@/components/tables/ComplaintHistory";
import { InventoryOverviewList } from "@/components/tables/InventoryOverviewList";
import { RecentRevenues } from "@/components/tables/RecentRevenues";

export default function Playground() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-semibold mb-6">Component Playground</h1>
      
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

      {/* Expanded Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <ExpandedStatsCard 
          icon={<DeliveryTruckSvg className="w-6 h-6 lg:w-8 lg:h-8 text-[#F46702]" />}
          title="Delivery"
          leftLabel="Processing"
          leftValue={10}
          rightLabel="Processed"
          rightValue={4720}
        />
        <ExpandedStatsCard 
          icon={<ProductsSvg className="w-6 h-6 lg:w-8 lg:h-8 text-[#F46702]" />}
          title="Product"
          leftLabel="Pending"
          leftValue={102234}
          rightLabel="Completed"
          rightValue={28901}
        />
        <ExpandedStatsCard 
          icon={<ComplaintsSvg className="w-6 h-6 lg:w-8 lg:h-8 text-[#F46702]" />}
          title="Complaint"
          leftLabel="Refund"
          leftValue={15}
          rightLabel="Report"
          rightValue={36}
        />
        <ExpandedStatsCard 
          icon={<FileSvg className="w-6 h-6 lg:w-8 lg:h-8 text-[#F46702]" />}
          title="Users"
          leftLabel="Active"
          leftValue={892}
          rightLabel="Total"
          rightValue={1278}
        />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column - Charts */}
        <div className="space-y-8">
          {/*<RevenueChart />
          <VisitorsChart />
          <UserOverviewChart />
          <SalesOverviewChart />
          <CustomerAcquisitionChart />
          <ProfileGrowthChart />
          <WeeklyRevenueChart />*/}
          <RecentOrders />
          <WithdrawalHistory />
          <RecentDelivery />
          <ComplaintHistory />
          <InventoryOverviewList />
          <RecentRevenues />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
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
         {/*} <OrdersInProgressCard />
          <BusinessInfoCard />
          <UserProfileCard />
          <OrderStatusCard />
          <RidersInfoCard />
          <ReferralCard />*/}
        </div>
      </div>

      <div className="w-full">
        <ReturnOrdersAndComplaints />
        <OrdersAnalytics />
        <RidersAnalytics />
        <BusinessAnalytics />
        <UsersAnalytics />
        <InventoryList />
        <OrderList />
        <ChampionList />
        <RiderList />
        <UserList />
        <BusinessList />
      </div>
    </div>
  );
}