"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { useParams, useRouter } from "next/navigation";

interface Business {
  id: string;
  name: string;
  email: string;
  contact: string;
  location: string;
  status: "active" | "inactive";
  verified: boolean;
  wallet: number;
}

const defaultBusinesses: Business[] = [
  {
    id: "1",
    name: "Second Pot",
    email: "Secondpot@gmail.com",
    contact: "+2348156790543",
    location: "Abuja",
    status: "active",
    verified: true,
    wallet: 54345.0,
  },
  {
    id: "2",
    name: "Exclusive Stores",
    email: "Excstor@gmail.com",
    contact: "+2348156790543",
    location: "Lagos",
    status: "inactive",
    verified: true,
    wallet: 54345.0,
  },
  {
    id: "3",
    name: "Dominos Pizza",
    email: "Dominozpizz@gmail.com",
    contact: "+2348156790543",
    location: "Kano",
    status: "inactive",
    verified: false,
    wallet: 0.0,
  },
  {
    id: "4",
    name: "Fast Food",
    email: "Fastfood@gmail.com",
    contact: "+2348156790543",
    location: "Abuja",
    status: "active",
    verified: false,
    wallet: 0.0,
  },
  {
    id: "5",
    name: "Sweet Treats",
    email: "sweettreats@gmail.com",
    contact: "+2348156790543",
    location: "Lagos",
    status: "active",
    verified: true,
    wallet: 32150.0,
  },
  {
    id: "6",
    name: "Burger King",
    email: "burgerking@gmail.com",
    contact: "+2348156790543",
    location: "Kano",
    status: "inactive",
    verified: false,
    wallet: 0.0,
  },
  {
    id: "7",
    name: "Food Palace",
    email: "foodpalace@gmail.com",
    contact: "+2348156790543",
    location: "Abuja",
    status: "active",
    verified: true,
    wallet: 28900.0,
  },
  {
    id: "8",
    name: "Quick Bites",
    email: "quickbites@gmail.com",
    contact: "+2348156790543",
    location: "Lagos",
    status: "active",
    verified: true,
    wallet: 41200.0,
  },
  {
    id: "9",
    name: "Tasty Foods",
    email: "tastyfoods@gmail.com",
    contact: "+2348156790543",
    location: "Kano",
    status: "inactive",
    verified: false,
    wallet: 0.0,
  },
  {
    id: "10",
    name: "Chicken Republic",
    email: "chickenrep@gmail.com",
    contact: "+2348156790543",
    location: "Abuja",
    status: "active",
    verified: true,
    wallet: 67500.0,
  },
  {
    id: "11",
    name: "Local Delights",
    email: "localdelights@gmail.com",
    contact: "+2348156790543",
    location: "Lagos",
    status: "active",
    verified: true,
    wallet: 23400.0,
  },
  {
    id: "12",
    name: "Spice Kitchen",
    email: "spicekitchen@gmail.com",
    contact: "+2348156790543",
    location: "Kano",
    status: "inactive",
    verified: false,
    wallet: 0.0,
  },
];

export const BusinessList = () => {
  const router = useRouter();

  // const orderId = params.orderId; // Extract the 'id' from the route
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Business | null;
    direction: "asc" | "desc";
  }>({ key: null, direction: "asc" });
  const [activeFilters, setActiveFilters] = useState({
    status: "",
    verified: "",
    location: "",
  });

  const itemsPerPage = 10;
  const onlineCount = defaultBusinesses.filter(
    (b) => b.status === "active"
  ).length;

  const handleSort = (key: keyof Business) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const filteredAndSortedBusinesses = useMemo(() => {
    let result = [...defaultBusinesses];

    if (searchTerm) {
      result = result.filter(
        (business) =>
          business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(
        (business) => business.status === activeFilters.status
      );
    }

    if (activeFilters.verified) {
      result = result.filter((business) =>
        activeFilters.verified === "verified"
          ? business.verified
          : !business.verified
      );
    }

    if (activeFilters.location) {
      result = result.filter(
        (business) => business.location === activeFilters.location
      );
    }

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [searchTerm, sortConfig, activeFilters]);

  const totalPages = Math.ceil(
    filteredAndSortedBusinesses.length / itemsPerPage
  );
  const paginatedBusinesses = filteredAndSortedBusinesses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              List of Businesses
            </h2>
            <span className="inline-flex items-center px-[9.18px] py-[3.67px] bg-[#E9FAF7] rounded-[7.35px] gap-[7.35px] w-[77.37px] h-[26.35px]">
              <span className="font-raleway text-[12.86px] font-bold leading-[18.37px] tracking-[0.005em] text-[#1A9882] text-center">
                {onlineCount} Online
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[280px] pl-12 pr-4 py-2 rounded-lg border border-[#D0D5DD]"
              />
              <TableSearchSvg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]" />
            </div>
            <button className="px-4 py-2 rounded-lg border border-[#D0D5DD] text-[#344054]">
              Select Date
            </button>
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
              >
                <TableFilterSvg className="text-[#667085]" />
                <span className="text-[#344054]">Filters</span>
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">
                        Status
                      </label>
                      <select
                        value={activeFilters.status}
                        onChange={(e) =>
                          setActiveFilters((prev) => ({
                            ...prev,
                            status: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">
                        Verification
                      </label>
                      <select
                        value={activeFilters.verified}
                        onChange={(e) =>
                          setActiveFilters((prev) => ({
                            ...prev,
                            verified: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="verified">Verified</option>
                        <option value="unverified">Unverified</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">
                        Location
                      </label>
                      <select
                        value={activeFilters.location}
                        onChange={(e) =>
                          setActiveFilters((prev) => ({
                            ...prev,
                            location: e.target.value,
                          }))
                        }
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        {Array.from(
                          new Set(defaultBusinesses.map((b) => b.location))
                        ).map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#F7F7F7]">
            <th
              className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              onClick={() => handleSort("name")}
            >
              <div className="flex items-center gap-2">
                Business Name (A-Z)
                {sortConfig.key === "name" && (
                  <CaretUpSvg
                    className={`w-4 h-4 transform ${sortConfig.direction === "desc" ? "rotate-180" : ""
                      }`}
                  />
                )}
              </div>
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Email
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Contact
            </th>
            <th
              className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              onClick={() => handleSort("location")}
            >
              <div className="flex items-center gap-2">
                Location
                {sortConfig.key === "location" && (
                  <CaretUpSvg
                    className={`w-4 h-4 transform ${sortConfig.direction === "desc" ? "rotate-180" : ""
                      }`}
                  />
                )}
              </div>
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Status
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Verified
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Wallet
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedBusinesses.map((business) => (
            <tr
              key={business.id}
              className="bg-white border-b border-[#EAECF0] cursor-pointer hover:bg-[#F7F7F7]"
              onClick={() => router.push("./businesses/" + business.id)}
            >
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {business.name}
                </span>
              </td> 
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {business.email}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {business.contact}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {business.location}
                </span>
              </td>
              <td className="py-4 px-6">
                <span
                  className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${business.status === "active"
                      ? "bg-[#00C8141A] text-[#00C814]"
                      : "bg-[#FF00001A] text-[#FF0000]"
                    } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}
                >
                  {business.status.charAt(0).toUpperCase() +
                    business.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span
                  className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${business.verified
                      ? "bg-[#00C8141A] text-[#00C814]"
                      : "bg-[#FF00001A] text-[#FF0000]"
                    } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}
                >
                  {business.verified ? "Verified" : "Unverified"}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                  ₦{business.wallet.toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-white rounded-b-lg border-t border-[#EAECF0] p-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-sm text-[#F97316] disabled:opacity-50"
        >
          Previous page
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full text-sm ${
                page === currentPage
                  ? "bg-[#F97316] text-white"
                  : "text-[#F97316] hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-sm text-[#F97316] disabled:opacity-50"
        >
          Next page
        </button>
      </div>
    </div>
  );
};