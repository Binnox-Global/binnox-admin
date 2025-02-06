"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';
import { convertToNaira } from '@/lib/currency';
import { formatNumber } from '@/lib/formatters';

interface WeeklyData {
  day: string;
  thisWeek: number;
  lastWeek: number;
}

const defaultData: WeeklyData[] = [
  { day: '17 Sun', thisWeek: 800000, lastWeek: 500000 },
  { day: '18 Mon', thisWeek: 300000, lastWeek: 200000 },
  { day: '19 Tue', thisWeek: 100000, lastWeek: 500000 },
  { day: '20 Wed', thisWeek: 600000, lastWeek: 500000 },
  { day: '21 Thu', thisWeek: 600000, lastWeek: 300000 },
  { day: '22 Fri', thisWeek: 800000, lastWeek: 100000 },
  { day: '23 Sat', thisWeek: 500000, lastWeek: 300000 },
];

interface WeeklyRevenueChartProps {
  data?: WeeklyData[];
}

export const WeeklyRevenueChart = ({ data = defaultData }: WeeklyRevenueChartProps) => {
  const { currency } = useCurrency();

  const formatYAxis = (value: number) => {
    const amount = currency === 'NGN' ? convertToNaira(value) : value;
    if (amount >= 1000000) {
      return `${amount / 1000000}m`;
    }
    if (amount >= 1000) {
      return `${amount / 1000}k`;
    }
    return amount;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          {payload.map((entry: any, index: number) => {
            const amount = currency === 'NGN' ? convertToNaira(entry.value) : entry.value;
            return (
              <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.fill }} />
                <span className="text-white">
                  {entry.name === 'thisWeek' ? 'This week' : 'Last week'} : {currency === 'NGN' ? '₦' : '$'}{formatNumber(amount)}
                </span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => {
    return (
      <div className="flex gap-6 absolute top-0 right-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F46702]" />
          <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
            This week
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
          <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
            Last week
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white rounded-[30.604px] p-6 shadow-[0px_1.913px_15.302px_0px_rgba(110,110,110,0.10)]">
      <div className="relative">
        <div className="flex flex-col gap-1 mb-4 ml-3">
          <div className="flex items-center gap-2">
            <h2 className="font-raleway text-[20px] font-bold leading-[27.543px] tracking-[0.2px] text-[#1D1F2C]">
              Weekly Revenue
            </h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#1D1F2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <CustomLegend />
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 5 }} barGap={0}>
              <CartesianGrid 
                horizontal={true}
                vertical={false}
                strokeDasharray="3 3"
                stroke="#E4E7EC"
              />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#667085', fontSize: 11 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#667085' }}
                tickFormatter={formatYAxis}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="lastWeek"
                fill="#E4E7EC"
                radius={[4, 4, 0, 0]}
                maxBarSize={14}
              />
              <Bar 
                dataKey="thisWeek"
                fill="#F46702"
                radius={[4, 4, 0, 0]}
                maxBarSize={14}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};