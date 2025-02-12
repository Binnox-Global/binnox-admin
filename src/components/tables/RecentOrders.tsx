"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

//import { useCurrency } from "@/contexts/CurrencyContext";
//import { convertToNaira, formatCurrency } from "@/lib/currency";

interface Order {
  id: string;
  name: string;
  status: 'completed' | 'canceled' | 'ongoing';
  business: string;
  orderId: string;
  price: number;
}

const defaultOrders: Order[] = [
  { id: '1', name: 'Chima', status: 'completed', business: 'Sweet Treats', orderId: 'ORD001', price: 15000 },
  { id: '2', name: 'Daniel', status: 'ongoing', business: 'Wuse Market', orderId: 'ORD002', price: 25000 },
  { id: '3', name: 'Temitayo', status: 'canceled', business: 'Kubwa Foods', orderId: 'ORD003', price: 8500 },
  { id: '4', name: 'Olu', status: 'completed', business: 'Life Cafe', orderId: 'ORD004', price: 12000 },
  { id: '5', name: 'Blessing', status: 'ongoing', business: 'Sweet Treats', orderId: 'ORD005', price: 45000 },
  { id: '6', name: 'Ahmed', status: 'completed', business: 'Garki Market', orderId: 'ORD006', price: 9000 },
  { id: '7', name: 'Zainab', status: 'canceled', business: 'Wuse Market', orderId: 'ORD007', price: 32000 },
  { id: '8', name: 'John', status: 'ongoing', business: 'Life Cafe', orderId: 'ORD008', price: 17500 },
  { id: '9', name: 'Mary', status: 'completed', business: 'Kubwa Foods', orderId: 'ORD009', price: 22000 },
  { id: '10', name: 'Peter', status: 'canceled', business: 'Sweet Treats', orderId: 'ORD010', price: 13500 },
  { id: '11', name: 'Sarah', status: 'completed', business: 'Garki Market', orderId: 'ORD011', price: 28000 },
  { id: '12', name: 'Ibrahim', status: 'ongoing', business: 'Wuse Market', orderId: 'ORD012', price: 19500 },
  { id: '13', name: 'Aisha', status: 'completed', business: 'Life Cafe', orderId: 'ORD013', price: 33000 },
  { id: '14', name: 'David', status: 'canceled', business: 'Kubwa Foods', orderId: 'ORD014', price: 7500 },
  { id: '15', name: 'Grace', status: 'ongoing', business: 'Sweet Treats', orderId: 'ORD015', price: 41000 },
  { id: '16', name: 'Mohammed', status: 'completed', business: 'Garki Market', orderId: 'ORD016', price: 16500 },
  { id: '17', name: 'Faith', status: 'canceled', business: 'Wuse Market', orderId: 'ORD017', price: 29000 },
  { id: '18', name: 'Samuel', status: 'ongoing', business: 'Life Cafe', orderId: 'ORD018', price: 23500 },
  { id: '19', name: 'Elizabeth', status: 'completed', business: 'Kubwa Foods', orderId: 'ORD019', price: 37000 },
  { id: '20', name: 'Hassan', status: 'canceled', business: 'Sweet Treats', orderId: 'ORD020', price: 11000 }
];

export const RecentOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Order) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  // Add filter state and types
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: '',
    priceRange: '',
    business: ''
  });

  // Update the filteredAndSortedOrders function
  const filteredAndSortedOrders = useMemo(() => {
    let result = [...defaultOrders];
  
    // Existing search filter
    if (searchTerm) {
      result = result.filter(order => 
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Add filter logic
    if (activeFilters.status) {
      result = result.filter(order => order.status === activeFilters.status);
    }
  
    if (activeFilters.business) {
      result = result.filter(order => order.business === activeFilters.business);
    }
  
    if (activeFilters.priceRange) {
      result = result.filter(order => {
        const price = order.price;
        switch (activeFilters.priceRange) {
          case 'low': return price < 15000;
          case 'medium': return price >= 15000 && price <= 30000;
          case 'high': return price > 30000;
          default: return true;
        }
      });
    }
  
    // Existing sort logic
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
  
  // Add Filter Menu component
  const FilterMenu = () => (
    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Status</label>
          <select 
            value={activeFilters.status}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Price Range</label>
          <select 
            value={activeFilters.priceRange}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, priceRange: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            <option value="low">Below ₦15,000</option>
            <option value="medium">₦15,000 - ₦30,000</option>
            <option value="high">Above ₦30,000</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Business</label>
          <select 
            value={activeFilters.business}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, business: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            {Array.from(new Set(defaultOrders.map(order => order.business))).map(business => (
              <option key={business} value={business}>{business}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
  
  // Update the filter button in the return statement
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

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const paginatedOrders = filteredAndSortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-raleway text-[18px] font-semibold leading-[32px] text-black mb-1">
          Recent Order
        </h2>
        <div className="flex justify-between items-center">
          <p className="font-raleway text-[12px] font-normal leading-[16px] text-[#98A2B3] w-[200px]">
            Monitor sales, reviews, etc.
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

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th 
                className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C] cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-2">
                  Name
                  {sortConfig.key === 'name' && (
                    <CaretUpSvg 
                      className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">Status</th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">Business</th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">Order ID</th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">Price</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#EAECF0] bg-white">
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {order.name}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-1 py-1 rounded text-[12px] font-semibold leading-[16px] ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {order.business}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {order.orderId}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    ₦{order.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
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
  );
};

const statusColors = {
  completed: 'bg-[#DEEDE5] text-[#427A5B]',
  canceled: 'bg-[#FF00001A] text-[#FF0000]',
  ongoing: 'bg-[#FFD5694D] text-[#986D00]',
};