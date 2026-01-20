'use client';

import { useState, useEffect } from 'react';
import { fetchContactMessages, ContactMessage, markMessageAsReplied } from '@/lib/api';

export default function AdminContactsPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );
  const [replyEmail, setReplyEmail] = useState('');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchContactMessages();
      setMessages(data);
    } catch (err) {
      const error = err as Error;
      console.log('Contact messages API not yet available:', error.message);
      // Don't show error for 404 - backend not ready yet
      if (error.message.includes('404')) {
        setMessages([]);
      } else {
        setError(error.message || 'Failed to load messages');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReply = (message: ContactMessage) => {
    setSelectedMessage(message);
    setReplyEmail(message.email);
  };

  const sendReply = () => {
    // Open default email client with pre-filled data
    const subject = encodeURIComponent('Re: Your message to IUT Test Prep');
    const body = encodeURIComponent(
      `Hello ${selectedMessage?.name},\n\n\n\n---\nOriginal message:\n${selectedMessage?.message}`
    );
    window.location.href = `mailto:${replyEmail}?subject=${subject}&body=${body}`;
    setSelectedMessage(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004B49] mx-auto mb-4"></div>
          <p className="text-black">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-semibold mb-2">Error</p>
        <p className="text-black">{error}</p>
        <button
          onClick={loadMessages}
          className="mt-4 px-6 py-2 bg-[#004B49] text-white rounded-lg hover:bg-[#003333]"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
      </div>

      {messages.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No messages yet
          </h3>
          <p className="text-gray-600">
            Contact messages from users will appear here
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-black">
                      {message.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-black">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-black max-w-xs truncate">
                      {message.message}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {message.replied ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          Replied
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleReply(message)}
                        className="px-3 py-1 bg-[#004B49] text-white rounded-lg hover:bg-[#003333] text-xs"
                      >
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reply to Message
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">
                  From:
                </label>
                <p className="text-black">{selectedMessage.name}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">
                  Email:
                </label>
                <p className="text-black">{selectedMessage.email}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">
                  Original Message:
                </label>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-black whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">
                  Date:
                </label>
                <p className="text-gray-600">
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={sendReply}
                  className="flex-1 px-6 py-3 bg-[#004B49] text-white rounded-lg hover:bg-[#003333] font-semibold"
                >
                  Open Email Client to Reply
                </button>
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-black rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
