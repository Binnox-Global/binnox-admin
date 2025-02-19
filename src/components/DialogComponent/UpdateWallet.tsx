"use client";
import React from "react";
import { DialogCloseSvg } from "../icons/DialogCloseSvg";
import { useDialog } from "@/contexts/DialogContext";

function UpdateWallet() {
  const { toggleDialog } = useDialog();
  return (
    <div className="flex flex-col gap-[40px] bg-white w-[862px] h-[452px] p-[47px_30px] rounded-[30px]">
      <div className="header flex justify-between font-['Raleway'] text-[20px] leading-[13px] font-[700] text-black ">
        Update Wallet
        <div
          className="close-button cursor-pointer"
          onClick={() => toggleDialog("open")}
        >
          <DialogCloseSvg height={35} width={34} />
        </div>
      </div>

      <div className="form-container flex flex-col gap-[24px]">
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              Current Wallet Balance
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="N450,900"
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
              placeholder="N480,900"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[14px]">
            <span
              className={`font-['Raleway'] text-[14px] font-bold leading-[13.05px] tracking-[0.005em] text-left`}
            >
              New Wallet Balance
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="N45,900"
            />
          </label>
        </div>
      </div>

      <button className="w-[368px] h-[45px] bg-black rounded-[30px] justify-center items-center self-center mt-auto gap-2 inline-flex">
        <div className="grow shrink basis-0 text-center text-white text-sm font-medium font-['Raleway']">
          Update
        </div>
      </button>
    </div>
  );
}

export default UpdateWallet;
