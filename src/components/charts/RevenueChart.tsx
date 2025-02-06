"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { convertToNaira } from '@/lib/currency';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatNumber } from '@/lib/formatters';

interface ChartData {
  month: string;
  revenue: number;
  profit: number;
  profitPercentage: number;
}

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#E4EAF0" rx={4} ry={4} />
      <rect 
        x={x} 
        y={y + height - (height * (payload.profit / payload.revenue))} 
        width={width} 
        height={height * (payload.profit / payload.revenue)} 
        fill="#F46702" 
        rx={4}
        ry={4}
      />
    </g>
  );
};

interface RevenueChartProps {
  data?: ChartData[];
}

const defaultData: ChartData[] = [
  { month: 'Jan', revenue: 800, profit: 400, profitPercentage: 30 },
  { month: 'Feb', revenue: 600, profit: 300, profitPercentage: 35 },
  { month: 'Mar', revenue: 900, profit: 450, profitPercentage: 40 },
  { month: 'Apr', revenue: 700, profit: 350, profitPercentage: 25 },
  { month: 'May', revenue: 1200, profit: 600, profitPercentage: 45 },
  { month: 'Jun', revenue: 500, profit: 250, profitPercentage: 20 },
  { month: 'Jul', revenue: 400, profit: 200, profitPercentage: 15 },
  { month: 'Aug', revenue: 800, profit: 400, profitPercentage: 30 },
  { month: 'Sep', revenue: 1000, profit: 500, profitPercentage: 35 },
  { month: 'Oct', revenue: 900, profit: 450, profitPercentage: 40 },
  { month: 'Nov', revenue: 700, profit: 350, profitPercentage: 25 },
  { month: 'Dec', revenue: 1100, profit: 550, profitPercentage: 42 },
];

export const RevenueChart = ({ data = defaultData }: RevenueChartProps) => {
  const { currency } = useCurrency();
  const currentMonth = new Date().toLocaleString('default', { month: 'short' });

  const formatYAxis = (value: number) => {
    const amount = currency === 'NGN' ? convertToNaira(value) : value;
    return `${currency === 'NGN' ? '₦' : '$'}${formatNumber(amount)}`;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const amount = currency === 'NGN' ? convertToNaira(data.revenue) : data.revenue;
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#E4EAF0]" />
            <span className="text-white">Revenue : {currency === 'NGN' ? '₦' : '$'}{formatNumber(amount)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F46702]" />
            <span className="text-white">Profit : {data.profitPercentage}%</span>
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
              Statistic
            </h2>
            <div className="flex items-center justify-between">
              <span className="font-raleway text-[12.853px] font-normal leading-[18.362px] tracking-[0.064px] text-[#777980]">
                Revenue and Profit
              </span>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E4EAF0]" />
                  <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
                    Revenue
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F46702]" />
                  <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
                    Profit
                  </span>
                </div>
              </div>
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
                <Legend wrapperStyle={{ display: 'none' }} />
                <Bar 
                  dataKey="revenue"
                  shape={<CustomBar />}
                  maxBarSize={14}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };