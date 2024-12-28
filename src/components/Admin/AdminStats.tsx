import React from 'react';

interface AdminStatsProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

export function AdminStats({ title, value, change, icon }: AdminStatsProps) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          {icon}
        </div>
        <span className={`text-sm font-medium ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}