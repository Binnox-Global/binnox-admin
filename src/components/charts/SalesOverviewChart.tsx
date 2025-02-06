"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';
import { convertToNaira } from '@/lib/currency';
import { formatNumber } from '@/lib/formatters';

interface SalesData {
  month: string;
  sales: number;
}

const defaultData: SalesData[] = [
  { month: 'Jan', sales: 220 },
  { month: 'Feb', sales: 420 },
  { month: 'Mar', sales: 650 },
  { month: 'Apr', sales: 420 },
  { month: 'May', sales: 70 },
  { month: 'Jun', sales: 350 },
  { month: 'Jul', sales: 220 },
  { month: 'Aug', sales: 650 },
  { month: 'Sep', sales: 420 },
  { month: 'Oct', sales: 70 },
  { month: 'Nov', sales: 350 },
  { month: 'Dec', sales: 220 },
];

interface SalesOverviewChartProps {
  data?: SalesData[];
}

export const SalesOverviewChart = ({ data = defaultData }: SalesOverviewChartProps) => {
  const { currency } = useCurrency();
  const currentMonth = new Date().toLocaleString('default', { month: 'short' });

  const formatYAxis = (value: number) => {
    const amount = currency === 'NGN' ? convertToNaira(value) : value;
    return `${currency === 'NGN' ? '₦' : '$'}${formatNumber(amount)}`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const amount = currency === 'NGN' ? convertToNaira(data.sales) : data.sales;
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F46702]" />
            <span className="text-white">Sales : {currency === 'NGN' ? '₦' : '$'}{formatNumber(amount)}</span>
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
            Sales overview
          </h2>
          <div className="flex items-center">
            <span className="font-raleway text-[12.853px] font-normal leading-[18.362px] tracking-[0.064px] text-[#40C057]">
              (+5) more <span className="text-[#777980]">in 2029</span>
            </span>
          </div>
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
                dataKey="sales"
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