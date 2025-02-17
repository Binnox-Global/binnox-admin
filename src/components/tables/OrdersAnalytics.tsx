"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Order {
  id: string;
  orderId: string;
  restaurant: {
    name: string;
    logo: string;
  };
  price: number;
  date: string;
  deliveryLocation: string;
  totalOrders: number;
}

const defaultOrders: Order[] = [
  { id: '1', orderId: '#4790', restaurant: { name: 'Yakoyo', logo: '/businesses/yakoyo.png' }, price: 7902.00, date: 'Mon, 18-05-2024', deliveryLocation: 'Dustse, Abuja', totalOrders: 12 },
  { id: '2', orderId: '#5122', restaurant: { name: 'Yakoyo', logo: '/businesses/yakoyo.png' }, price: 3200.00, date: 'Fri, 15-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 12 },
  { id: '3', orderId: '#3111', restaurant: { name: 'Second Pot', logo: '/businesses/secondpot.png' }, price: 4520.00, date: 'Thurs, 14-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 9 },
  { id: '4', orderId: '#2980', restaurant: { name: 'Fast Food', logo: '/businesses/fastfood.png' }, price: 5090.00, date: 'Tue, 12-05-2024', deliveryLocation: 'Maitama, Abuja', totalOrders: 5 },
  { id: '5', orderId: '#6880', restaurant: { name: 'Exclusive Stores', logo: '/businesses/exclusive.png' }, price: 45300.00, date: 'Sat, 09-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 2 },
  { id: '6', orderId: '#6212', restaurant: { name: 'Exclusive Stores', logo: '/businesses/exclusive.png' }, price: 21720.00, date: 'Sat, 09-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 2 },
  { id: '7', orderId: '#4790', restaurant: { name: 'Yakoyo', logo: '/businesses/yakoyo.png' }, price: 7902.00, date: 'Mon, 18-05-2024', deliveryLocation: 'Dustse, Abuja', totalOrders: 12 },
  { id: '8', orderId: '#5122', restaurant: { name: 'Yakoyo', logo: '/businesses/yakoyo.png' }, price: 3200.00, date: 'Fri, 15-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 12 },
  { id: '9', orderId: '#3111', restaurant: { name: 'Second Pot', logo: '/businesses/secondpot.png' }, price: 4520.00, date: 'Thurs, 14-05-2024', deliveryLocation: 'Garki, Abuja', totalOrders: 9 },
  { id: '10', orderId: '#2980', restaurant: { name: 'Fast Food', logo: '/businesses/fastfood.png' }, price: 5090.00, date: 'Tue, 12-05-2024', deliveryLocation: 'Maitama, Abuja', totalOrders: 5 }
];

export const OrdersAnalytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order | 'restaurant.name' | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    restaurant: ''
  });

  const itemsPerPage = 10;

  const handleSort = (key: keyof Order | 'restaurant.name') => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...defaultOrders];

    if (searchTerm) {
      result = result.filter(order => 
        order.restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.deliveryLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(order => 
        order.deliveryLocation.toLowerCase().includes(activeFilters.location.toLowerCase())
      );
    }

    if (activeFilters.restaurant) {
      result = result.filter(order => 
        order.restaurant.name.toLowerCase() === activeFilters.restaurant.toLowerCase()
      );
    }

    if (sortConfig.key) {
      result.sort((a, b) => {
        let aValue = sortConfig.key === 'restaurant.name' ? a.restaurant.name : a[sortConfig.key as keyof Order];
        let bValue = sortConfig.key === 'restaurant.name' ? b.restaurant.name : b[sortConfig.key as keyof Order];

        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [searchTerm, sortConfig, activeFilters]);

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const paginatedOrders = filteredAndSortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              Order Analytics
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
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
              >
                <span className="text-[#344054]">Filters</span>
                <CaretUpSvg className={`w-4 h-4 transform ${filterOpen ? '' : 'rotate-180'}`} />
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] p-4 z-10 min-w-[200px]">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#344054] mb-1">Location</label>
                      <select 
                        value={activeFilters.location}
                        onChange={(e) => {
                          setActiveFilters(prev => ({ ...prev, location: e.target.value }));
                          setCurrentPage(1);
                        }}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All Locations</option>
                        <option value="Abuja">Abuja</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#344054] mb-1">Restaurant</label>
                      <select 
                        value={activeFilters.restaurant}
                        onChange={(e) => {
                          setActiveFilters(prev => ({ ...prev, restaurant: e.target.value }));
                          setCurrentPage(1);
                        }}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All Restaurants</option>
                        <option value="Yakoyo">Yakoyo</option>
                        <option value="Second Pot">Second Pot</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Exclusive Stores">Exclusive Stores</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#FFF1E9] text-[#F46702]">
              See All
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th 
                onClick={() => handleSort('restaurant.name')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Restaurant (A-Z)
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'restaurant.name' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                ID
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
                Day
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Delivery Location
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Total Orders from a Restaurant
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                More
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="bg-white border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={order.restaurant.logo} alt={order.restaurant.name} className="w-8 h-8 rounded-lg object-cover" />
                    <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                      {order.restaurant.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {order.orderId}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    ₦{order.price.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {order.date}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {order.deliveryLocation}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {order.totalOrders}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-[#1D1F2C]">•••</button>
                </td>
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