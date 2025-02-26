"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { TableFilter2Svg } from "@/components/icons/TableFilter2Svg";
import { useRouter } from 'next/navigation';

interface ReturnOrder {
  id: string;
  orderId: string;
  customerName: string;
  customerAvatar: string;
  phoneNumber: string;
  date: string;
  price: number;
  status: 'Pending' | 'Resolved';
}

interface Complaint {
  id: string;
  orderId: string;
  customerName: string;
  customerAvatar: string;
  phoneNumber: string;
  date: string;
  price: number;
  status: 'Pending' | 'Resolved';
  complaintType: string;
}

const defaultReturnOrders: ReturnOrder[] = [
  { id: '1', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '2', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Resolved' },
  { id: '3', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Resolved' },
  { id: '4', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '5', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '6', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Resolved' },
  { id: '7', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '8', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '9', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
  { id: '10', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending' },
];

const defaultComplaints: Complaint[] = [
  { id: '1', orderId: '#4590', customerName: 'Justice Adam', customerAvatar: '/customers/justice.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Pending', complaintType: 'Wrong Order' },
  { id: '2', orderId: '#4590', customerName: 'Mercy Daniel', customerAvatar: '/customers/mercy.png', phoneNumber: '+234 903 456 7890', date: '12-05-2024', price: 54345.00, status: 'Resolved', complaintType: 'Late Delivery' },
  // ... add more complaints data
];

export const ReturnOrdersAndComplaints = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'returns' | 'complaints'>('returns');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: 'orderId' | 'customerName' | 'price' | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    status: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: 'orderId' | 'customerName' | 'price') => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedData = useMemo(() => {
    let result = activeTab === 'returns' ? [...defaultReturnOrders] : [...defaultComplaints];

    if (searchTerm) {
      result = result.filter(item => 
        item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(item => item.status === activeFilters.status);
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
  }, [searchTerm, sortConfig, activeFilters, activeTab]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRowClick = (item: ReturnOrder | Complaint) => {
    if (activeTab === 'returns') {
      router.push(`/dashboard/support/customer/return/${item.id}`);
    } else {
      router.push(`/dashboard/support/customer/complaint/${item.id}`);
    }
  };

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('returns')}
              className={`font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] ${
                activeTab === 'returns' ? 'text-[#1D1F2C] border-b-2 border-[#1D1F2C]' : 'text-[#667085]'
              }`}
            >
              Return Orders
            </button>
            <button
              onClick={() => setActiveTab('complaints')}
              className={`font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] ${
                activeTab === 'complaints' ? 'text-[#1D1F2C] border-b-2 border-[#1D1F2C]' : 'text-[#667085]'
              }`}
            >
              Complaint
            </button>
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
              <span className="text-[#344054]">24-10-2023</span>
              <CaretUpSvg className="w-4 h-4 transform rotate-180" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
              >
                <TableFilter2Svg className="w-5 h-5 text-[#344054]" />
                <span className="text-[#344054]">Filters</span>
                <CaretUpSvg className={`w-4 h-4 transform ${filterOpen ? '' : 'rotate-180'}`} />
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] p-4 z-10 min-w-[200px]">
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Status</label>
                    <select 
                      value={activeFilters.status}
                      onChange={(e) => {
                        setActiveFilters(prev => ({ ...prev, status: e.target.value as 'Pending' | 'Resolved' }));
                        setCurrentPage(1);
                      }}
                      className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                    >
                      <option value="">All Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th 
                onClick={() => handleSort('orderId')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Order ID
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'orderId' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th 
                onClick={() => handleSort('customerName')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Name
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'customerName' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Phone Number
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Date
              </th>
              <th 
                onClick={() => handleSort('price')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Price
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'price' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Status
              </th>
              {activeTab === 'complaints' && (
                <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  Complaint Type
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr 
                key={item.id} 
                className="bg-white border-b border-[#EAECF0] hover:bg-gray-50 cursor-pointer" 
                onClick={() => handleRowClick(item)}
              >
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {item.orderId}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={item.customerAvatar} alt={item.customerName} className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                      {item.customerName}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {item.phoneNumber}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {item.date}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    ₦{item.price.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] gap-2 ${
                    item.status === 'Resolved'
                      ? 'bg-[#00C814] text-white'
                      : 'bg-[#AAAAAA1A] text-[#878686]'
                  } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                    {item.status}
                  </span>
                </td>
                {activeTab === 'complaints' && (
                  <td className="py-4 px-6">
                    <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                      {(item as Complaint).complaintType}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="border-t border-[#EAECF0] p-4 flex justify-between items-center">
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