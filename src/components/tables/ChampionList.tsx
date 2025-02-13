"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Champion {
  id: string;
  name: string;
  email: string;
  contact: string;
  referredUsers: string;
  status: 'active' | 'inactive';
  lastSeen: string;
  wallet: number;
}

const defaultChampions: Champion[] = [
  { id: '1', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '34 Users', status: 'active', lastSeen: '2 weeks', wallet: 54345.00 },
  { id: '2', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '12 Users', status: 'active', lastSeen: '1 day', wallet: 54345.00 },
  { id: '3', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '9 Users', status: 'inactive', lastSeen: '3 months', wallet: 54345.00 },
  { id: '4', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '34 Users', status: 'active', lastSeen: '2 weeks', wallet: 54345.00 },
  { id: '5', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '12 Users', status: 'active', lastSeen: '1 day', wallet: 54345.00 },
  { id: '6', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '9 Users', status: 'inactive', lastSeen: '3 months', wallet: 54345.00 },
  { id: '7', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '34 Users', status: 'active', lastSeen: '2 weeks', wallet: 54345.00 },
  { id: '8', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '12 Users', status: 'active', lastSeen: '1 day', wallet: 54345.00 },
  { id: '9', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '12 Users', status: 'active', lastSeen: '1 day', wallet: 54345.00 },
  { id: '10', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '9 Users', status: 'inactive', lastSeen: '3 months', wallet: 54345.00 },
  { id: '11', name: 'Kemikal', email: 'kemikalonfia@gmail.com', contact: '+234815679054', referredUsers: '9 Users', status: 'inactive', lastSeen: '3 months', wallet: 54345.00 }
];

export const ChampionList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Champion | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    status: '',
    lastSeen: ''
  });

  const itemsPerPage = 10;
  const onlineCount = defaultChampions.filter(c => c.status === 'active').length;

  const handleSort = (key: keyof Champion) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedChampions = useMemo(() => {
    let result = [...defaultChampions];

    if (searchTerm) {
      result = result.filter(champion => 
        champion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        champion.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        champion.contact.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(champion => champion.status === activeFilters.status);
    }

    if (activeFilters.lastSeen) {
      result = result.filter(champion => champion.lastSeen === activeFilters.lastSeen);
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

  const totalPages = Math.ceil(filteredAndSortedChampions.length / itemsPerPage);
  const paginatedChampions = filteredAndSortedChampions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              List of Champions
            </h2>
            <span className="inline-flex items-center px-[9.18px] py-[3.67px] bg-[#E9FAF7] rounded-[7.35px] gap-[7.35px]">
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
                      <label className="text-sm font-medium text-[#344054] block mb-2">Status</label>
                      <select 
                        value={activeFilters.status}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">Last Seen</label>
                      <select 
                        value={activeFilters.lastSeen}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, lastSeen: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="1 day">1 day</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="3 months">3 months</option>
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
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center gap-2">
                Champions Name (A-Z)
                {sortConfig.key === 'name' && (
                  <CaretUpSvg 
                    className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Email</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Contact</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Referred Users</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Status</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Last Seen</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Wallet</th>
          </tr>
        </thead>
        <tbody>
          {paginatedChampions.map((champion) => (
            <tr key={champion.id} className="bg-white border-b border-[#EAECF0]">
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {champion.name}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {champion.email}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {champion.contact}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {champion.referredUsers}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${
                  champion.status === 'active' 
                    ? 'bg-[#ECFDF3] text-[#027A48]' 
                    : 'bg-[#FEF3F2] text-[#B42318]'
                } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                  {champion.status.charAt(0).toUpperCase() + champion.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center px-[19px] py-[5px] rounded-[10px] bg-[#ECFDF3] text-[#027A48] font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]">
                  {champion.lastSeen}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  ₦{champion.wallet.toFixed(2)}
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