"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from '@/lib/formatters';

interface ProfileData {
  month: string;
  growth: number;
}

const defaultData: ProfileData[] = [
  { month: 'Jan', growth: 3200 },
  { month: 'Feb', growth: 2200 },
  { month: 'Mar', growth: 1200 },
  { month: 'Apr', growth: 2900 },
  { month: 'May', growth: 5000 },
  { month: 'Jun', growth: 4200 },
  { month: 'Jul', growth: 5000 },
  { month: 'Aug', growth: 2900 },
  { month: 'Sep', growth: 1500 },
];

interface ProfileGrowthChartProps {
  data?: ProfileData[];
}

export const ProfileGrowthChart = ({ data = defaultData }: ProfileGrowthChartProps) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white">Growth : {formatNumber(data.growth)}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white rounded-[30.604px] p-6 shadow-[0px_1.913px_15.302px_0px_rgba(110,110,110,0.10)]">
      <div className="relative">
        <div className="flex flex-col gap-1 mb-4">
          <h2 className="font-raleway text-[20px] font-bold leading-[27.543px] tracking-[0.2px] text-[#1D1F2C]">
            Profile Growth
          </h2>
          <span className="font-raleway text-[12.853px] font-normal leading-[18.362px] tracking-[0.064px] text-[#777980]">
            Overall information
          </span>
        </div>

        <div className="h-[300px] w-full bg-gradient-to-br from-[#1D1F2C] to-[#2D2F3B] rounded-[20px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#ffffff', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#ffffff', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="growth"
                fill="#ffffff"
                radius={[20, 20, 20, 20]}
                maxBarSize={14}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};