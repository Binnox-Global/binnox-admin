import React from "react";

function OrderDetails() {
  return (
    <div className="w-[897px] h-[1199px] flex bg-[#f2f2f2] bg-[#7e 7e7e3e] border border-red-500 overflow-hidden rounded-[30px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.14)] shadow-[0px_-4px_155px_0px_rgba(0,0,0,0.15)] shadow-[0px_4px_4px_0px_rgba(250,250,250,1.00)] shadow-[0px_-4px_4px_0px_rgba(244,244,244,1.00)]">
      <div className="w-[315px] h-[1199px] bg-[#e9e9e9] rounded-tl-[30px] rounded-bl-[30px] px-[30px] py-[30px] flex flex-col gap-[30px]">
        {/* user profile */}
        <ProfileDetails
          name=" Abdul Isa"
          phone="+234 814 3744 454"
          email="user@email.com"
        />
        {/* location */}
        <div className="flex flex-col gap-[50px] relative">
          <div className="w-[2px] h-[45px] absolute top-[15.5px] left-[5px]  bg-black/50 " />
          <div className="h-[13.41px] justify-start items-start gap-[19px] inline-flex">
            <div className="w-[13.41px] h-[13.41px]  bg-[#00c814] rounded-full border-2 border-[#00c814]/40" />
            <div className="text-black text-base font-bold font-['Raleway'] leading-none">
              Wuse zone 2, Abuja
            </div>
          </div>
          <div className="h-[13.41px]  justify-start items-center gap-[18px] inline-flex">
            <div className="w-[13.41px] h-[13.41px]  bg-[#00c814] rounded-full border-2 border-[#00c814]/40" />
            {/* </div> */}
            <div className="text-black text-base font-bold font-['Raleway'] leading-none">
              Domino’s Pizza
            </div>
          </div>
        </div>

        {/* payment */}
        <div className="w-[264px] h-[0px] border border-black/10"></div>
        <div className="h-[68px] flex-col justify-start items-start gap-3.5 inline-flex">
          <div className="text-black text-xl font-semibold font-['Raleway'] leading-[30px]">
            Mode of payment
          </div>
          <div className="justify-start items-center gap-3.5 inline-flex">
            <div className="text-[#667085] text-sm font-semibold font-['Raleway'] leading-tight">
              Visa **56
            </div>
            <div className="w-[34px] h-6 relative bg-white rounded border border-[#f2f3f6]">
              <img
                className="w-[23.80px] h-[7.82px] left-[4.80px] top-[8.10px] absolute"
                src="https://via.placeholder.com/24x8"
              />
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[0px] border border-black/10"></div>
        {/* map */}
        <div className="h-[101px] flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="justify-between w-full items-center  flex">
            <div className="text-black text-base font-bold font-['Raleway'] leading-none">
              Map Overview
            </div>
            <div className="icon">icon</div>
          </div>
          <img
            className="w-[260px] h-[65px] rounded-[10px]"
            src="https://via.placeholder.com/260x65"
          />
        </div>
        <div className="w-[264px] h-[0px] border border-black/10"></div>

        {/* order status */}
        <div className="h-[84.80px] flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="text-black/60 text-base font-bold font-['Raleway'] leading-none">
            Order Status
          </div>
          <div className="p-[8.90px] bg-[#ddede4] rounded-[8.90px] justify-start items-center gap-[22.25px] inline-flex">
            <div className="text-[#00c713] text-2xl font-semibold font-['Raleway'] leading-9">
              Completed
            </div>
            <div className="icon">icon</div>
          </div>
        </div>
        <div className="w-[264px] h-[0px] border border-black/10"></div>

        {/* rider details */}

        <div className=" flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="self-stretch text-black/60 text-base font-bold font-['Raleway'] leading-none">
            Riders Info
          </div>
          <ProfileDetails
            name="Michael Abdul"
            phone="+234 810 567 890 1136"
            email="Michaelad@gmail.com"
          />
        </div>
        {/* Store details */}
        <div className="w-[264px] h-[0px] border border-black/10"></div>

        <div className=" flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="self-stretch text-black/60 text-base font-bold font-['Raleway'] leading-none">
            Store Info
          </div>
          <ProfileDetails
            name="Domino’s Pizza"
            phone="+234 810 567 890 1136"
            email="Domino’s@gmail.com"
          />
        </div>
      </div>

      {/* main card */}

      <div className="p-[30px] pt-[40px] flex flex-col gap-[30px]">
        {/* header */}
        <div className="h-[90px] pb-5 border-b border-black/10 justify-start items-start gap-12 inline-flex">
          <div className="flex-col justify-center items-start gap-2 inline-flex">
            <div className="text-[#f46702] text-2xl font-bold font-['Raleway'] leading-[38px]">
              Order ID: 3453
            </div>
            <div className="justify-start items-center gap-1.5 inline-flex">
              <div className="text-[#667085] text-xs font-normal font-['Raleway'] leading-tight">
                Order date:
              </div>
              <div className="text-[#1d2939] text-sm font-semibold font-['Raleway'] leading-normal">
                Feb 16, 2022 - 09:20am
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2.5 flex">
            <div className="px-4 py-2.5 bg-black rounded-lg justify-start items-center gap-2 flex">
              <div className="text-white text-sm font-bold font-['Raleway'] leading-tight">
                Track order
              </div>
              <div className="text-white w-[17px] h-[17px] relative">i</div>
            </div>
            <div className="px-4 py-2.5 rounded-lg border border-[#d0d5dd] justify-start items-center gap-2 flex">
              <div className="w-[17px] h-[17px] relative">i</div>
              <div className="text-[#667085] text-sm font-bold font-['Raleway'] leading-tight">
                Invoice
              </div>
            </div>
          </div>
        </div>

        {/* timeline */}
        <div className=" flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="text-black text-xl font-bold font-['Raleway'] leading-[38px]">
            Timeline
          </div>

          {/* card */}
          <div className="h-[271.65px] p-5 bg-white rounded-[20px] flex-col justify-start items-start gap-[9.24px] inline-flex">
            {/*  */}
            <div className="w-[486.64px] h-[71.06px] relative">
              {/* line */}
              <div className="w-[445px] h-[2.12px] left-[38.81px] top-[29.16px] absolute bg-[#d2d2d2] rounded-sm border" />
              <div className="w-[486.64px] h-[71.06px] pb-[13.86px] left-0 top-0 absolute border-b justify-start items-start gap-[41.27px] inline-flex">
                <div className="w-[90.71px] relative">
                  {/* dot */}
                  <div className="w-[13.55px] h-[13.55px] left-[38.79px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="w-[90.71px] left-0 top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Ordered
                  </div>
                  <div className="w-[66.31px] left-[12.51px] top-[42.20px] absolute text-center text-[#667085] text-[11.09px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:34am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[3.46px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Packaged
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[19.17px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Accepted
                  </div>
                  <div className="w-[90.71px] left-[-0px] top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[2.54px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Order Delivered
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-[486.64px] h-[71.06px] relative">
              {/* line */}
              <div className="w-[445px] h-[2.12px] left-[38.81px] top-[29.16px] absolute bg-[#d2d2d2] rounded-sm border" />
              <div className="w-[486.64px] h-[71.06px] pb-[13.86px] left-0 top-0 absolute border-b justify-start items-start gap-[41.27px] inline-flex">
                <div className="w-[90.71px] relative">
                  {/* dot */}
                  <div className="w-[13.55px] h-[13.55px] left-[38.79px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="w-[90.71px] left-0 top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Ordered
                  </div>
                  <div className="w-[66.31px] left-[12.51px] top-[42.20px] absolute text-center text-[#667085] text-[11.09px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:34am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[3.46px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Packaged
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[19.17px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Accepted
                  </div>
                  <div className="w-[90.71px] left-[-0px] top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[2.54px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Order Delivered
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-[486.64px] h-[71.06px] relative">
              {/* line */}
              <div className="w-[445px] h-[2.12px] left-[38.81px] top-[29.16px] absolute bg-[#d2d2d2] rounded-sm border" />
              <div className="w-[486.64px] h-[71.06px] pb-[13.86px] left-0 top-0 absolute border-b justify-start items-start gap-[41.27px] inline-flex">
                <div className="w-[90.71px] relative">
                  {/* dot */}
                  <div className="w-[13.55px] h-[13.55px] left-[38.79px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="w-[90.71px] left-0 top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Ordered
                  </div>
                  <div className="w-[66.31px] left-[12.51px] top-[42.20px] absolute text-center text-[#667085] text-[11.09px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:34am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[3.46px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Time Packaged
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[19.17px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Accepted
                  </div>
                  <div className="w-[90.71px] left-[-0px] top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
                <div className="w-[90.71px] relative">
                  <div className="w-[13.55px] h-[13.55px] left-[35.94px] top-[23.10px] absolute bg-[#28f200] rounded-md" />
                  <div className="left-[2.54px] top-0 absolute text-center text-black text-[11.09px] font-semibold font-['Raleway'] leading-[17.25px]">
                    Order Delivered
                  </div>
                  <div className="w-[90.71px] left-0 top-[42.20px] absolute text-center text-[#667085] text-[9.86px] font-medium font-['Raleway'] leading-[14.78px]">
                    09:50am
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product details */}
        <div className="h-[606px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="justify-start items-start gap-[275.60px] inline-flex">
            <div className="text-black text-xl font-bold font-['Raleway']">
              Products details
            </div>
          </div>
          <div className="justify-start items-start gap-[287px] inline-flex">
            <div className="w-[146px] h-[142px] text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
              French Fries (1)
              <br />
              Chicken Signature (2)
              <br />
              Smoky Chicken BBQ
              <br />
              Burger (1)
            </div>
            <div className="w-[71px] h-[142px] text-right text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
              N2,300.00
              <br />
              N5,800.00
              <br />
              N1,200.00
              <br />
              N2,500.00
            </div>
          </div>
          <div className="w-[501px] h-[0px] border border-[#e9e9e9]"></div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-black text-base font-bold font-['Raleway']">
              Special instruction
            </div>
            <div className="w-[508px] px-[9px] py-[15px] bg-[#e9e9e9] rounded-[10px] justify-start items-center gap-2.5 inline-flex overflow-hidden">
              <div className="w-[484px] text-justify text-[#373434]/60 text-xs font-semibold font-['Raleway'] leading-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-[377px] inline-flex">
            <div className="text-black text-[17px] font-semibold font-['Raleway'] leading-[46.05px]">
              Total
            </div>
            <div className="text-right text-[#f46702] text-[17px] font-semibold font-['Raleway'] leading-[46.05px]">
              N12,300.00
            </div>
          </div>
          <div className="w-[501px] h-[0px] border border-[#e9e9e9]"></div>
          <div className="justify-start items-start gap-[254px] inline-flex">
            <div className="w-[170px] h-[101px] text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
              Product fee
              <br />
              Delivery fee
              <br />
              Service fee
            </div>
            <div className="w-[83px] h-[101px] text-right text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
              N14,000.00
              <br />
              N1,640.00
              <br />
              N1,400
            </div>
          </div>
          <div className="w-[501px] h-[0px] border border-[#e9e9e9]"></div>
          <div className="h-[94px] justify-start items-start gap-[254px] inline-flex">
            <div className="w-[170px] h-[89px]">
              <span className="text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
                Total
                <br />
                Discount
                <br />
              </span>
              <span className="text-black text-sm font-semibold font-['Raleway'] leading-10">
                Total charged
              </span>
            </div>
            <div className="w-[83px] h-[89px] text-right">
              <span className="text-[#373434]/60 text-sm font-semibold font-['Raleway'] leading-10">
                N16,640.00
                <br />
                -N4,540.00
                <br />
              </span>
              <span className="text-black text-sm font-semibold font-['Raleway'] leading-10">
                N12,300.00
              </span>
            </div>
          </div>
        </div>
        {/* main card end*/}
      </div>
    </div>
  );
}

export default OrderDetails;

interface ProfileDetailsProps {
  name: string;
  phone: string;
  email: string;
}

function ProfileDetails({ name, phone, email }: ProfileDetailsProps) {
  return (
    <div className="h-[103px] justify-start items-center gap-3 inline-flex">
      <div className="w-[103px] h-[103px] bg-white rounded-[160.94px] border-8 border-white justify-center items-center flex overflow-hidden">
        <img
          className="w-[103px] h-[103px]"
          src="https://via.placeholder.com/103x103"
        />
      </div>
      <div className="flex-col justify-center items-start gap -1.5 inline-flex">
        <div className="text-black text-base font-bold font-['Raleway'] leading-7 tracking-tight">
          {name}
        </div>
        <div className="flex-col justify-center items-start gap -3.5 flex">
          <div className="text-black text-xs font-bold font-['Raleway'] leading-7 tracking-tight">
            {phone}
          </div>
          <div className="text-black/40 text-xs font-bold font-['Raleway'] leading-7 tracking-tight">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
}
