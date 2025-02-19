"use client";
import React, { useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";
import { NewProductImageFileSvg } from "../icons/NewProductImageFileSvg";
import { AddIconSvg } from "../icons/AddIconSvg";
import { useDialog } from "@/contexts/DialogContext";

function NewPromo() {
  const [requirePack, setRequirePack] = useState(false);
  const [requireExtra, setRequireExtra] = useState(false);
  const { toggleDialog } = useDialog();

  return (
    <div className="w-[639px] max-h-[1049px] inline-flex gap-[21px] flex-col relative bg-white rounded-lg p-[30px]">
      <div className="w-full h-9 flex">
        <div className="grow shrink basis-0 text-neutral-950 text-[28px] font-medium font-['Raleway'] leading-9">
          New Promo
        </div>
        <div
          className="close-button cursor-pointer"
          onClick={() => toggleDialog("open")}
        >
          <Dialog2CloseSvg />
        </div>
      </div>
      {/*  */}
      <div className="form-container flex flex-col gap-[24px]">
        {/*  */}
        <label className="h-[68px] px-[30px] rounded-lg border-2 border-[#b1cdf3]  justify-between items-center inline-flex cursor-pointer">
          <div className="flex items-center gap-[26px]">
            <NewProductImageFileSvg />{" "}
            <div className="text-black/40 text-sm font-normal font-['Raleway'] leading-[21px]">
              Upload or drop a file right here
            </div>
          </div>
          <div className="text-[#333333] text-sm font-normal font-['Raleway'] leading-[21px]">
            JPEG, PNG, GIF, SVG....
          </div>
          <input type="file" className="hidden" />
        </label>
        {/*  */}
        <div className="flex flex-col gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Name
            </span>
            <input
              type="text"
              className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
        </div>
        {/* flex */}
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Activation Date
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Deactivation Date
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
      </div>
      {/*  */}
      <div className="mt-auto mb-[30px] justify-start items-start gap-[30px] inline-flex">
        <button className="w-[125.48px] h-[41.91px] bg-[#F45309] rounded-lg justify-center items-center gap-[4.97px] inline-flex text-white text-sm font-medium font-['Raleway'] leading-[21px]">
          Activate
        </button>
        <button className="h-[41.91px] w-[97px] bg-[#d3d3d9] rounded-lg justify-center items-center gap-[4.97px] inline-flex text-[#212143] text-sm font-medium font-['Raleway'] leading-[21px]">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewPromo;
