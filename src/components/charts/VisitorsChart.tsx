"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatNumber } from '@/lib/formatters';

interface VisitorData {
  month: string;
  new: number;
  recurring: number;
}

const defaultData: VisitorData[] = [
  { month: 'Jan', new: 1000, recurring: 220 },
  { month: 'Feb', new: 1000, recurring: 420 },
  { month: 'Mar', new: 1000, recurring: 650 },
  { month: 'Apr', new: 1000, recurring: 420 },
  { month: 'May', new: 1000, recurring: 70 },
  { month: 'Jun', new: 1000, recurring: 350 },
  { month: 'Jul', new: 1000, recurring: 220 },
  { month: 'Aug', new: 1000, recurring: 650 },
  { month: 'Sep', new: 1000, recurring: 420 },
  { month: 'Oct', new: 1000, recurring: 70 },
  { month: 'Nov', new: 1000, recurring: 350 },
  { month: 'Dec', new: 1000, recurring: 220 },
];

interface VisitorsChartProps {
  data?: VisitorData[];
}

export const VisitorsChart = ({ data = defaultData }: VisitorsChartProps) => {
  const currentMonth = new Date().toLocaleString('default', { month: 'short' });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black text-white px-6 py-4 text-[15px] rounded-[10px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
            <span className="text-white">New : {formatNumber(data.new)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F46702]" />
            <span className="text-white">Recurring : {formatNumber(data.recurring)}</span>
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

  const CustomBar = (props: any) => {
    const { x, y, width, height, payload } = props;
    
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill="#E4E7EC" rx={4} ry={4} />
        <rect 
          x={x} 
          y={y + height - (height * (payload.recurring / payload.new))} 
          width={width} 
          height={height * (payload.recurring / payload.new)} 
          fill="#F46702" 
          rx={4}
          ry={4}
        />
      </g>
    );
  };

  return (
    <div className="w-full bg-white rounded-[30.604px] p-6 shadow-[0px_1.913px_15.302px_0px_rgba(110,110,110,0.10)]">
      <div className="relative">
        <div className="flex flex-col gap-1 mb-4 ml-3">
          <h2 className="font-raleway text-[20px] font-bold leading-[27.543px] tracking-[0.2px] text-[#1D1F2C]">
            Users Visitors Performance
          </h2>
          <div className="flex items-center justify-between">
            <span className="font-raleway text-[12.853px] font-normal leading-[18.362px] tracking-[0.064px] text-[#40C057]">
              (+5) more <span className="text-[#777980]">in 2023</span>
            </span>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#E4E7EC]" />
                <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
                  New
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F46702]" />
                <span className="font-raleway text-[11.017px] font-medium leading-[16.526px] tracking-[0.055px] text-[#667085]">
                  Recurring
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
                tickFormatter={formatNumber}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ display: 'none' }} />
              <Bar 
                dataKey="new"
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