"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 500 },
  { month: 'Mar', value: 600 },
  { month: 'Apr', value: 500 },
  { month: 'May', value: 108 },
  { month: 'Jun', value: 400 },
  { month: 'Jul', value: 550 },
  { month: 'Aug', value: 500 },
  { month: 'Sep', value: 300 },
  { month: 'Oct', value: 200 },
  { month: 'Nov', value: 450 },
  { month: 'Dec', value: 400 },
];

export const SalesReport = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6B7280', fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Bar 
            dataKey="value" 
            fill="#F46702"
            radius={[4, 4, 0, 0]}
            background={{ fill: '#F4F4F4' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}; 