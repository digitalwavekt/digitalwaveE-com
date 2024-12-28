import React from 'react';
import { AlertCircle } from 'lucide-react';

export function AlertsList() {
  const alerts = [
    {
      id: '1',
      type: 'stock',
      message: 'Gaming Laptop Pro X1 is low in stock (2 remaining)',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'order',
      message: '5 orders pending shipment for more than 24 hours',
      timestamp: new Date(),
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Alerts
        </h2>
      </div>
      <div className="p-4 space-y-4">
        {alerts.map(alert => (
          <div key={alert.id} className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="font-medium">{alert.message}</p>
              <p className="text-sm text-gray-600">
                {alert.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}