"use client";
import React, { useState } from "react";
import WalletActiveArrowSvg from "../icons/WalletActiveArrowSvg";

function WalletActivityCard() {
  const [filter, setFilter] = useState(["Today", "Weekly", "Monthly"]);
  const [activeFilter, setActiveFilter] = useState("today");
  const [activityData, setActivityData] = useState([
    {
      id: 1,
      type: "Credit",
      creditId: 4580,
      time: "06:24:45 AM",
      amount: "N12,300",
      status: "Pending",
    },
    {
      id: 2,
      type: "Debit",
      creditId: 4581,
      time: "07:15:30 AM",
      amount: "N5,000",
      status: "Completed",
    },
    {
      id: 3,
      type: "Credit",
      creditId: 4582,
      time: "08:45:12 AM",
      amount: "N8,200",
      status: "Failed",
    },
    {
      id: 4,
      type: "Debit",
      creditId: 4583,
      time: "09:30:45 AM",
      amount: "N3,500",
      status: "Completed",
    },
    {
      id: 5,
      type: "Credit",
      creditId: 4584,
      time: "10:20:18 AM",
      amount: "N15,000",
      status: "Pending",
    },
  ]);
  return (
    <div className="w-[680.77px] min-h-[529.34px] px-[18px] py-[30px]  bg-white rounded-[13.28px] flex-col justify-start items-center gap-[42.49px] inline-flex">
      <div className="self-stretch grow px-[20px] justify-between items-center inline-flex">
        <div className="text-black text-lg font-bold font-['Raleway']">
          Wallet Activity
        </div>
        <div className="justify-start items-center gap-[29.21px] flex">
          <div
            onClick={() => setActiveFilter("all")}
            className={`${
              activeFilter === "all"
                ? "bg-black text-white px-[22.13px] py-[8.85px] rounded-[8.85px] "
                : "bg-white text-black"
            } text-xs font-medium font-['Raleway'] cursor-pointer`}
          >
            All
          </div>

          {filter.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveFilter(item.toLowerCase())}
              className={`${
                activeFilter === item.toLowerCase()
                  ? "bg-black text-white px-[22.13px] py-[8.85px] rounded-[8.85px] "
                  : "bg-white text-black"
              } text-xs font-medium font-['Raleway'] cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex-col justify-start items-center gap-[11px] flex">
        {activityData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[78px] px-[20px] py-[10px] justify-between items-center inline-flex"
          >
            <div className="border-[4px] size-[56px] rounded-[12px] border-[#E5E5E5] justify-center items-center inline-flex">
              <WalletActiveArrowSvg
                className={item.type !== "Debit" ? "rotate-180" : "rotate-0"}
                color={item.type === "Debit" ? "#FF0000" : "#61C277"}
                size={24}
              />
            </div>
            <div className="text-black text-xs font-medium font-['Raleway']">
              {item.type}
            </div>
            <div className="text-black text-xs font-medium font-['Raleway']">
              ID: {item.creditId}
            </div>
            <div className="text-black text-xs font-medium font-['Raleway']">
              {item.time}
            </div>
            <div className="text-black text-xs font-medium font-['Raleway']">
              {item.amount}
            </div>
            <div
              className={`${
                item.status === "Pending"
                  ? "text-[#9C9C9C]"
                  : `${
                      item.status === "Completed"
                        ? "text-[#2BC155]"
                        : "text-[#FF0000]"
                    }`
              } text-[14px] font-[600] font-['Raleway'] px-[11.13px] py-[4.85px] rounded-[8.85px]`}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletActivityCard;
