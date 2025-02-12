"use client";

interface ReferralCode {
  userCode: string;
  championCode: string;
}

const defaultCodes: ReferralCode = {
  userCode: "www.binnox.app/kemikal",
  championCode: "www.binnox.app/kemikalcm1"
};

const ReferralRow = ({ label, code }: { label: string; code: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full">
      <h3 className="font-raleway font-medium text-[12.19px] leading-[14.31px] text-[#00000080] mb-2">
        {label}
      </h3>
      <div className="flex items-center justify-between bg-[#F0EFF1] rounded-[10.16px] py-[7.11px] pl-[10.16px] pr-4 gap-[10.16px]">
        <span className="font-medium text-black">{code}</span>
        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-[#FDF1E8] rounded-lg text-[#F46702] font-medium"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export const ReferralCard = () => {
  return (
    <div className="w-full min-w-[341px] min-h-[262px] bg-white rounded-[7.37px] shadow-[0px_3.68px_27.64px_0px_#8362EA0D] p-4 sm:p-6">
      <h2 className="font-raleway font-semibold text-[18.42px] leading-[27.64px] tracking-[0.01em] text-black mb-6">
        Referral Code
      </h2>
      
      <div className="space-y-4">
        <ReferralRow 
          label="User Referral Code" 
          code={defaultCodes.userCode} 
        />
        <ReferralRow 
          label="Champions Referral Code" 
          code={defaultCodes.championCode} 
        />
      </div>
    </div>
  );
};