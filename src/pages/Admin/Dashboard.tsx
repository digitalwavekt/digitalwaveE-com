import React from 'react';
import { BarChart3, Users, Package, MessageSquare, AlertCircle } from 'lucide-react';
import { AdminStats } from '../../components/Admin/AdminStats';
import { RecentOrders } from '../../components/Admin/RecentOrders';
import { LiveChat } from '../../components/Admin/LiveChat';
import { AlertsList } from '../../components/Admin/AlertsList';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminStats
          title="Total Orders"
          value="1,234"
          change="+12%"
          icon={<Package className="h-6 w-6" />}
        />
        <AdminStats
          title="Active Users"
          value="892"
          change="+5%"
          icon={<Users className="h-6 w-6" />}
        />
        <AdminStats
          title="Revenue"
          value="₹89,234"
          change="+18%"
          icon={<BarChart3 className="h-6 w-6" />}
        />
        <AdminStats
          title="Support Tickets"
          value="23"
          change="-8%"
          icon={<MessageSquare className="h-6 w-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <div className="space-y-6">
          <LiveChat />
          <AlertsList />
        </div>
      </div>
    </div>
  );
}