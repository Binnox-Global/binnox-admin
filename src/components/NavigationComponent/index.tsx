"use client"; // This line ensures the component is a client component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import from next/navigation
import {
  AnalyticsIconSvg,
  DashboardIconSvg,
  FinancialIconSvg,
  HamBurgerIconSvg,
  InventoryIconSvg,
  ManagementIconSvg,
  MarketingIconSvg,
  NavProfileIconSvg,
  NavSettingsIconSvg,
  NavSupportIconSvg,
  NotificationIconSvg,
  OrderRecordsIconSvg,
  TopNavProfileArrowDownIconSvg,
} from "../icons";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/avatar";

const SidebarComponent = ({
  isFull,
  setIsFull,
}: {
  isFull: boolean;
  setIsFull: (value: boolean) => void;
}) => {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    {
      icon: <DashboardIconSvg />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <ManagementIconSvg />,
      name: "Management",
      links: [
        { name: "Users", link: "/dashboard/users" },
        {
          name: "Businesses",
          link: "/dashboard/businesses",
        },
        {
          name: "Riders",
          link: "/dashboard/riders",
        },
        {
          name: "Ambassadors",
          link: "/dashboard/businesses",
        },
        {
          name: "Price Update",
          link: "/dashboard/businesses",
        },
      ],
    },

    {
      icon: <OrderRecordsIconSvg />,
      name: "Order Records",
      link: "/dashboard/orders",
    },
    {
      icon: <OrderRecordsIconSvg />,
      name: "Binnox Send",
      link: "/dashboard/sends",
    },
    {
      icon: <InventoryIconSvg />,
      name: "Inventory",
      link: "/dashboard/Inventory",
    },
    {
      icon: <AnalyticsIconSvg />,
      name: "Analytics",
      link: "/dashboard/users",
    },
    {
      icon: <MarketingIconSvg />,
      name: "Marketing",
      link: "/dashboard/users",
    },
    {
      icon: <FinancialIconSvg />,
      name: "Financial",
      link: "/dashboard/settings",
    },
  ];

  return (
    <div
      className={`w-full bg-[#000000] text-white  ${
        !isFull ? " p-2 py-5 " : "p-5"
      } `}
    >
      <div className="flex gap-[10px] justify-between items-center mt-[20px] ">
        <Image
          src={isFull ? "/images/full-logo.svg" : "/images/half-logo.svg"}
          width={isFull ? 146 : 51}
          height={60}
          alt="Full logo"
        />{" "}
        <div
          className=""
          onClick={() => {
            setIsFull(!isFull);
          }}
        >
          <HamBurgerIconSvg />{" "}
        </div>
      </div>
      <nav className="mt-[10px] min-h-full">
        {navLinks.map((navLink, index) => (
          <div key={index}>
            {navLink.links ? (
              <NavMenuDropdown
                isFull={isFull}
                icon={navLink.icon}
                title={navLink.name}
                links={navLink.links}
              />
            ) : (
              <Link
                key={index}
                href={navLink.link}
                className={`flex gap-1 items-center p-2 h-[47px] rounded-[5px] hover:bg-[#141414] mb-2  ${
                  !isFull && "justify-center"
                } ${isActive(navLink.link) ? "bg-[#141414]" : ""}`}
              >
                <div className="icon-container w-10 bor der flex justify-center items-center">
                  {navLink.icon}
                </div>{" "}
                {isFull && navLink.name}
              </Link>
            )}
          </div>
        ))}

        <hr className="my-20 bg-white/40" />

        <NavMenuDropdown
          isFull={isFull}
          icon={<NavSupportIconSvg />}
          title={"Support"}
          links={[]}
        />

        <Link
          href={"/dashboard/settings"}
          className={`flex gap-1 items-center p-2 h-[47px] rounded-[5px] hover:bg-[#141414] mb-2  ${
            !isFull && "justify-center"
          } ${isActive("/dashboard/settings") ? "bg-[#141414]" : ""}`}
        >
          <div className="icon-container w-10 bor der flex justify-center items-center">
            {/* {navLink.icon} */}
            <NavProfileIconSvg />
          </div>{" "}
          {isFull && "Profile"}
        </Link>
        <Link
          href={"/dashboard/settings"}
          className={`flex gap-1 items-center p-2 h-[47px] rounded-[5px] hover:bg-[#141414] mb-2  ${
            !isFull && "justify-center"
          } ${isActive("/dashboard/settings") ? "bg-[#141414]" : ""}`}
        >
          <div className="icon-container w-10 bor der flex justify-center items-center">
            {/* {navLink.icon} */}
            <NavSettingsIconSvg />
          </div>{" "}
          {isFull && "Audit Log"}
        </Link>
      </nav>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header className=" w-full bg-[#000000] text-white shadow h-[90px] flex items-center justify-between px-5">
      <div className="right-container ms-auto me-[10px] flex items-center gap-[23px]">
        <div className="icon">
          <NotificationButton />
        </div>
        <div className="flex flex-col gap-[5px] text-end">
          <div className="text-[12px] leading-[14px] font-[700] ">
            Mark Collins
          </div>
          <div className="text-[9px] leading-[10px] font-[400] ">Admin 1</div>
        </div>
        <div className="flex items-center gap-[5px]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <TopNavProfileArrowDownIconSvg />
        </div>
      </div>
    </header>
  );
};

export { SidebarComponent, HeaderComponent };

function NavMenuDropdown({
  isFull = true,
  title,
  links,
  icon,
}: {
  isFull?: boolean;
  title: string;
  links: { name: string; link: string }[];
  icon: any;
}) {
  const pathname = usePathname(); // Get the current pathname
  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger
          className={` flex items-center justify-s tart p-2 h-[47px] rounded-[5px] hover:bg-[#141414] mb-2 hover:no-underline  ${
            !isFull && "justify-center"
          } `}
        >
          <div className="flex gap-1 ">
            <div className="icon-container w-10 bor der flex justify-center items-center">
              {icon}
            </div>{" "}
            {isFull && title}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <nav className="flex flex-col gap-[5px]">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`p-[7px] ps-[30px] h-[35px] text-[17px] flex items-center hover:bg-[#141414] rounded-[5px] ${
                  isActive(link.link) ? "bg-[#141414]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function NotificationButton() {
  return (
    <button className="flex items-center gap-2 relative p-2">
      <NotificationIconSvg />
      <div className="absolute -top-[2px] right-[1px] cursor-pointer size-[19px] bg-[#F46702] rounded-full flex items-center justify-center">
        <span className="text-white text-[10px]">2</span>
      </div>
    </button>
  );
}