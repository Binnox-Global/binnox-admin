import { StatsCard } from "@/components/cards/StatsCard";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { FileSvg } from "@/components/icons/FileSvg";
import { RecentOrders } from "@/components/tables/RecentOrders";
import React from "react";

function InventoryPage() {
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
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left Column - Charts */}
        <div className="space-y-8">
          <RecentOrders />
        </div>

        {/* Right Column - Cards */}
        <div className="space-y-8">
          {/* Products pie chat */}
          <div className="w-[335px] h-[317.19px] relative bg-white rounded-xl shadow-[0px_4.088735103607178px_30.665510177612305px_0px_rgba(46,45,116,0.05)]  overflow-hidden p-[21px] flex flex-col items-center gap-[20px]">
            <div className="w-full flex justify-between items-center">
              <div className="text-black text-xl font-semibold font-['Raleway'] leading-relaxed">
                Products
              </div>
              <div className="w-[60.74px] flex items-center gap-2 text-[#a3aed0] text-[11.04px] font-bold font-['Raleway'] leading-[18.41px]">
                Monthly
                <CaretUpSvg size={12} className="rotate-180" />
              </div>
            </div>
            <div className="w-[131.60px] h-[131.60px]">
              <div className="w-[131.60px] h-[131.60px] bg-[#00c713] rounded-full"></div>
            </div>
            <div className="w-full h-[69.02px] bg-white rounded-[13.80px] shadow-[0px_16.564937591552734px_36.81097412109375px_0px_rgba(112,144,176,0.12)] flex-c ol justify-evenly items-center flex overflow-hidden">
              {/*  */}
              <div className="w-[70px] h-[2 8.53px] flex flex-col gap-1.5 ">
                <div className="w-[4 6.93px] h-[10px] flex items-center gap-1.5 text-[#a3aed0] text-[11.04px] font-medium font-['Raleway'] leading-[18.41px]">
                  <div className="w-[7px] h-[7px]">
                    <div className="w-[7px] h-[7px] bg-[#00c713] rounded-full"></div>
                  </div>
                  Available
                </div>
                <div className=" ps-[15px] text-black text-base font-bold font-['Raleway'] leading-7">
                  63%
                </div>
              </div>
              {/*  */}
              <div className="w-[70px] h-[2 8.53px] flex flex-col gap-1.5 ">
                <div className="w-[4 6.93px] h-[10px] flex items-center gap-1.5 text-[#a3aed0] text-[11.04px] font-medium font-['Raleway'] leading-[18.41px]">
                  <div className="w-[7px] h-[7px]">
                    <div className="w-[7px] h-[7px] bg-[#ffd569] rounded-full"></div>
                  </div>
                  Sold
                </div>
                <div className=" ps-[15px] text-black text-base font-bold font-['Raleway'] leading-7">
                  65%
                </div>
              </div>
              {/*  */}
              <div className="w-[85px] h-[2 8.53px] flex flex-col gap-1.5 ">
                <div className="w-[4 6.93px] h-[10px] flex items-center gap-1.5 text-[#a3aed0] text-[11.04px] font-medium font-['Raleway'] leading-[18.41px]">
                  <div className="w-[7px] h-[7px]">
                    <div className="w-[7px] h-[7px] bg-[#ff0000] rounded-full"></div>
                  </div>
                  Out of Stock
                </div>
                <div className=" ps-[15px] text-black text-base font-bold font-['Raleway'] leading-7">
                  25%
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="h-[282px] p-2.5 bg-white rounded-[11.02px] flex-col justify-start items-start gap-7 inline-flex">
            <div className="text-black text-lg font-semibold font-['Raleway']">
              Top Products
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-[9px] flex">
              <div className="w-[314px] h-[26px] relative">
                {/* <div className="w-[314px] h-[0px] left-0 top-[26px] absolute border border-black"></div> */}
                <div className="h-4 left-[4px] top-0 absolute justify-start items-start gap-[98px] inline-flex">
                  <div className="justify-start items-start gap-[63px] flex">
                    <div className="justify-start items-start gap-[78px] flex">
                      <div className="justify-start items-start gap-[21px] flex">
                        <div className="text-black text-[13px] font-medium font-['Raleway']">
                          #
                        </div>
                        <div className="text-black text-[13px] font-medium font-['Raleway']">
                          Name
                        </div>
                      </div>
                      <div className="text-black text-[13px] font-medium font-['Raleway']">
                        Category
                      </div>
                    </div>
                    <div className="text-black text-[13px] font-medium font-['Inter']">
                      Sales
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-end gap-2.5 flex">
                <div className="w-[315px] h-7 relative">
                  <div className="w-[314px] h-[0px] left-0 top-[28px] absolute border border-black/5"></div>
                  <div className="h-[15px] left-[1px] top-[2px] absolute justify-start items-center gap-5 inline-flex">
                    <div className="text-black text-[13px] font-medium font-['Raleway']">
                      01
                    </div>
                    <div className="text-black text-xs font-medium font-['Raleway']">
                      Home Decor
                    </div>
                  </div>
                  <div className="w-[81px] h-px left-[155px] top-[11.01px] absolute">
                    <div className="w-[81px] h-[0px] left-0 top-[0.52px] absolute border-2 border-black/20"></div>
                    <div className="w-[63px] h-[0px] left-0 top-[1px] absolute border-2 border-[#f46702]"></div>
                  </div>
                  <div className="w-[38px] h-[22px] left-[277px] top-0 absolute">
                    <div className="w-[38px] h-[22px] left-0 top-0 absolute bg-[#fcb859]/10 rounded border border-[#fcb859]"></div>
                    <div className="left-[8px] top-[5px] absolute text-[#fcb859] text-[10px] font-medium font-['Inter']">
                      46%
                    </div>
                  </div>
                </div>
                <div className="w-[315px] h-7 relative">
                  <div className="w-[314px] h-[0px] left-0 top-[28px] absolute border border-black/5"></div>
                  <div className="h-[15px] left-[1px] top-[3px] absolute justify-start items-center gap-[19px] inline-flex">
                    <div className="text-black text-[13px] font-medium font-['Raleway']">
                      02
                    </div>
                    <div className="text-black text-xs font-medium font-['Raleway']">
                      Snacks
                    </div>
                  </div>
                  <div className="w-[81px] h-[0.52px] left-[155px] top-[11px] absolute">
                    <div className="w-[81px] h-[0px] left-0 top-[0.52px] absolute border-2 border-black/20"></div>
                    <div className="w-[50px] h-[0px] left-0 top-0 absolute border-2 border-[#f46702]"></div>
                  </div>
                  <div className="w-[38px] h-[22px] left-[277px] top-0 absolute">
                    <div className="w-[38px] h-[22px] left-0 top-0 absolute bg-[#fcb859]/10 rounded border border-[#fcb859]/60"></div>
                    <div className="left-[9px] top-[5px] absolute text-[#fcb859] text-[10px] font-medium font-['Inter']">
                      17%
                    </div>
                  </div>
                </div>
                <div className="w-[315px] h-[30px] pt-px justify-center items-center inline-flex">
                  <div className="w-[315px] h-[29px] relative">
                    <div className="w-[314px] h-[0px] left-0 top-[29px] absolute border border-black/5"></div>
                    <div className="h-[15px] left-[1px] top-[3px] absolute justify-start items-center gap-[18px] inline-flex">
                      <div className="text-black text-[13px] font-medium font-['Raleway']">
                        03
                      </div>
                      <div className="text-black text-xs font-medium font-['Raleway']">
                        Cleaning Supplies
                      </div>
                    </div>
                    <div className="w-[81px] h-[0.52px] left-[155px] top-[11px] absolute">
                      <div className="w-[81px] h-[0px] left-0 top-[0.52px] absolute border-2 border-black/20"></div>
                      <div className="w-10 h-[0px] left-0 top-0 absolute border-2 border-[#f46702]"></div>
                    </div>
                    <div className="w-[38px] h-[22px] left-[277px] top-0 absolute">
                      <div className="w-[38px] h-[22px] left-0 top-0 absolute bg-[#fcb859]/10 rounded border border-[#fcb859]/60"></div>
                      <div className="left-[9px] top-[5px] absolute text-[#fcb859] text-[10px] font-medium font-['Inter']">
                        19%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[315px] h-[30px] pt-px justify-center items-center inline-flex">
                  <div className="w-[315px] h-[29px] relative">
                    <div className="w-[314px] h-[0px] left-0 top-[29px] absolute border border-black/5"></div>
                    <div className="h-[15px] left-[1px] top-[3px] absolute justify-start items-center gap-[18px] inline-flex">
                      <div className="text-black text-[13px] font-medium font-['Raleway']">
                        03
                      </div>
                      <div className="text-black text-xs font-medium font-['Raleway']">
                        Cleaning Supplies
                      </div>
                    </div>
                    <div className="w-[81px] h-[0.52px] left-[155px] top-[11px] absolute">
                      <div className="w-[81px] h-[0px] left-0 top-[0.52px] absolute border-2 border-black/20"></div>
                      <div className="w-10 h-[0px] left-0 top-0 absolute border-2 border-[#f46702]"></div>
                    </div>
                    <div className="w-[38px] h-[22px] left-[277px] top-0 absolute">
                      <div className="w-[38px] h-[22px] left-0 top-0 absolute bg-[#fcb859]/10 rounded border border-[#fcb859]/60"></div>
                      <div className="left-[9px] top-[5px] absolute text-[#fcb859] text-[10px] font-medium font-['Inter']">
                        19%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[314px] h-[22px] relative">
                  <div className="left-0 top-[3.50px] absolute justify-start items-center gap-[18px] inline-flex">
                    <div className="text-black text-[13px] font-medium font-['Raleway']">
                      04
                    </div>
                    <div className="text-black text-xs font-medium font-['Raleway']">
                      Gadgets
                    </div>
                  </div>
                  <div className="w-[81px] h-[0.52px] left-[154px] top-[10.74px] absolute">
                    <div className="w-[81px] h-[0px] left-0 top-[0.52px] absolute border-2 border-black/20"></div>
                    <div className="w-[25px] h-[0px] left-0 top-[0.26px] absolute border-2 border-[#f46702]"></div>
                  </div>
                  <div className="w-[38px] h-[22px] left-[276px] top-[1px] absolute">
                    <div className="w-[38px] h-[22px] left-0 top-0 absolute bg-[#fcb859]/10 rounded border border-[#fcb859]"></div>
                    <div className="left-[8px] top-[5px] absolute text-[#fcb859] text-[10px] font-medium font-['Inter']">
                      29%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;
