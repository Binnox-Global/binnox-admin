"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Business {
  id: string;
  name: string;
  logo: string;
  location: string;
  ordersWeekly: number;
  prepTime: string;
  pricePerOrder: number;
  status: 'Active' | 'Inactive';
}

const defaultBusinesses: Business[] = [
  { id: '1', name: 'Dominos Pizza', logo: '/businesses/dominos.png', location: 'Lekki, Lagos', ordersWeekly: 80, prepTime: '12:04 min', pricePerOrder: 12300.00, status: 'Active' },
  { id: '2', name: 'Fast Food', logo: '/businesses/fastfood.png', location: 'Garki, Abuja', ordersWeekly: 45, prepTime: '23:04 min', pricePerOrder: 7450.00, status: 'Active' },
  { id: '3', name: 'Second Pot', logo: '/businesses/secondpot.png', location: 'Lugbe, Abuja', ordersWeekly: 23, prepTime: '10:00 min', pricePerOrder: 18350.00, status: 'Active' },
  { id: '4', name: 'Exclusive Stores', logo: '/businesses/exclusive.png', location: 'Awka, Anambra', ordersWeekly: 167, prepTime: '45:27 min', pricePerOrder: 7450.00, status: 'Inactive' },
  { id: '5', name: 'Yakoyo', logo: '/businesses/yakoyo.png', location: 'Tai, Rivers', ordersWeekly: 95, prepTime: '07:26 min', pricePerOrder: 7450.00, status: 'Active' },
  { id: '6', name: 'Chicken Republic', logo: '/businesses/chicken.png', location: 'Garki, Abuja', ordersWeekly: 78, prepTime: '12:04 min', pricePerOrder: 7450.00, status: 'Active' },
  { id: '7', name: 'KFC', logo: '/businesses/kfc.png', location: 'Wuse, Abuja', ordersWeekly: 12, prepTime: '23:04 min', pricePerOrder: 12300.00, status: 'Active' },
  { id: '8', name: '4U Supermarket', logo: '/businesses/4u.png', location: 'FESTAC, Lagos', ordersWeekly: 190, prepTime: '10:00 min', pricePerOrder: 12300.00, status: 'Active' },
  { id: '9', name: 'H- Medix', logo: '/businesses/hmedix.png', location: 'Ikoyi, Lagos', ordersWeekly: 59, prepTime: '07:26 min', pricePerOrder: 12300.00, status: 'Active' },
  { id: '10', name: 'Shawarma & Grills', logo: '/businesses/shawarma.png', location: 'Maitama, Abuja', ordersWeekly: 72, prepTime: '04:26 min', pricePerOrder: 3300.00, status: 'Inactive' }
];

export const BusinessAnalytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Business | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    status: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Business) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedBusinesses = useMemo(() => {
    let result = [...defaultBusinesses];

    if (searchTerm) {
      result = result.filter(business => 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(business => 
        business.location.toLowerCase().includes(activeFilters.location.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(business => business.status === activeFilters.status);
    }

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [searchTerm, sortConfig, activeFilters]);

  const totalPages = Math.ceil(filteredAndSortedBusinesses.length / itemsPerPage);
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
              Business Analytics
            </h2>
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
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]">
              <span className="text-[#344054]">Select Date</span>
              <CaretUpSvg className="w-4 h-4 transform rotate-180" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
              >
                <span className="text-[#344054]">Filters</span>
                <CaretUpSvg className={`w-4 h-4 transform ${filterOpen ? '' : 'rotate-180'}`} />
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] p-4 z-10 min-w-[200px]">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#344054] mb-1">Location</label>
                      <select 
                        value={activeFilters.location}
                        onChange={(e) => {
                          setActiveFilters(prev => ({ ...prev, location: e.target.value }));
                          setCurrentPage(1);
                        }}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All Locations</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#344054] mb-1">Status</label>
                      <select 
                        value={activeFilters.status}
                        onChange={(e) => {
                          setActiveFilters(prev => ({ ...prev, status: e.target.value as 'Active' | 'Inactive' }));
                          setCurrentPage(1);
                        }}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#FFF1E9] text-[#F46702]">
              See All
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th 
                onClick={() => handleSort('name')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Business Name (A-Z)
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'name' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Location
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Average Orders Weekly
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Average Prep Time
              </th>
              <th 
                onClick={() => handleSort('pricePerOrder')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Average Price Per Order
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'pricePerOrder' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedBusinesses.map((business) => (
              <tr key={business.id} className="bg-white border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={business.logo} alt={business.name} className="w-8 h-8 rounded-lg object-cover" />
                    <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                      {business.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {business.location}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {business.ordersWeekly} Orders
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {business.prepTime}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    ₦{business.pricePerOrder.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] gap-2 ${
                    business.status === 'Active'
                      ? 'bg-[#ECFDF3] text-[#027A48]'
                      : 'bg-[#FEF3F2] text-[#B42318]'
                  } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                    {business.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-t border-[#EAECF0] p-4 flex justify-between items-center bg-white rounded-b-lg">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                  page === currentPage ? 'bg-[#F97316] text-white' : 'text-[#F97316] hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-sm text-[#F97316] disabled:opacity-50"
          >
            Next page
          </button>
        </div>
      </div>
    </div>
  );
};