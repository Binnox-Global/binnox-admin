"use client";
import React from "react";
import { DialogCloseSvg } from "../icons/DialogCloseSvg";
import { useDialog } from "@/contexts/DialogContext";

function WithdrawalDetails() {
  const { toggleDialog } = useDialog();
  return (
    <div className="flex flex-col gap-[40px] bg-white w-[862px] h-[510px] p-[47px_30px] rounded-[30px]">
      <div className="header flex justify-between font-['Raleway'] text-[20px] leading-[13px] font-[700] text-black ">
        Withdrawal Details
        {/* <div
          className="close-button cursor-pointer"
          onClick={() => toggleDialog("open")}
        >
          <DialogCloseSvg height={35} width={34} />
        </div> */}
      </div>

      <div className="form-container flex flex-col gap-[24px]">
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Date
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="24-03-2024"
            />
          </label>
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Amount
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="N45,900"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Ticket No.
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="#123456"
            />
          </label>
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Status
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="Pending"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Account Number
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="0123456789"
            />
          </label>
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Account Name
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="John Doe"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Bank
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="GTBank"
            />
          </label>
          {/* <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Amount
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="N45,900"
            />
          </label> */}
        </div>
      </div>
    </div>
  );
}

export default WithdrawalDetails;
