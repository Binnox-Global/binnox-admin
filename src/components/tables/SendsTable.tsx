"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { TableFilter2Svg } from "@/components/icons/TableFilter2Svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/avatar";

interface Send {
  id: string;
  orderId: string;
  name: string;
  avatar: string;
  address: string;
  date: string;
  price: number;
  status: 'completed' | 'dispatched' | 'cancelled' | 'pending';
}

const defaultSends: Send[] = [
  {
    id: '1',
    orderId: '#4590',
    name: 'Kemikal',
    avatar: '/images/avatars/mark.jpg',
    address: 'No. 2 Avenue, Wuse 3, Abuja',
    date: '09:20am',
    price: 4345.00,
    status: 'completed'
  },
  // Add more sample data here
];

export const SendsTable = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ongoing' | 'pending' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Send | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Send) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const getStatusStyle = (status: Send['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-[#E6F5E7] text-[#00C814]';
      case 'dispatched':
        return 'bg-[#FFF7E6] text-[#FFB800]';
      case 'cancelled':
        return 'bg-[#FEEFEF] text-[#F04438]';
      case 'pending':
        return 'bg-[#F2F4F7] text-[#667085]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredSends = useMemo(() => {
    let filtered = [...defaultSends];

    // Filter by tab
    if (activeTab !== 'all') {
      filtered = filtered.filter(send => send.status === activeTab);
    }

    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(send => 
        send.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        send.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        send.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [activeTab, searchTerm, sortConfig]);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-white rounded-[5px] px-5 py-4 mb-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`font-medium pb-2 ${activeTab === 'all' ? 'text-black border-b-2 border-black' : 'text-[#858D9D]'}`}
            >
              All Sends
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`font-medium pb-2 ${activeTab === 'ongoing' ? 'text-black border-b-2 border-black' : 'text-[#858D9D]'}`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`font-medium pb-2 ${activeTab === 'pending' ? 'text-black border-b-2 border-black' : 'text-[#858D9D]'}`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`font-medium pb-2 ${activeTab === 'completed' ? 'text-black border-b-2 border-black' : 'text-[#858D9D]'}`}
            >
              Completed
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 border border-[#E0E2E7] rounded-[5px] w-[280px] focus:outline-none focus:border-black"
              />
              <TableSearchSvg className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <input
              type="date"
              className="px-4 py-2.5 border border-[#E0E2E7] rounded-[5px] w-[160px] focus:outline-none focus:border-black"
            />
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 border border-[#E0E2E7] rounded-[5px]"
            >
              <TableFilter2Svg />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[15px]">
        <table className="w-full">
          <thead className="bg-[#F7F7F7]">
            <tr className="border-b border-[#E0E2E7]">
              <th className="py-4 px-6 text-left font-medium text-[14px]">
                <button onClick={() => handleSort('orderId')} className="flex items-center gap-2">
                  Order ID
                  <CaretUpSvg size={10} className={`text-[#858D9D] ${sortConfig.key === 'orderId' ? 'transform rotate-180' : ''}`} />
                </button>
              </th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">Name</th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">Address</th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">Date</th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">Price</th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">Status</th>
              <th className="py-4 px-6 text-left font-medium text-[14px]">More</th>
            </tr>
          </thead>
          <tbody>
            {filteredSends.map((send) => (
              <tr key={send.id} className="border-b border-[#E0E2E7]">
                <td className="py-4 px-6">{send.orderId}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={send.avatar} />
                      <AvatarFallback>{send.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {send.name}
                  </div>
                </td>
                <td className="py-4 px-6">{send.address}</td>
                <td className="py-4 px-6">{send.date}</td>
                <td className="py-4 px-6">N {send.price.toLocaleString()}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full ${getStatusStyle(send.status)}`}>
                    {send.status.charAt(0).toUpperCase() + send.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-[#858D9D]">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-6">
          <div className="flex justify-between items-center">
            <button className="text-[#667085]">Previous page</button>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === page
                      ? 'bg-[#F46702] text-white'
                      : 'text-[#667085]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="text-[#667085]">Next page</button>
          </div>
        </div>
      </div>
    </div>
  );
};