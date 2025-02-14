"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Withdrawal {
  id: string;
  date: string;
  amount: number;
  ticketNo: string;
  status: 'Completed' | 'Pending' | 'Canceled';
  accountNo: string;
}

const defaultWithdrawals: Withdrawal[] = [
  { id: '1', date: '24-03-2024', amount: 45900, ticketNo: '#340001278', status: 'Completed', accountNo: '6557890017' },
  { id: '2', date: '17-03-2024', amount: 126800, ticketNo: '#877910335', status: 'Pending', accountNo: '6557890017' },
  { id: '3', date: '24-03-2024', amount: 45900, ticketNo: '#340001278', status: 'Completed', accountNo: '6557890017' },
  { id: '4', date: '12-03-2024', amount: 80340, ticketNo: '#987273990', status: 'Canceled', accountNo: '6557890017' },
  { id: '5', date: '24-03-2024', amount: 45900, ticketNo: '#340001278', status: 'Completed', accountNo: '6557890017' },
  { id: '6', date: '24-03-2024', amount: 45900, ticketNo: '#340001278', status: 'Completed', accountNo: '6557890017' },
  { id: '7', date: '24-03-2024', amount: 45900, ticketNo: '#340001278', status: 'Completed', accountNo: '6557890017' }
];

export const WithdrawalHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Withdrawal | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    status: '',
    dateRange: '',
    amountRange: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Withdrawal) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedWithdrawals = useMemo(() => {
    let result = [...defaultWithdrawals];

    if (searchTerm) {
      result = result.filter(withdrawal => 
        withdrawal.ticketNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        withdrawal.accountNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(withdrawal => withdrawal.status === activeFilters.status);
    }

    if (activeFilters.amountRange) {
      result = result.filter(withdrawal => {
        const amount = withdrawal.amount;
        switch (activeFilters.amountRange) {
          case 'low': return amount < 50000;
          case 'medium': return amount >= 50000 && amount <= 100000;
          case 'high': return amount > 100000;
          default: return true;
        }
      });
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

  const FilterMenu = () => (
    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Status</label>
          <select 
            value={activeFilters.status}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value as Withdrawal['status'] }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Amount Range</label>
          <select 
            value={activeFilters.amountRange}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, amountRange: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All</option>
            <option value="low">Below ₦50,000</option>
            <option value="medium">₦50,000 - ₦100,000</option>
            <option value="high">Above ₦100,000</option>
          </select>
        </div>
      </div>
    </div>
  );

  const totalPages = Math.ceil(filteredAndSortedWithdrawals.length / itemsPerPage);
  const paginatedWithdrawals = filteredAndSortedWithdrawals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const statusColors = {
    'Completed': 'bg-[#DEEDE5] text-[#427A5B]',
    'Pending': 'bg-[#FFD5694D] text-[#986D00]',
    'Canceled': 'bg-[#FF00001A] text-[#FF0000]'
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-raleway text-[18px] font-semibold leading-[32px] text-black mb-1">
          Withdrawal History
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
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center gap-2">
                  Date
                  {sortConfig.key === 'date' && (
                    <CaretUpSvg 
                      className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </th>
              <th 
                className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C] cursor-pointer"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center gap-2">
                  Amount
                  {sortConfig.key === 'amount' && (
                    <CaretUpSvg 
                      className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Ticket No.
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Status
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Account No.
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedWithdrawals.map((withdrawal) => (
              <tr key={withdrawal.id} className="border-b border-[#EAECF0] bg-white">
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {withdrawal.date}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    ₦{withdrawal.amount.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {withdrawal.ticketNo}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded text-[12px] font-semibold leading-[16px] ${statusColors[withdrawal.status]}`}>
                    {withdrawal.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[12px] font-semibold leading-[16px] text-black">
                    {withdrawal.accountNo}
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