// 

import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const BalanceSheet = ({ lang }) => {
  const data = [
    { name: 'الأصول المتداولة', value: 4000 },
    { name: 'الأصول الثابتة', value: 3000 },
    { name: 'الأصول غير الملموسة', value: 2000 },
    { name: 'الخصوم المتداولة', value: 1000 },
    { name: 'الخصوم طويلة الأجل', value: 1500 },
    { name: 'حقوق المساهمين', value: 2500 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#FF4500'];


  return (
    <div className="bg-white p-4 shadow rounded min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {lang === 'ar' ? 'الميزانية العمومية' : 'Balance Sheet'}
      </h2>

        {/* إضافة المخطط البياني */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">الأصول والخصوم</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default BalanceSheet;
