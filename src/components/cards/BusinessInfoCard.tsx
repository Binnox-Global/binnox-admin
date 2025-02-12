"use client";

import { IdVerifiedSvg } from "@/components/icons/IdVerifiedSvg";

interface BusinessInfo {
  businessName: string;
  email: string;
  phoneNo: string;
  location: string;
  businessHours: string;
  managerName: string;
  managerEmail: string;
  managerPhone: string;
  cacNumber: string;
  cacImage: string;
}

const defaultInfo: BusinessInfo = {
  businessName: "Dominos Pizza",
  email: "Dominozpizz@gmail.com",
  phoneNo: "+234 810 567 890 1136",
  location: "45 New Avenue, Wuse Abuja",
  businessHours: "8am - 6pm",
  managerName: "Precious Nwabia",
  managerEmail: "Preciousnwabia@gmail.com",
  managerPhone: "+234 810 567 890 1136",
  cacNumber: "67890123456",
  cacImage: "Image",
};

export const BusinessInfoCard = () => {
  return (
    <div className="w-full sm:min-w-[300px] lg:min-w-[331.99px] bg-white rounded-[7.37px] shadow-[0px_3.68px_27.64px_0px_#8362EA0D] p-4 sm:p-6">
      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Business Information</h2>
          <div className="space-y-3">
            <InfoRow label="Business Name" value={defaultInfo.businessName} />
            <InfoRow label="Email" value={defaultInfo.email} />
            <InfoRow label="Phone No" value={defaultInfo.phoneNo} />
            <InfoRow label="Location" value={defaultInfo.location} />
            <InfoRow label="Business Hours" value={defaultInfo.businessHours} />
          </div>
        </section>

        <div className="h-px bg-[#EAECF0]" />

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Manager Information</h2>
          <div className="space-y-3">
            <InfoRow label="Manager Name" value={defaultInfo.managerName} />
            <InfoRow label="Manager Email" value={defaultInfo.managerEmail} />
            <InfoRow label="Phone Number" value={defaultInfo.managerPhone} />
          </div>
        </section>

        <div className="h-px bg-[#EAECF0]" />

        <section>
          <h2 className="text-lg sm:text-xl font-medium text-[#667085] mb-4">CAC Registration Number</h2>
          <div className="bg-[#F9FAFB] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IdVerifiedSvg className="w-5 h-5 text-[#667085]" />
              <span className="font-medium">{defaultInfo.cacNumber}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#ECFDF3]">
              <span className="text-sm text-[#027A48]">Verified</span>
              <VerifiedIcon className="w-4 h-4 text-[#027A48]" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-medium text-[#667085] mb-4">CAC Registration Image</h2>
          <div className="bg-[#F9FAFB] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IdVerifiedSvg className="w-5 h-5 text-[#667085]" />
              <span className="font-medium">{defaultInfo.cacImage}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#ECFDF3]">
              <span className="text-sm text-[#027A48]">Verified</span>
              <VerifiedIcon className="w-4 h-4 text-[#027A48]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
    <span className="text-sm sm:text-base text-[#667085] sm:w-[140px]">{label}:</span>
    <span className="text-sm sm:text-base font-medium text-black">{value}</span>
  </div>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6667 5.33333L7.00001 9L5.33334 7.33333M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);