"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { TableFilter2Svg } from "@/components/icons/TableFilter2Svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/avatar";

interface RejectedSend {
  id: string;
  orderId: string;
  customerName: string;
  avatar: string;
  address: string;
  rejectionCount: number;
  deliveryPrice: number;
}

const defaultRejectedSends: RejectedSend[] = [
  {
    id: '1',
    orderId: '#4590',
    customerName: 'Kemikal',
    avatar: '/images/avatars/mark.jpg',
    address: 'No. 2 Avenue, Wuse 3, Awka',
    rejectionCount: 4,
    deliveryPrice: 1345.00,
  },
  {
    id: '2',
    orderId: '#4590',
    customerName: 'Kemikal',
    avatar: '/images/avatars/mark.jpg',
    address: 'No. 2 Avenue, Wuse 3, Lagos',
    rejectionCount: 7,
    deliveryPrice: 945.00,
  },
  {
    id: '3',
    orderId: '#4590',
    customerName: 'Kemikal',
    avatar: '/images/avatars/mark.jpg',
    address: 'No. 2 Avenue, Wuse 3, Abuja',
    rejectionCount: 5,
    deliveryPrice: 845.00,
  },
];

export const RejectedSendsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof RejectedSend | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const handleSort = (key: keyof RejectedSend) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const handleReassign = (orderId: string) => {
    // Implement reassign logic here
    console.log('Reassigning order:', orderId);
  };

  const filteredSends = useMemo(() => {
    let filtered = [...defaultRejectedSends];

    if (searchTerm) {
      filtered = filtered.filter(send => 
        send.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        send.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        send.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

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
  }, [searchTerm, sortConfig]);

  return (
    <div>
      {/* Header section - now transparent */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[32px] font-semibold">Rejected Send</h1>
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

      {/* Table section - with white background */}
      <div className="bg-white rounded-[15px]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F7F7F7]">
              <tr className="border-b border-[#E0E2E7]">
                <th className="py-4 px-6 text-left font-medium text-[14px]">
                  <button onClick={() => handleSort('orderId')} className="flex items-center gap-2">
                    Order ID
                    <CaretUpSvg size={10} className={`text-[#858D9D] ${sortConfig.key === 'orderId' ? 'transform rotate-180' : ''}`} />
                  </button>
                </th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">Customer Name</th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">Address</th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">No. of Rejection</th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">Delivery Price</th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">
                  <button onClick={() => handleSort('status')} className="flex items-center gap-2">
                    Status
                    <CaretUpSvg size={10} className="text-[#858D9D]" />
                  </button>
                </th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">Reassign</th>
                <th className="py-4 px-6 text-left font-medium text-[14px]">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredSends.map((send) => (
                <tr key={send.id} className="border-b border-[#E0E2E7]">
                  <td className="py-5 px-6">{send.orderId}</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={send.avatar} />
                        <AvatarFallback>{send.customerName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {send.customerName}
                    </div>
                  </td>
                  <td className="py-5 px-6">{send.address}</td>
                  <td className="py-5 px-6">{send.rejectionCount} times</td>
                  <td className="py-5 px-6">N {send.deliveryPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                  <td className="py-5 px-6">
                    <span className="px-4 py-2 rounded-[10px] bg-[#FEEFEF] text-[#F04438]">
                      Rejected
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <button 
                      onClick={() => handleReassign(send.orderId)}
                      className="px-6 py-2 bg-black text-white rounded-[10px] hover:bg-black/90 text-[14px]"
                    >
                      Re-assign
                    </button>
                  </td>
                  <td className="py-5 px-6">
                    <button className="text-[#858D9D] text-xl">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Updated pagination with correct colors */}
        <div className="flex justify-between items-center p-6">
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
  );
};