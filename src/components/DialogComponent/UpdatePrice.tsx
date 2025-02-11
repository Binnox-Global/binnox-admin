import React from "react";
import { Dialog2CloseSvg, DialogCloseSvg } from "../icons/DialogCloseSvg";

function UpdatePrice() {
  return (
    <div className="w-[639px] h-[710px] inline-flex gap-[21px] flex-col relative bg-white rounded-lg p-[30px]">
      <div className="w-full h-9 flex">
        <div className="grow shrink basis-0 text-neutral-950 text-[28px] font-medium font-['Raleway'] leading-9">
          Price Update
        </div>
        {/* <div className="close-button cursor-pointer">
          <Dialog2CloseSvg />
        </div> */}
      </div>
      {/*  */}
      <div className="form-container flex flex-col gap-[24px]">
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              State
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Base Fee
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Unit Fee
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Product Percentage
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Delivery Percentage
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              User Service Percent
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Restaurant Service Percent
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Market Service Percent
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
        <div className="flex gap-[20px] justify-between">
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Last Updated
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N450,900"
            />
          </label>
          <label className="flex flex-col gap-[8px]">
            <span
              className={`text-neutral-950 text-sm font-normal font-['Raleway'] leading-[21px]`}
            >
              Market Service Percent
            </span>
            <input
              type="text"
              className="w-[276px] h-[44px] px-[21px] gap-[10px] rounded-[8px] bg-[#c7c7c7] focus:outline-none text-black text-sm font-normal font-['Raleway'] leading-[21px] "
              placeholder="N400"
            />
          </label>
        </div>
      </div>
      {/*  */}
      <div className="mt-auto mb-[30px] justify-start items-start gap-[30px] inline-flex">
        <button className="w-[125.48px] h-[41.91px] bg-black rounded-lg justify-center items-center gap-[4.97px] inline-flex text-white text-sm font-medium font-['Raleway'] leading-[21px]">
          Update
        </button>
        <button className="h-[41.91px] w-[97px] bg-[#d3d3d9] rounded-lg justify-center items-center gap-[4.97px] inline-flex text-[#212143] text-sm font-medium font-['Raleway'] leading-[21px]">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdatePrice;
