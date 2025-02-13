"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Order {
  id: string;
  orderId: string;
  name: string;
  address: string;
  date: string;
  price: number;
  status: 'completed' | 'dispatched' | 'cancelled' | 'pending';
}

const defaultOrders: Order[] = [
  { id: '1', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'completed' },
  { id: '2', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'completed' },
  { id: '3', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'dispatched' },
  { id: '4', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'dispatched' },
  { id: '5', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'completed' },
  { id: '6', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 0.00, status: 'cancelled' },
  { id: '7', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'pending' },
  { id: '8', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'pending' },
  { id: '9', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'pending' },
  { id: '10', orderId: '#4590', name: 'Kemikal', address: 'No. 2 Avenue, Wuse 3, Abuja', date: '09:20am', price: 54345.00, status: 'completed' }
];

export const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    status: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Order) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...defaultOrders];

    if (searchTerm) {
      result = result.filter(order => 
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(order => order.status === activeFilters.status);
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

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const paginatedOrders = filteredAndSortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              All Orders
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
                      <label className="text-sm font-medium text-[#344054] block mb-2">Status</label>
                      <select 
                        value={activeFilters.status}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="completed">Completed</option>
                        <option value="dispatched">Dispatched</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="pending">Pending</option>
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
              onClick={() => handleSort('orderId')}
            >
              <div className="flex items-center gap-2">
                Order ID
                {sortConfig.key === 'orderId' && (
                  <CaretUpSvg 
                    className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Name</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Address</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Date</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Price</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order) => (
            <tr key={order.id} className="bg-white border-b border-[#EAECF0]">
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {order.orderId}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {order.name}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {order.address}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {order.date}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  ₦{order.price.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${
                  order.status === 'completed' 
                    ? 'bg-[#ECFDF3] text-[#027A48]'
                    : order.status === 'dispatched'
                    ? 'bg-[#FFF6ED] text-[#B93815]'
                    : order.status === 'cancelled'
                    ? 'bg-[#FEF3F2] text-[#B42318]'
                    : 'bg-[#F2F4F7] text-[#344054]'
                } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-white rounded-b-lg border-t border-[#EAECF0] p-4 flex justify-between items-center">
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