"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";

interface Delivery {
  id: string;
  riderName: string;
  orderId: string;
  customerPhone: string;
  location: string;
  business: string;
  status: 'Completed' | 'Ongoing' | 'Canceled';
}

const defaultDeliveries: Delivery[] = [
  { id: '1', riderName: 'Israel', orderId: '9856', customerPhone: '+234 903 457 8903', location: 'Lugbe', business: 'Second Pot', status: 'Completed' },
  { id: '2', riderName: 'Chima', orderId: '0734', customerPhone: '+234 813 890 1223', location: 'Wuse', business: 'KFC', status: 'Completed' },
  { id: '3', riderName: 'Abdul', orderId: '9013', customerPhone: '+234 903 457 8903', location: 'Garki', business: 'Dominos', status: 'Ongoing' },
  { id: '4', riderName: 'Isoko', orderId: '6720', customerPhone: '+234 813 890 1223', location: 'Durumi', business: 'Exclusive', status: 'Completed' },
  { id: '5', riderName: 'Ernest', orderId: '5672', customerPhone: '+234 903 457 8903', location: 'Gwanripa', business: 'Shoprite', status: 'Canceled' },
  { id: '6', riderName: 'Jacob', orderId: '9593', customerPhone: '+234 813 890 1223', location: 'Life Camp', business: '4 You', status: 'Completed' },
  { id: '7', riderName: 'Musa', orderId: '2378', customerPhone: '+234 903 457 8903', location: 'Area 1', business: 'Mr. Biggs', status: 'Completed' },
  { id: '8', riderName: 'Mujadeen', orderId: '1020', customerPhone: '+234 813 890 1223', location: 'Lugbe', business: 'Madam Cash', status: 'Completed' },
  { id: '9', riderName: 'Prince', orderId: '2757', customerPhone: '+234 903 457 8903', location: 'Lugbe', business: 'Second Pot', status: 'Completed' },
  { id: '10', riderName: 'Norway', orderId: '7890', customerPhone: '+234 813 890 1223', location: 'Lugbe', business: 'Second Pot', status: 'Completed' }
];

export const RecentDelivery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    status: '',
    location: ''
  });

  const filteredDeliveries = useMemo(() => {
    let result = [...defaultDeliveries];

    if (searchTerm) {
      result = result.filter(delivery => 
        delivery.riderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(delivery => delivery.status === activeFilters.status);
    }

    if (activeFilters.location) {
      result = result.filter(delivery => delivery.location === activeFilters.location);
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
            onChange={(e) => setActiveFilters(prev => ({ ...prev, status: e.target.value as Delivery['status'] }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Canceled">Canceled</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-[#344054] block mb-2">Location</label>
          <select 
            value={activeFilters.location}
            onChange={(e) => setActiveFilters(prev => ({ ...prev, location: e.target.value }))}
            className="w-full p-2 border border-[#D0D5DD] rounded-lg"
          >
            <option value="">All Locations</option>
            <option value="Lugbe">Lugbe</option>
            <option value="Wuse">Wuse</option>
            <option value="Garki">Garki</option>
            <option value="Durumi">Durumi</option>
            <option value="Life Camp">Life Camp</option>
            <option value="Area 1">Area 1</option>
          </select>
        </div>
      </div>
    </div>
  );

  const statusColors = {
    'Completed': 'bg-[#ECFDF3] text-[#027A48]',
    'Ongoing': 'bg-[#FFF6ED] text-[#B93815]',
    'Canceled': 'bg-[#FEF3F2] text-[#B42318]'
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-raleway text-[18px] font-semibold leading-[32px] text-black mb-1">
          Recent Delivery
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
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Rider&apos;s Name
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Order ID
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Customer Phone No
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Location
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Business
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[14px] font-semibold text-[#4C4C4C]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDeliveries.map((delivery) => (
              <tr key={delivery.id} className="border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {delivery.riderName}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {delivery.orderId}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {delivery.customerPhone}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {delivery.location}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-black">
                    {delivery.business}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-[16px] ${statusColors[delivery.status]}`}>
                    {delivery.status}
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