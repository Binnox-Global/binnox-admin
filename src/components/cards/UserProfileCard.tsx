"use client";

interface UserProfile {
  name: string;
  joinDate: string;
  email: string;
  phoneNo: string;
  location: string;
  avatar: string;
}

const defaultProfile: UserProfile = {
  name: "Abdul Isa",
  joinDate: "31st March, 2023",
  email: "Abdulisa223@gmail.com",
  phoneNo: "+234 810 567 890 1136",
  location: "45 New Avenue, Wuse Abuja",
  avatar: "/images/avatar.png"
};

export const UserProfileCard = () => {
  return (
    <div className="w-full sm:min-w-[300px] lg:min-w-[331.99px] bg-white rounded-[10.16px] shadow-[0px_3.68px_27.64px_0px_#8362EA0D] p-4 sm:p-6">
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
          <p className="text-[#37353599]">Joined {defaultProfile.joinDate}</p>  
        </div>
      </div>

      <div className="space-y-4">
        <InfoRow label="Email" value={defaultProfile.email} />
        <InfoRow label="Phone No" value={defaultProfile.phoneNo} />
        <InfoRow label="Location" value={defaultProfile.location} />
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start">
    <span className="text-[#37353599] text-lg w-[120px]">{label}</span>
    <span className="text-[#37353599] px-2">:</span>
    <span className="text-black text-lg font-medium">{value}</span>
  </div>
);