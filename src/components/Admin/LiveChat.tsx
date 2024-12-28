import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import type { ChatSession } from '../../types/admin';

export function LiveChat() {
  const [activeSessions, setActiveSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Live Support
        </h2>
      </div>

      <div className="h-[400px] flex">
        {/* Sessions List */}
        <div className="w-1/3 border-r overflow-y-auto">
          {activeSessions.map(session => (
            <button
              key={session.id}
              onClick={() => setSelectedSession(session)}
              className={`w-full p-4 text-left hover:bg-gray-50 ${
                selectedSession?.id === session.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="font-medium">User #{session.userId}</div>
              <div className="text-sm text-gray-600">
                {new Date(session.startedAt).toLocaleTimeString()}
              </div>
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedSession ? (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedSession.messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isAdminMessage ? 'justify-end' : ''}`}
                  >
                    <div className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isAdminMessage 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100'
                    }`}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}