"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface User {
  id: string;
  name: string;
  email: string;
  contact: string;
  dateJoined: string;
  location: string;
  lastUsed: string;
}

const defaultUsers: User[] = [
  { id: '1', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: '2 weeks ago' },
  { id: '2', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Yesterday' },
  { id: '3', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: '1 year ago' },
  { id: '4', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: '1 month ago' },
  { id: '5', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Last week' },
  { id: '6', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Today' },
  { id: '7', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Today' },
  { id: '8', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Today' },
  { id: '9', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: '1 month ago' },
  { id: '10', name: 'Abdul Isa', email: 'abdulisa@gmail.com', contact: '+2348156790543', dateJoined: '31 Mar, 2023', location: 'Abuja', lastUsed: 'Last week' }
];

export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof User | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    dateJoined: '',
    lastUsed: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: keyof User) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...defaultUsers];

    if (searchTerm) {
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(user => user.location === activeFilters.location);
    }

    if (activeFilters.dateJoined) {
      result = result.filter(user => user.dateJoined.includes(activeFilters.dateJoined));
    }

    if (activeFilters.lastUsed) {
      result = result.filter(user => user.lastUsed === activeFilters.lastUsed);
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

  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);
  const paginatedUsers = filteredAndSortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              List of Users
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
                      <label className="text-sm font-medium text-[#344054] block mb-2">Location</label>
                      <select 
                        value={activeFilters.location}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        {Array.from(new Set(defaultUsers.map(u => u.location))).map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">Date Joined</label>
                      <select 
                        value={activeFilters.dateJoined}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, dateJoined: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        {Array.from(new Set(defaultUsers.map(u => u.dateJoined))).map(date => (
                          <option key={date} value={date}>{date}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#344054] block mb-2">Last Used</label>
                      <select 
                        value={activeFilters.lastUsed}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, lastUsed: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        {Array.from(new Set(defaultUsers.map(u => u.lastUsed))).map(lastUsed => (
                          <option key={lastUsed} value={lastUsed}>{lastUsed}</option>
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
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Users Name (A-Z)
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Email
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Contact
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Date Joined
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Location
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Last Used
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="bg-white border-b border-[#EAECF0]">
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {user.name}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {user.email}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {user.contact}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {user.dateJoined}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {user.location}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center px-[19px] py-[5px] rounded-[10px] bg-[#00C8141A] text-[#00C814] font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]">
                  {user.lastUsed}
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