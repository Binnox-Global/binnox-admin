"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";

interface Revenue {
  id: string;
  amountTransacted: number;
  ridersFee: number;
  ridersCommission: number;
  netProfit: number;
}

const defaultRevenues: Revenue[] = [
  { id: '#2367-1', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-2', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-3', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-4', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-5', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-6', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-7', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-8', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-9', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 },
  { id: '#2367-10', amountTransacted: 12900.00, ridersFee: 700, ridersCommission: 350, netProfit: 1420 }
];

export const RecentRevenues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    dateRange: '',
    amountRange: ''
  });

  const itemsPerPage = 10;

  const filteredRevenues = useMemo(() => {
    let result = [...defaultRevenues];

    if (activeFilters.amountRange) {
      result = result.filter(revenue => {
        const amount = revenue.amountTransacted;
        switch (activeFilters.amountRange) {
          case 'low': return amount < 10000;
          case 'medium': return amount >= 10000 && amount <= 20000;
          case 'high': return amount > 20000;
          default: return true;
        }
      });
    }

    return result;
  }, [activeFilters]);

  const FilterMenu = () => (
    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Amount Range</label>
          <select 
            value={activeFilters.amountRange}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, amountRange: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            <option value="low">Below ₦10,000</option>
            <option value="medium">₦10,000 - ₦20,000</option>
            <option value="high">Above ₦20,000</option>
          </select>
        </div>
      </div>
    </div>
  );

  const totalPages = Math.ceil(filteredRevenues.length / itemsPerPage);
  const paginatedRevenues = filteredRevenues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="font-raleway text-[24px] font-bold leading-[32px] text-black">
            Recent Revenues
          </h2>
          <div className="relative">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD] bg-white"
            >
              <TableFilterSvg className="text-[#667085]" />
              <span className="text-[#344054]">Filter</span>
            </button>
            {filterOpen && <FilterMenu />}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Id
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Amount Transacted
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Riders Fee
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Riders Commission
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Net Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedRevenues.map((revenue) => (
              <tr key={revenue.id} className="border-b border-[#EAECF0] bg-white">
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {revenue.id}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    ₦{revenue.amountTransacted.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    ₦{revenue.ridersFee}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    ₦{revenue.ridersCommission}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    ₦{revenue.netProfit}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button 
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          className="text-[#F97316] text-sm"
        >
          Previous page
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full text-sm ${
              page === currentPage 
                ? 'bg-[#F97316] text-white' 
                : 'text-[#98A2B3] hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
        <button 
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          className="text-[#F97316] text-sm"
        >
          Next page
        </button>
      </div>
    </div>
  );
};