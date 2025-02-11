"use client";
import React, { useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";
import { NewProductImageFileSvg } from "../icons/NewProductImageFileSvg";
import { AddIconSvg } from "../icons/AddIconSvg";

function AddDiscount() {
  const [requirePack, setRequirePack] = useState(false);
  const [requireExtra, setRequireExtra] = useState(false);

  return (
    <div className="w-[639px] max-h-[1049px] inline-flex gap-[21px] flex-col relative bg-white rounded-lg p-[30px]">
      <div className="w-full h-9 flex">
        <div className="grow shrink basis-0 text-neutral-950 text-[28px] font-medium font-['Raleway'] leading-9">
          Add Discount
        </div>
        {/* <div className="close-button cursor-pointer">
          <Dialog2CloseSvg />
        </div> */}
      </div>
      {/*  */}
      <div className="form-container flex flex-col gap-[24px]">
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
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Description
            </span>
            <input
              type="text"
              className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        {/* flex */}
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount Type
            </span>
            <select
              name=""
              id=""
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
            >
              <option value="">Select discount</option>
              <option value="">Rate</option>
              <option value="">Percent</option>
            </select>
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Percentage
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        <div className="">
          <label className="flex gap-[8px] h-[17px] items-center">
            <input
              type="checkbox"
              className="mr-[10px]"
              onClick={() => setRequirePack(!requirePack)}
            />
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount by date
            </span>
          </label>
        </div>

        <div className="">
          <label className="flex gap-[8px] h-[17px] items-center">
            <input
              type="checkbox"
              className="mr-[10px]"
              // onClick={() => setRequireExtra(!requireExtra)}
            />
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount by number of use
            </span>
          </label>
        </div>

        <label className="flex flex-col gap-[8px]">
          <span
            className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
          >
            Customer use once
          </span>
          <select
            name=""
            id=""
            className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
          >
            <option value="">Select discount</option>
            <option value="">True</option>
            <option value="">False</option>
          </select>
        </label>

        <div className="h-11 p-2 bg-[#fdddce] rounded-lg border flex-col justify-center items-start inline-flex">
          <div className="text-[#f6753a] px-2  text-sm font-normal font-['Raleway'] leading-[21px]">
            A user can only use this discount once
          </div>
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

export default AddDiscount;
