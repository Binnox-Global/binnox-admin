"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'Completed', value: 70, color: '#00C814' },
  { name: 'Inprogress', value: 20, color: '#FFD569' },
  { name: 'Canceled', value: 10, color: '#FF0000' }
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[14px] font-medium"
    >
      {`${value}%`}
    </text>
  );
};

export const OrderStatusCard = () => {
  return (
    <div className="w-full bg-white rounded-[15.05px] shadow-[0px_2.01px_10.03px_0px_#0000001A] p-4 sm:p-6">
      <h2 className="font-raleway font-semibold text-[18.43px] leading-[21.63px]">
        Order Status
      </h2>
      <h3 className="font-raleway font-semibold text-[12.04px] leading-[14.13px] text-[#667085] mt-1">
        Total order fulfilment rate
      </h3>

      <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 sm:mt-8">
        <div className="relative w-full lg:w-[70%] aspect-square max-w-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                dataKey="value"
                startAngle={90}
                endAngle={450}
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-bold">40</div>
            <div className="text-sm">Orders</div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col justify-center gap-4 lg:w-[30%]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};