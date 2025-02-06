"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from '@/lib/formatters';

interface CustomerData {
  month: string;
  customers: number;
}

const defaultData: CustomerData[] = [
  { month: 'JAN', customers: 100000 },
  { month: 'FEB', customers: 140000 },
  { month: 'MAR', customers: 140000 },
  { month: 'APR', customers: 240000 },
  { month: 'MAY', customers: 270000 },
  { month: 'JUN', customers: 200000 },
  { month: 'JUL', customers: 240000 },
  { month: 'AUG', customers: 100000 },
  { month: 'SEP', customers: 270000 },
  { month: 'OCT', customers: 340000 },
  { month: 'NOV', customers: 380000 },
  { month: 'DEC', customers: 400000 },
];

interface CustomerAcquisitionChartProps {
  data?: CustomerData[];
}

export const CustomerAcquisitionChart = ({ data = defaultData }: CustomerAcquisitionChartProps) => {
  const currentMonth = new Date().toLocaleString('default', { month: 'short' }).toUpperCase();

  const formatYAxis = (value: number) => {
    return `${Math.floor(value / 1000)}k`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F46702]" />
            <span className="text-white">Customers : {formatNumber(data.customers)}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const isCurrentMonth = payload.value === currentMonth;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill={isCurrentMonth ? '#F46702' : '#667085'}
          fontSize="11.017px"
          fontFamily="Raleway"
          fontWeight={400}
          letterSpacing="0.055px"
          style={{ lineHeight: '16.526px' }}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full bg-white rounded-[30.604px] p-6 shadow-[0px_1.913px_15.302px_0px_rgba(110,110,110,0.10)]">
      <div className="relative">
        <div className="flex flex-col gap-1 mb-4 ml-3">
          <h2 className="font-raleway text-[20px] font-bold leading-[27.543px] tracking-[0.2px] text-[#1D1F2C]">
            Overall Customer Acquisition
          </h2>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 5 }}>
              <CartesianGrid 
                horizontal={true}
                vertical={false}
                strokeDasharray="3 3"
                stroke="#E4E7EC"
              />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={<CustomXAxisTick />}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#667085' }}
                tickFormatter={formatYAxis}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="customers"
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