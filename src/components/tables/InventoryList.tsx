"use client";

import { useState, useMemo, useEffect } from "react";
import { TableFilterSvg } from "@/components/icons/TableFilterSvg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";
import { CaretUpSvg } from "@/components/icons/CaretUpSvg";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'enabled' | 'disabled';
  promotions: 'Combo' | 'Discount' | 'Product Discount';
}

const defaultProducts: Product[] = [
  { id: '1', name: 'Burger', category: 'Snacks', price: 3800.00, stock: 98, status: 'enabled', promotions: 'Combo' },
  { id: '2', name: 'Pizza', category: 'Snacks', price: 4500.00, stock: 72, status: 'enabled', promotions: 'Discount' },
  { id: '3', name: 'Salad', category: 'Healthy', price: 2500.00, stock: 45, status: 'enabled', promotions: 'Product Discount' },
  { id: '4', name: 'Pasta', category: 'Italian', price: 3200.00, stock: 63, status: 'enabled', promotions: 'Combo' },
  { id: '5', name: 'Sushi', category: 'Japanese', price: 5000.00, stock: 88, status: 'enabled', promotions: 'Combo' },
  { id: '6', name: 'Tacos', category: 'Mexican', price: 3700.00, stock: 51, status: 'enabled', promotions: 'Combo' },
  { id: '7', name: 'Sandwich', category: 'Quick Bite', price: 2000.00, stock: 29, status: 'enabled', promotions: 'Combo' },
  { id: '8', name: 'Ice Cream', category: 'Dessert', price: 1500.00, stock: 42, status: 'enabled', promotions: 'Discount' },
  { id: '9', name: 'Steak', category: 'Grill', price: 6500.00, stock: 77, status: 'enabled', promotions: 'Product Discount' },
  { id: '10', name: 'Soup', category: 'Hot', price: 2800.00, stock: 36, status: 'enabled', promotions: 'Product Discount' },
  { id: '11', name: 'Rice Bowl', category: 'Asian', price: 3400.00, stock: 59, status: 'enabled', promotions: 'Combo' }
];

export const InventoryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState<string | null>(null);
  const [actionOpen, setActionOpen] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    status: '',
    promotions: ''
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-trigger')) {
        setStatusOpen(null);
        setActionOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStatusChange = (productId: string, newStatus: 'enabled' | 'disabled') => {
    // Handle status change logic here
    setStatusOpen(null);
  };

  const handleStatusClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setStatusOpen(statusOpen === productId ? null : productId);
    setActionOpen(null);
  };

  const handleActionClick = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setActionOpen(actionOpen === productId ? null : productId);
    setStatusOpen(null);
  };

  const itemsPerPage = 10;

  const handleSort = (key: keyof Product) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...defaultProducts];

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.category) {
      result = result.filter(product => product.category === activeFilters.category);
    }

    if (activeFilters.status) {
      result = result.filter(product => product.status === activeFilters.status);
    }

    if (activeFilters.promotions) {
      result = result.filter(product => product.promotions === activeFilters.promotions);
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

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mb-6">
      <div className="bg-white p-6 rounded-t-lg mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[18.37px] font-bold leading-[27.55px] tracking-[0.01em] text-[#1D1F2C]">
              All Inventory
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
            <div className="relative">
              <button 
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D0D5DD]"
              >
                <span className="text-[#344054]">Category</span>
                <CaretUpSvg className={`w-4 h-4 transform ${categoryOpen ? '' : 'rotate-180'}`} />
              </button>
            </div>
            <div className="relative">
              <button 
                onClick={() => setPriceOpen(!priceOpen)}
                className="flex items-center gap-2 px-4 py-4 rounded-lg border border-[#D0D5DD]"
              >
                <span className="text-[#344054]">Price</span>
                <CaretUpSvg className={`w-4 h-4 transform ${priceOpen ? '' : 'rotate-180'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#F7F7F7]">
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Product Name
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Category
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Price
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Stock
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Status
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Promotions
            </th>
            <th className="py-4 px-6 text-left font-raleway text-[12.86px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product.id} className="bg-white border-b border-[#EAECF0]">
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <img src={`/products/${product.name.toLowerCase()}.png`} alt={product.name} className="w-8 h-8 rounded-lg object-cover" />
                  <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                    {product.name}
                  </span>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {product.category}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  ₦{product.price.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {product.stock}
                </span>
              </td>
              <td className="py-4 px-6">
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setStatusOpen(statusOpen === product.id ? null : product.id);
                      setActionOpen(null);
                    }}
                    className={`dropdown-trigger inline-flex items-center px-[19px] py-[5px] rounded-[10px] gap-2 ${
                      product.status === 'enabled'
                        ? 'bg-[#ECFDF3] text-[#027A48]'
                        : 'bg-[#FEF3F2] text-[#B42318]'
                    } font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em]`}
                  >
                    {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    <CaretUpSvg className="w-4 h-4 transform rotate-180" />
                  </button>
                  {statusOpen === product.id && (
                    <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] w-32 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(product.id, 'enabled');
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#027A48]"
                      >
                        Enabled
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStatusChange(product.id, 'disabled');
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#B42318]"
                      >
                        Disabled
                      </button>
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-raleway text-[14px] font-semibold leading-[18.37px] tracking-[0.005em] text-[#1D1F2C]">
                  {product.promotions}
                </span>
              </td>
              <td className="py-4 px-6">
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActionOpen(actionOpen === product.id ? null : product.id);
                      setStatusOpen(null);
                    }}
                    className="dropdown-trigger inline-flex items-center px-[19px] py-[5px] rounded-[10px] gap-2 bg-[#FF0000] text-white font-raleway text-[14px] font-medium leading-[18.37px] tracking-[0.005em]"
                  >
                    <span>View</span>
                    <CaretUpSvg className="w-4 h-4 transform rotate-180" />
                  </button>
                  {actionOpen === product.id && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-[#EAECF0] w-32 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle delete action
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#FF0000]"
                      >
                        Delete
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle edit action
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#1D1F2C]"
                      >
                        Edit more
                      </button>
                    </div>
                  )}
                </div>
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