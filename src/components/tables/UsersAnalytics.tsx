"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

// Remove avatar from interface
interface UserAnalytics {
  id: string;
  name: string;
  location: string;
  avgTimeSpent: string;
  weeklyFrequency: string;
  avgPrice: number;
  lastUsed: string;
}

// Update defaultUsers to remove avatar
const defaultUsers: UserAnalytics[] = [
  { id: '1', name: 'Justice Adam', location: 'Lekki, Lagos', avgTimeSpent: '12:04 min', weeklyFrequency: '3 times Weekly', avgPrice: 12300.00, lastUsed: 'Today - 08:10pm' },
  { id: '2', name: 'Sophia Igwe', location: 'Garki, Abuja', avgTimeSpent: '23:04 min', weeklyFrequency: '5 times Weekly', avgPrice: 7450.00, lastUsed: 'Yesterday - 02:24pm' },
  { id: '3', name: 'George Boston', location: 'Lugbe, Abuja', avgTimeSpent: '1:45:04 min', weeklyFrequency: '13 times Weekly', avgPrice: 77350.00, lastUsed: 'Today - 04:19pm' },
  { id: '4', name: 'Diamond Creation',  location: 'Awka, Anambra', avgTimeSpent: '23:04 min', weeklyFrequency: '5 times Weekly', avgPrice: 7450.00, lastUsed: 'Yesterday - 02:24pm' },
  { id: '5', name: 'Herr Brue',  location: 'Tai, Rivers', avgTimeSpent: '23:04 min', weeklyFrequency: '5 times Weekly', avgPrice: 7450.00, lastUsed: 'Yesterday - 02:24pm' },
  { id: '6', name: 'Juri Techom',  location: 'Garki, Abuja', avgTimeSpent: '23:04 min', weeklyFrequency: '5 times Weekly', avgPrice: 7450.00, lastUsed: 'Yesterday - 02:24pm' },
  { id: '7', name: 'Pious Johnson',  location: 'Wuse, Abuja', avgTimeSpent: '12:04 min', weeklyFrequency: '3 times Weekly', avgPrice: 12300.00, lastUsed: 'Today - 08:10pm' },
  { id: '8', name: 'Grateful Muller',  location: 'FESTAC, Lagos', avgTimeSpent: '12:04 min', weeklyFrequency: '3 times Weekly', avgPrice: 12300.00, lastUsed: 'Today - 08:10pm' },
  { id: '9', name: 'Kohl Bamas', location: 'Ikoyi, Lagos', avgTimeSpent: '12:04 min', weeklyFrequency: '3 times Weekly', avgPrice: 12300.00, lastUsed: 'Today - 08:10pm' },
  { id: '10', name: 'Kyoto Carsten', location: 'Maitama, Abuja', avgTimeSpent: '20:04 min', weeklyFrequency: '2 times Weekly', avgPrice: 3300.00, lastUsed: '18-05-2024 - 12:02pm' }
];

// Add these state variables
export const UsersAnalytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    frequency: '',
    timeSpent: ''
  });

  const [sortConfig, setSortConfig] = useState<{
    key: keyof UserAnalytics | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const itemsPerPage = 10;

  const handleSort = (key: keyof UserAnalytics) => {
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
        user.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(user => user.location.includes(activeFilters.location));
    }

    if (activeFilters.frequency) {
      result = result.filter(user => user.weeklyFrequency.includes(activeFilters.frequency));
    }

    if (activeFilters.timeSpent) {
      result = result.filter(user => user.avgTimeSpent.includes(activeFilters.timeSpent));
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
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              Users Analytics
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
            <button 
              onClick={() => setFilterOpen(!filterOpen)} 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
            >
              <span className="text-[#344054]">Filters</span>
              <CaretUpSvg className={`w-4 h-4 transform ${filterOpen ? '' : 'rotate-180'}`} />
            </button>
            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] p-4 z-10">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Location</label>
                    <select 
                      value={activeFilters.location}
                      onChange={(e) => setActiveFilters(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                    >
                      <option value="">All Locations</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Frequency</label>
                    <select 
                      value={activeFilters.frequency}
                      onChange={(e) => setActiveFilters(prev => ({ ...prev, frequency: e.target.value }))}
                      className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                    >
                      <option value="">All Frequencies</option>
                      <option value="3 times">3 times Weekly</option>
                      <option value="5 times">5 times Weekly</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            <button className="px-4 py-2 rounded-lg bg-[#FFF1E9] text-[#F46702]">
              See All
            </button>
          </div>
        </div>
      </div>

      <table className="w-full bg-white">
        <thead>
          <tr className="bg-[#F7F7F7]">
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              User Name (A-Z)
              <CaretUpSvg className="inline-block ml-1 w-4 h-4" />
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold text-[#1D1F2C]">
              Location
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold text-[#1D1F2C]">
              Average Time Spent Weekly
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold text-[#1D1F2C]">
              Weekly Frequency
            </th>
            <th 
              className="py-4 px-6 text-left font-raleway text-[12px] font-semibold text-[#1D1F2C] cursor-pointer"
              onClick={() => handleSort('avgPrice')}
            >
              Average Price
              <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                sortConfig.key === 'avgPrice' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
              }`} />
            </th>
            <th 
              className="py-4 px-6 text-left font-raleway text-[12px] font-semibold text-[#1D1F2C] cursor-pointer"
              onClick={() => handleSort('lastUsed')}
            >
              Last Used
              <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                sortConfig.key === 'lastUsed' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
              }`} />
            </th>
            {/* Remove More column header */}
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id} className="border-b border-[#EAECF0]">
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  {user.name}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  {user.location}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  {user.avgTimeSpent}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  {user.weeklyFrequency}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  ₦{user.avgPrice.toLocaleString()}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                  {user.lastUsed}
                </span>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

        <div className="bg-white rounded-b-lg border-t border-[#EAECF0]">
        <div className="p-4 flex justify-between items-center">
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