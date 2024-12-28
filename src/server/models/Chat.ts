import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isAdminMessage: { type: Boolean, default: false },
  status: { 
    type: String,
    enum: ['sent', 'delivered', 'read'],
    default: 'sent'
  }
});

const chatSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  status: { 
    type: String,
    enum: ['active', 'closed'],
    default: 'active'
  },
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
  messages: [messageSchema]
});

export const ChatSession = mongoose.model('ChatSession', chatSessionSchema);