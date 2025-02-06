"use client";

import { useCurrency } from "@/contexts/CurrencyContext";
import { convertToNaira, formatCurrency } from "@/lib/currency";
// Remove this import

import { OptionsSvg } from "@/components/icons/OptionsSvg";
import { TableFilter2Svg } from "@/components/icons/TableFilter2Svg";
import { TableSearchSvg } from "@/components/icons/TableSearchSvg";

interface Order {
  id: string;
  name: string;
  avatar: string;
  status: 'completed' | 'canceled' | 'ongoing';
  business: string;
  orderId: string;
  price: number;
}

const defaultOrders: Order[] = [
  {
    id: '1',
    name: 'Chima',
    avatar: '/avatars/chima.jpg',
    status: 'completed',
    business: 'Fastfood',
    orderId: '9856',
    price: 12367,
  },
  {
    id: '2',
    name: 'Chima',
    avatar: '/avatars/chima.jpg',
    status: 'completed',
    business: 'Fastfood',
    orderId: '9856',
    price: 12367,
  },
  {
    id: '3',
    name: 'Chima',
    avatar: '/avatars/chima.jpg',
    status: 'canceled',
    business: 'Second Pot',
    orderId: '9856',
    price: 12367,
  },
  {
    id: '4',
    name: 'Chima',
    avatar: '/avatars/chima.jpg',
    status: 'ongoing',
    business: 'Second Pot',
    orderId: '9856',
    price: 12367,
  },
];

const statusColors = {
  completed: 'bg-[#ECFDF3] text-[#027A48]',
  canceled: 'bg-[#FEF3F2] text-[#B42318]',
  ongoing: 'bg-[#FFFAEB] text-[#B54708]',
};

export const RecentOrders = () => {
  const { currency } = useCurrency();

  return (
    <div>
      <div className="flex flex-col mb-6">
        <h2 className="text-[32px] font-bold text-black mb-1">
          Recent Order
        </h2>
        <p className="text-[#98A2B3]">
          Monitor sales, reviews, etc.
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-1 max-w-[400px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D0D5DD] bg-white"
          />
          <TableSearchSvg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]" />
        </div>
        <button className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#D0D5DD] bg-white">
          <TableFilter2Svg className="text-[#667085]" />
          <span className="text-[#344054]">Filter</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#EAECF0]">
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">Name</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">Status</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">Business</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">Order ID</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">Price</th>
              <th className="py-4 px-6 text-left text-sm font-medium text-[#667085]">More</th>
            </tr>
          </thead>
          <tbody>
            {defaultOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#EAECF0]">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <img src={order.avatar} alt={order.name} className="w-10 h-10 rounded-full" />
                    <span className="text-sm font-medium text-[#101828]">{order.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-[#101828]">{order.business}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-[#101828]">{order.orderId}</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-[#101828]">
                    {formatCurrency(currency === 'NGN' ? convertToNaira(order.price) : order.price, currency)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="p-2 hover:bg-gray-50 rounded-lg">
                    <OptionsSvg className="text-[#667085]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-[#F97316]">Previous page</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full text-sm ${
                page === 1 ? 'bg-[#F97316] text-white' : 'text-[#F97316] hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <span className="text-sm text-[#F97316]">Next page</span>
      </div>
    </div>
  );
};