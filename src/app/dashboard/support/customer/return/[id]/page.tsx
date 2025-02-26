"use client";

import { useParams } from 'next/navigation';
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

export default function ReturnDetailsPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="bg-[#F5F5F5] p-8 min-h-screen">
      {/* Header outside the card */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[32px] font-bold mb-2">ID: 4590</h1>
          <p className="text-[#667085]">Date: 12 - 05 - 2024</p>
        </div>
        <button className="bg-[#FF0000] text-white px-6 py-2 rounded-lg flex items-center gap-2">
          Action
          <CaretUpSvg className="w-4 h-4 transform rotate-180" />
        </button>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-[15px] p-8">
        {/* User Information */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-[14px] font-semibold mb-4">User Name</h3>
            <input 
              type="text" 
              value="Justice Adam" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
            />
          </div>
          <div>
            <h3 className="text-[14px] font-semibold mb-4">Return Address</h3>
            <input 
              type="text" 
              value="No. 52 Wuse Bannex Plaza, Abuja" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
            />
          </div>
          <div>
            <h3 className="text-[14px] font-semibold mb-4">Phone Number</h3>
            <input 
              type="text" 
              value="+234 903 456 7890" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
            />
          </div>
          <div>
            <h3 className="text-[14px] font-semibold mb-4">Price</h3>
            <input 
              type="text" 
              value="₦54,345.00" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
            />
          </div>
        </div>

        {/* Reason for Return */}
        <div className="mb-8">
          <h3 className="text-[14px] font-semibold mb-4">Reason for Return</h3>
          <textarea 
            disabled
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            className="w-full h-[200px] p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085] resize-none"
          />
        </div>

        {/* Products to be returned */}
        <div className="mb-8">
          <h3 className="text-[14px] font-semibold mb-4">Products to be returned</h3>
          <div className="p-4 rounded-lg border border-[#D0D5DD] space-y-3 text-[#667085]">
            <div className="flex justify-between">
              <span>French Fries (1)</span>
              <span>₦9,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Chicken Signature</span>
              <span>₦12,650.00</span>
            </div>
            <div className="flex justify-between">
              <span>Smokey Chicken BBQ</span>
              <span>₦22,970.00</span>
            </div>
            <div className="flex justify-between">
              <span>Burger (3)</span>
              <span>₦7,580.00</span>
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div className="mb-8">
          <h2 className="text-[18px] font-bold mb-6">Business Details</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[14px] font-semibold mb-4">Business Name</h3>
              <input 
                type="text" 
                value="Yakoyo" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
              />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-4">Business Address</h3>
              <input 
                type="text" 
                value="Garki Central, Abuja" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
              />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-4">Business Phone Number</h3>
              <input 
                type="text" 
                value="+234 802 435 2220" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
              />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-4">Manager Number</h3>
              <input 
                type="text" 
                value="+234 701 889 6702" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] text-[#667085]"
              />
            </div>
          </div>
        </div>

        {/* Notify Business Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg mb-8">
          Notify Business
        </button>

        {/* Action Buttons */}
        <div className="mt-8">
          <h2 className="text-[18px] font-bold mb-6">Action</h2>
          <div className="flex gap-4">
            <button className="border border-[#F97316] text-[#F97316] px-6 py-2 rounded-lg flex items-center gap-2">
              Refund to wallet
              <CaretUpSvg className="w-4 h-4 transform -rotate-90" />
            </button>
            <button className="border border-[#D0D5DD] text-[#344054] px-6 py-2 rounded-lg flex items-center gap-2">
              Return to User
              <CaretUpSvg className="w-4 h-4 transform -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 