import mongoose from 'mongoose';
import { AdminRole, AdminPermissions } from '../../types/admin';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['super_admin', 'product_manager', 'support_agent', 'order_manager'],
    required: true 
  },
  permissions: {
    manageProducts: { type: Boolean, default: false },
    manageOrders: { type: Boolean, default: false },
    manageUsers: { type: Boolean, default: false },
    manageAdmins: { type: Boolean, default: false },
    handleLiveChat: { type: Boolean, default: false },
    viewReports: { type: Boolean, default: false },
    viewContactForms: { type: Boolean, default: false }
  },
  status: { 
    type: String, 
    enum: ['active', 'inactive'],
    default: 'active'
  },
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

export const Admin = mongoose.model('Admin', adminSchema);