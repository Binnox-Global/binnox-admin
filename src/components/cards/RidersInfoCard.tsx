"use client";

import { IdVerifiedSvg } from "@/components/icons/IdVerifiedSvg";

interface RiderProfile {
  name: string;
  joinDate: string;
  email: string;
  phoneNo: string;
  location: string;
  votersCardNumber: string;
  votersCardImage: string;
  avatar: string;
}

const defaultProfile: RiderProfile = {
  name: "Abdul Isa",
  joinDate: "31st March, 2023",
  email: "Abdulisa223@gmail.com",
  phoneNo: "+234 810 567 890 1136",
  location: "45 New Avenue, Wuse Abuja",
  votersCardNumber: "6789012345",
  votersCardImage: "Image",
  avatar: "/images/avatar.png"
};

const InfoRow = ({ label, value, verified = false }: { label: string; value: string; verified?: boolean }) => (
  <div className="flex items-start">
    <span className="text-[#98A2B3] text-lg w-[200px]">{label}</span>
    <span className="text-[#98A2B3] px-2">:</span>
    <div className="flex items-center gap-2">
      <span className="text-black text-lg font-medium">{value}</span>
      {verified && (
        <div className="px-3 py-1 bg-[#ECFDF3] rounded-[16px] flex items-center gap-1">
          <span className="text-[#027A48] text-sm">Verified</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L9.4 1.4L11.4 0.8L12.2 2.8L14.3 3L14.1 5.1L16 6.5L14.6 7.9L15.2 9.9L13.2 10.7L13 12.8L10.9 12.6L9.5 14.5L8.1 13.1L6.1 13.7L5.3 11.7L3.2 11.5L3.4 9.4L1.5 8L2.9 6.6L2.3 4.6L4.3 3.8L4.5 1.7L6.6 1.9L8 0ZM7.3 5.3L6 6.6L7.4 8L11.4 4L10.1 2.7L7.4 5.4L7.3 5.3Z" fill="#12B76A"/>
          </svg>
        </div>
      )}
    </div>
  </div>
);

const VerificationRow = ({ label, value }: { label: string; value: string }) => (
  <div className="w-full">
    <h3 className="text-[#98A2B3] text-lg mb-2">{label}</h3>
    <div className="flex items-center justify-between bg-[#F9FAFB] rounded-lg p-4">
      <div className="flex items-center gap-3">
        <IdVerifiedSvg className="w-6 h-6 text-[#667085]" />
        <span className="text-black font-medium">{value}</span>
      </div>
      <div className="px-3 py-1 bg-[#ECFDF3] rounded-[16px] flex items-center gap-1">
        <span className="text-[#027A48] text-sm">Verified</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0L9.4 1.4L11.4 0.8L12.2 2.8L14.3 3L14.1 5.1L16 6.5L14.6 7.9L15.2 9.9L13.2 10.7L13 12.8L10.9 12.6L9.5 14.5L8.1 13.1L6.1 13.7L5.3 11.7L3.2 11.5L3.4 9.4L1.5 8L2.9 6.6L2.3 4.6L4.3 3.8L4.5 1.7L6.6 1.9L8 0ZM7.3 5.3L6 6.6L7.4 8L11.4 4L10.1 2.7L7.4 5.4L7.3 5.3Z" fill="#12B76A"/>
        </svg>
      </div>
    </div>
  </div>
);

export const RidersInfoCard = () => {
  return (
    <div className="w-full bg-white rounded-[7.37px] shadow-[0px_3.68px_27.64px_0px_#8362EA0D] p-4 sm:p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-24 h-24 rounded-full bg-[#F4F4F4]">
          <img 
            src={defaultProfile.avatar} 
            alt={defaultProfile.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black mb-1">{defaultProfile.name}</h2>
          <p className="text-[#667085]">Joined {defaultProfile.joinDate}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <InfoRow label="Email" value={defaultProfile.email} />
        <InfoRow label="Phone No" value={defaultProfile.phoneNo} />
        <InfoRow label="Location" value={defaultProfile.location} />
      </div>

      <div className="space-y-4">
        <VerificationRow label="Voters Card Number" value={defaultProfile.votersCardNumber} />
        <VerificationRow label="Voters Card Image" value={defaultProfile.votersCardImage} />
      </div>
    </div>
  );
};