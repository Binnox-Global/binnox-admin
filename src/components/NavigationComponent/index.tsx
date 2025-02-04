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
  OrderRecordsIconSvg,
} from "../icons";
import Image from "next/image";
import { useState } from "react";

const SidebarComponent = () => {
  const pathname = usePathname(); // Get the current pathname

  const [isFull, setIsFull] = useState(true);

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
          link: "/dashboard/businesses",
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
      link: "/dashboard/users",
    },
    {
      icon: <InventoryIconSvg />,
      name: "Inventory",
      link: "/dashboard/settings",
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
      className={`${
        isFull ? "min-w-[250px] max-w-[298px]" : " min-w-[100px] max-w-[186px]"
      }  bg-[#000000] text-white h-screen p-5`}
    >
      <div className="flex gap-[20px] justify-between items-center mt-[40px]">
        <Image
          src={isFull ? "/images/full-logo.svg" : "/images/half-logo.svg"}
          width={isFull ? 146 : 51}
          height={60}
          alt="Full logo"
        />{" "}
        <div
          className=""
          onClick={() => {
            setIsFull((prev) => !prev);
          }}
        >
          <HamBurgerIconSvg />{" "}
        </div>
      </div>
      <nav className="mt-6">
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

        {/* <NavMenuDropdown
          isFull={isFull}
          title="Management"
          links={[
            { name: "Users", link: "/dashboard/users" },
            {
              name: "Businesses",
              link: "/dashboard/businesses",
            },
            {
              name: "Riders",
              link: "/dashboard/businesses",
            },
            {
              name: "Ambassadors",
              link: "/dashboard/businesses",
            },
            {
              name: "Price Update",
              link: "/dashboard/businesses",
            },
          ]}
        /> */}
      </nav>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header className="bg-[#000000] shadow h-[90px] flex items-center justify-between px-5">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
    </header>
  );
};

export { SidebarComponent, HeaderComponent };

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
