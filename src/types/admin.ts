export type AdminRole = 'super_admin' | 'product_manager' | 'support_agent' | 'order_manager';

export interface AdminPermissions {
  manageProducts: boolean;
  manageOrders: boolean;
  manageUsers: boolean;
  manageAdmins: boolean;
  handleLiveChat: boolean;
  viewReports: boolean;
  viewContactForms: boolean;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  permissions: AdminPermissions;
  createdAt: Date;
  lastLogin: Date;
  status: 'active' | 'inactive';
}

export interface ChatMessage {
  id: string;
  userId: string;
  adminId?: string;
  message: string;
  timestamp: Date;
  isAdminMessage: boolean;
  status: 'sent' | 'delivered' | 'read';
}

export interface ChatSession {
  id: string;
  userId: string;
  adminId?: string;
  status: 'active' | 'closed';
  startedAt: Date;
  endedAt?: Date;
  messages: ChatMessage[];
}