"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";

interface Business {
  id: string;
  name: string;
  logo: string;
  type: 'Restaurant' | 'Supermarket' | 'Market' | 'Vendor';
  totalProducts: number;
  lastUpdated: string;
}

const defaultBusinesses: Business[] = [
  { id: '1', name: 'Six Seven', logo: '/businesses/six-seven.png', type: 'Restaurant', totalProducts: 1012, lastUpdated: '31-02-2024' },
  { id: '2', name: 'Bracha', logo: '/businesses/bracha.png', type: 'Restaurant', totalProducts: 623, lastUpdated: '05-02-2024' },
  { id: '3', name: 'Exclusive Stores', logo: '/businesses/exclusive.png', type: 'Supermarket', totalProducts: 12092, lastUpdated: '12-02-2024' },
  { id: '4', name: 'Mama Ebuka', logo: '/businesses/mama-ebuka.png', type: 'Market', totalProducts: 3921, lastUpdated: '25-02-2024' },
  { id: '5', name: 'Pelumi Cake', logo: '/businesses/pelumi.png', type: 'Vendor', totalProducts: 68, lastUpdated: '18-02-2024' }
];

export const InventoryOverviewList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: ''
  });

  const itemsPerPage = 10;

  const filteredBusinesses = useMemo(() => {
    let result = [...defaultBusinesses];

    if (searchTerm) {
      result = result.filter(business => 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.type) {
      result = result.filter(business => business.type === activeFilters.type);
    }

    return result;
  }, [searchTerm, activeFilters]);

  const FilterMenu = () => (
    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Business Type</label>
          <select 
            value={activeFilters.type}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, type: e.target.value as Business['type'] }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All Types</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Supermarket">Supermarket</option>
            <option value="Market">Market</option>
            <option value="Vendor">Vendor</option>
          </select>
        </div>
      </div>
    </div>
  );

  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage);
  const paginatedBusinesses = filteredBusinesses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-raleway text-[18px] font-semibold leading-[32px] text-black mb-1">
          Inventory
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-raleway text-[12px] font-normal leading-[16px] text-[#98A2B3] w-[200px]">
            Monitor Stocks
          </p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[280px] pl-12 pr-4 py-3 rounded-lg border border-[#D0D5DD] bg-white"
              />
              <TableSearchSvg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]" />
            </div>
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#D0D5DD] bg-white"
              >
                <TableFilterSvg className="text-[#667085]" />
                <span className="text-[#344054]">Filter</span>
              </button>
              {filterOpen && <FilterMenu />}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Business Name
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Type
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Total Products
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBusinesses.map((business) => (
              <tr key={business.id} className="border-b border-[#EAECF0] bg-white">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={business.logo} alt={business.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-raleway text-[14px] font-medium text-black">
                      {business.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {business.type}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {business.totalProducts.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {business.lastUpdated}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button 
          onClick={() => setCurrentPage(1)}
          className="text-[#98A2B3] text-sm"
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