"use client";
import React, { useState } from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";
import { NewProductImageFileSvg } from "../icons/NewProductImageFileSvg";
import { AddIconSvg } from "../icons/AddIconSvg";

function ProductDiscount() {
  const [requirePack, setRequirePack] = useState(false);
  const [requireExtra, setRequireExtra] = useState(false);
  const [discountType, setDiscountType] = useState<string | null>(null);

  return (
    <div className="w-[639px] max-h-[1049px] inline-flex gap-[21px] flex-col relative bg-white rounded-lg p-[30px]">
      <div className="w-full h-9 flex">
        <div className="grow shrink basis-0 text-neutral-950 text-[28px] font-medium font-['Raleway'] leading-9">
          Product Discount
        </div>
        <div className="close-button cursor-pointer">
          <Dialog2CloseSvg />
        </div>
      </div>
      {/*  */}
      <div className="form-container flex flex-col gap-[24px]">
        {/*  */}
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
        {/*  */}
        <div className="h-[60px] px-2.5 py-5 bg-[#f0f0f0] rounded-[10px] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div className="justify-center items-center gap-[22px] inline-flex">
            <div className="w-5 h-5 justify-center items-center flex">
              <div className="w-5 h-5 relative flex-col justify-start items-start flex">
                <div className="w-5 h-5 bg-[#f36523] rounded-full shadow-[0px_4px_4px_0px_rgba(229,229,229,0.25)] border border-[#d9d9d9]" />
              </div>
            </div>
            <div className="w-[415px] text-black text-sm font-semibold font-['Raleway']">
              Jollof Rice
            </div>
            <div className="w-[69px] text-right text-black text-sm font-medium font-['Raleway']">
              ₦2,200
            </div>
          </div>
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
        {/*  */}
        <div className="">
          <label className="flex gap-[8px] h-[20px] items-center">
            <input
              type="checkbox"
              className="mr-[10px]"
              checked={discountType == "date" ? true : false}
              onClick={() =>
                discountType === "date"
                  ? setDiscountType(null)
                  : setDiscountType("date")
              }
            />
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount by date
            </span>
          </label>
          {discountType && discountType === "date" && (
            <div className="flex mt-[24px] gap-[20px] justify-between">
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
          )}
        </div>

        <div className="">
          <label className="flex gap-[8px] h-[20px] items-center">
            <input
              type="checkbox"
              checked={discountType == "number" ? true : false}
              className="mr-[10px]"
              onClick={() =>
                discountType === "number"
                  ? setDiscountType(null)
                  : setDiscountType("number")
              }
            />
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Discount by number of use
            </span>
          </label>
          {discountType && discountType === "number" && (
            <div className="flex w-full gap-[20px] mt-[24px] justify-between">
              <label className="flex w-full flex-col gap-[8px]">
                <span
                  className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
                >
                  Number of available discount
                </span>
                <input
                  type="text"
                  className="w-full h-[44px] px-[21px] gap-[10px] rounded-[8px] border-[2px] border-[#b1cdf3] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
                  placeholder="N400"
                />
              </label>
            </div>
          )}
        </div>
        {/*  */}
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

export default ProductDiscount;
