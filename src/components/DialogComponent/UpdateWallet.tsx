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
              Current Wallet Balance
            </span>
            <input
              type="text"
              className="w-[375px] h-[42px] px-[21px] gap-[10px] rounded-[10px] bg-[#EDEDED] focus:outline-none font-['Raleway'] text-[14px] font-[500] leading-[13.05px] tracking-[0.005em] text-left text-[#878686]"
              placeholder="N450,900"
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
              placeholder="N480,900"
            />
          </label> */}
          <div className="h-16 flex-col justify-start items-start gap-3.5 inline-flex">
            <div className="text-black text-sm font-bold font-['Raleway'] leading-[13.05px] tracking-tight">
              Amount
            </div>
            <div className="w-[375px] h-10 pe-[21px] bg-[#f9f9f9] rounded-[10px] border justify-between items-center gap-[10px] inline-flex overflow-hidden">
              <input
                type="number"
                className="w-full h-full ps-[20px] focus:outline-none bg-[#f9f9f9] text-[#878686] text-sm font-semibold font-['Raleway'] leading-[13.05px] tracking-tight"
                placeholder="N8,000"
              />

              <div className="flex gap-[10px]">
                {/* icon */}
                <div data-svg-wrapper className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12ZM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z"
                      fill="#F46702"
                    />
                  </svg>
                </div>
                {/* icon */}
                <div data-svg-wrapper className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 12C3 10.8181 3.23279 9.64778 3.68508 8.55585C4.13738 7.46392 4.80031 6.47177 5.63604 5.63604C6.47177 4.80031 7.46392 4.13738 8.55585 3.68508C9.64778 3.23279 10.8181 3 12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12ZM12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H7Z"
                      fill="#F46702"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
