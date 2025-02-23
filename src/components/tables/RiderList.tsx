"use client";

import { useState, useMemo } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { useParams, useRouter } from "next/navigation";

interface Rider {
  id: string;
  name: string;
  email: string;
  contact: string;
  location: string;
  status: 'active' | 'inactive';
  verified: boolean;
  rides: number;
}

const defaultRiders: Rider[] = [
  { id: '1', name: 'Israel DMW', email: 'Israel.DMW@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 84 },
  { id: '2', name: 'Chima Josiah', email: 'Chima@gmail.com', contact: '+2348156790543', location: 'Kano', status: 'active', verified: true, rides: 92 },
  { id: '3', name: 'Abdul Isa', email: 'Abdul@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 24 },
  { id: '4', name: 'Ernest Agu', email: 'Ernest@gmail.com', contact: '+2348156790543', location: 'Lagos', status: 'active', verified: true, rides: 127 },
  { id: '5', name: 'Jacob Babatunde', email: 'Jacob@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 91 },
  { id: '6', name: 'Musa Tunde', email: 'Musa@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 12 },
  { id: '7', name: 'Mujadeen Asa', email: 'Mujadeen@gmail.com', contact: '+2348156790543', location: 'Kano', status: 'inactive', verified: true, rides: 3 },
  { id: '8', name: 'Prince Prince', email: 'Prince@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 200 },
  { id: '9', name: 'Norway Congo', email: 'Norway@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 38 },
  { id: '10', name: 'Prince Paul', email: 'Paulpri@gmail.com', contact: '+2348156790543', location: 'Lagos', status: 'inactive', verified: true, rides: 67 },
  { id: '11', name: 'Teddy Ayo', email: 'TeddyAy@gmail.com', contact: '+2348156790543', location: 'Kano', status: 'active', verified: true, rides: 87 },
  { id: '12', name: 'Chidera Emmanuel', email: 'Chidera@gmail.com', contact: '+2348156790543', location: 'Abuja', status: 'active', verified: true, rides: 62 }
];

export const RiderList = () => {
  const router = useRouter(); // Get the router object
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Rider | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    status: '',
    verified: ''
  });

  const itemsPerPage = 10;
  const activeCount = defaultRiders.filter(r => r.status === 'active').length;

  const handleSort = (key: keyof Rider) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedRiders = useMemo(() => {
    let result = [...defaultRiders];

    if (searchTerm) {
      result = result.filter(rider => 
        rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(rider => rider.location === activeFilters.location);
    }

    if (activeFilters.status) {
      result = result.filter(rider => rider.status === activeFilters.status);
    }

    if (activeFilters.verified) {
      result = result.filter(rider => 
        activeFilters.verified === 'verified' ? rider.verified : !rider.verified
      );
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

  const totalPages = Math.ceil(filteredAndSortedRiders.length / itemsPerPage);
  const paginatedRiders = filteredAndSortedRiders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              List of Riders
            </h2>
            <span className="inline-flex items-center px-[9.18px] py-[3.67px] bg-[#E9FAF7] rounded-[7.35px] gap-[7.35px]">
              <span className="font-raleway text-[12.86px] font-bold leading-[18.37px] tracking-[0.005em] text-[#1A9882] text-center">
                {activeCount} Active
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
                      <label className="text-sm font-medium text-[#344054] block mb-2">Location</label>
                      <select 
                        value={activeFilters.location}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        {Array.from(new Set(defaultRiders.map(r => r.location))).map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
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
                      <label className="text-sm font-medium text-[#344054] block mb-2">Verification</label>
                      <select 
                        value={activeFilters.verified}
                        onChange={(e) => setActiveFilters(prev => ({ ...prev, verified: e.target.value }))}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All</option>
                        <option value="verified">Verified</option>
                        <option value="unverified">Unverified</option>
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
                Riders Name (A-Z)
                {sortConfig.key === 'name' && (
                  <CaretUpSvg 
                    className={`w-4 h-4 transform ${sortConfig.direction === 'desc' ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Email</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Contact</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Location</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Status</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Verified</th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">Rides</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRiders.map((rider) => (
            <tr key={rider.id} className="bg-white border-b border-[#EAECF0] cursor-pointer hover:bg-[f7f7f7]" onClick={() => router.push('./riders/' + rider.id)}>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <img src="/avatar.png" alt={rider.name} className="w-8 h-8 rounded-full" />
                  <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                    {rider.name}
                  </span>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {rider.email}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {rider.contact}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {rider.location}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${
                  rider.status === 'active' 
                    ? 'bg-[#ECFDF3] text-[#027A48]' 
                    : 'bg-[#FEF3F2] text-[#B42318]'
                } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                  {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] ${
                  rider.verified
                    ? 'bg-[#ECFDF3] text-[#027A48]'
                    : 'bg-[#FEF3F2] text-[#B42318]'
                } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                  {rider.verified ? 'Verified' : 'Unverified'}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {rider.rides} Rides
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