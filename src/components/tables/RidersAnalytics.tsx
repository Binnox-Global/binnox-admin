"use client";

import { useState, useMemo } from "react";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";
import { useRouter } from 'next/navigation';

interface Rider {
  id: string;
  name: string;
  avatar: string;
  location: string;
  pickupsWeekly: number;
  deliveryTime: string;
  pricePerPickup: number;
  status: 'Active' | 'Inactive';
}

const defaultRiders: Rider[] = [
  { id: '1', name: 'Israel DMW', avatar: '/riders/israel.png', location: 'Lekki, Lagos', pickupsWeekly: 80, deliveryTime: '12:04 min', pricePerPickup: 900.00, status: 'Active' },
  { id: '2', name: 'Chima Josiah', avatar: '/riders/chima.png', location: 'Garki, Abuja', pickupsWeekly: 45, deliveryTime: '23:04 min', pricePerPickup: 4450.00, status: 'Active' },
  { id: '3', name: 'Ernest Agu', avatar: '/riders/ernest.png', location: 'Lugbe, Abuja', pickupsWeekly: 23, deliveryTime: '10:00 min', pricePerPickup: 1250.00, status: 'Active' },
  { id: '4', name: 'Abdul Isa', avatar: '/riders/abdul.png', location: 'Awka, Anambra', pickupsWeekly: 167, deliveryTime: '45:27 min', pricePerPickup: 1050.00, status: 'Inactive' },
  { id: '5', name: 'Jacob Babatunde', avatar: '/riders/jacob.png', location: 'Tai, Rivers', pickupsWeekly: 95, deliveryTime: '07:26 min', pricePerPickup: 750.00, status: 'Active' },
  { id: '6', name: 'Musa Tunde', avatar: '/riders/musa.png', location: 'Garki, Abuja', pickupsWeekly: 78, deliveryTime: '12:04 min', pricePerPickup: 800.00, status: 'Active' },
  { id: '7', name: 'Mujadeen Asa', avatar: '/riders/mujadeen.png', location: 'Wuse, Abuja', pickupsWeekly: 12, deliveryTime: '23:04 min', pricePerPickup: 590.00, status: 'Active' },
  { id: '8', name: 'Prince Prince', avatar: '/riders/prince.png', location: 'FESTAC, Lagos', pickupsWeekly: 190, deliveryTime: '10:00 min', pricePerPickup: 1300.00, status: 'Active' },
  { id: '9', name: 'Norway Congo', avatar: '/riders/norway.png', location: 'Ikoyi, Lagos', pickupsWeekly: 59, deliveryTime: '07:26 min', pricePerPickup: 800.00, status: 'Active' },
  { id: '10', name: 'Chidera Emmanuel', avatar: '/riders/chidera.png', location: 'Maitama, Abuja', pickupsWeekly: 72, deliveryTime: '04:26 min', pricePerPickup: 1300.00, status: 'Inactive' }
];

export const RidersAnalytics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Rider | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    status: ''
  });

  const itemsPerPage = 10;

  const router = useRouter();

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
        rider.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.location) {
      result = result.filter(rider => 
        rider.location.toLowerCase().includes(activeFilters.location.toLowerCase())
      );
    }

    if (activeFilters.status) {
      result = result.filter(rider => rider.status === activeFilters.status);
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
              Riders Analytics
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
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#344054] mb-1">Status</label>
                      <select 
                        value={activeFilters.status}
                        onChange={(e) => {
                          setActiveFilters(prev => ({ ...prev, status: e.target.value as 'Active' | 'Inactive' }));
                          setCurrentPage(1);
                        }}
                        className="w-full p-2 border border-[#D0D5DD] rounded-lg"
                      >
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => router.push('/dashboard/analytics/riders')}
              className="rounded-[8px] px-4 py-2 bg-[#F4670233] text-[#F46702] text-[15px] font-medium"
            >
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
                onClick={() => handleSort('name')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Riders Name (A-Z)
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'name' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Location
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Average Pickup Weekly
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Average Delivery Time
              </th>
              <th 
                onClick={() => handleSort('pricePerPickup')}
                className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C] cursor-pointer"
              >
                Average Price Per Pickup
                <CaretUpSvg className={`inline-block ml-1 w-4 h-4 transform ${
                  sortConfig.key === 'pricePerPickup' && sortConfig.direction === 'desc' ? 'rotate-180' : ''
                }`} />
              </th>
              <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedRiders.map((rider) => (
              <tr key={rider.id} className="bg-white border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={rider.avatar} alt={rider.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                      {rider.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {rider.location}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {rider.pickupsWeekly} Pickups
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    {rider.deliveryTime}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-raleway text-[14px] font-medium text-[#1D1F2C]">
                    ₦{rider.pricePerPickup.toLocaleString()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-[19px] py-[5px] rounded-[10px] gap-2 ${
                    rider.status === 'Active'
                      ? 'bg-[#ECFDF3] text-[#027A48]'
                      : 'bg-[#FEF3F2] text-[#B42318]'
                  } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}>
                    {rider.status}
                  </span>
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