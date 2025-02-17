"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";

interface Complaint {
  id: string;
  ticketId: string;
  status: 'Ongoing' | 'Resolved' | 'Canceled';
  complaint: string;
}

const defaultComplaints: Complaint[] = [
  { id: '1', ticketId: '#23478100764', status: 'Ongoing', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '2', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '3', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '4', ticketId: '#23478100764', status: 'Canceled', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '5', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '6', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '7', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." },
  { id: '8', ticketId: '#23478100764', status: 'Resolved', complaint: "My food wasn't properly delivered, it had the cover..." }
];

export const ComplaintHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: ''
  });

  const filteredComplaints = useMemo(() => {
    let result = [...defaultComplaints];

    if (searchTerm) {
      result = result.filter(complaint => 
        complaint.ticketId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.complaint.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(complaint => complaint.status === activeFilters.status);
    }

    return result;
  }, [searchTerm, activeFilters]);

  const FilterMenu = () => (
    <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg p-4 w-64 z-10 border border-[#EAECF0]">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Status</label>
          <select 
            value={activeFilters.status}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value as Complaint['status'] }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All Status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Resolved">Resolved</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
      </div>
    </div>
  );

  const statusColors = {
    'Ongoing': 'bg-[#FFF6ED] text-[#B93815]',
    'Resolved': 'bg-[#ECFDF3] text-[#027A48]',
    'Canceled': 'bg-[#FEF3F2] text-[#B42318]'
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-raleway text-[18px] font-semibold leading-[32px] text-black mb-1">
          Complaint History
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

      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Ticket ID
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Status
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12px] font-semibold leading-[16px] text-[#4C4C4C]">
                Complaint
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredComplaints.map((complaint) => (
              <tr key={complaint.id} className="border-b border-[#EAECF0] bg-white">
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {complaint.ticketId}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-[16px] ${statusColors[complaint.status]}`}>
                    {complaint.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {complaint.complaint}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};