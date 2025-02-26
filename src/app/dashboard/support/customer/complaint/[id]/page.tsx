"use client";

import { useParams } from 'next/navigation';
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

export default function ComplaintDetailsPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="bg-[#F5F5F5] p-8 min-h-screen">
      {/* Header moved outside the card */}
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
            <h3 className="font-semibold mb-4">User Name</h3>
            <input 
              type="text" 
              value="Justice Adam" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Return Address</h3>
            <input 
              type="text" 
              value="No. 52 Wuse Bannex Plaza, Abuja" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Phone Number</h3>
            <input 
              type="text" 
              value="+234 903 456 7890" 
              disabled 
              className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
            />
          </div>
        </div>

        {/* Reason for Complaint */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Reason for Complaint</h3>
          <textarea 
            disabled
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            className="w-full h-[200px] p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB] resize-none"
          />
        </div>

        {/* Business Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Business Details</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Business Name</h3>
              <input 
                type="text" 
                value="Yakoyo" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Business Address</h3>
              <input 
                type="text" 
                value="Garki Central, Abuja" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Business Phone Number</h3>
              <input 
                type="text" 
                value="+234 802 435 2220" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Manager Number</h3>
              <input 
                type="text" 
                value="+234 701 889 6702" 
                disabled 
                className="w-full p-3 rounded-lg border border-[#D0D5DD] bg-[#F9FAFB]"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Notify Business
        </button>
      </div>
    </div>
  );
} 