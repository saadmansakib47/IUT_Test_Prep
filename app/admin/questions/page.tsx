'use client';

import { useState, useEffect } from 'react';
import { fetchQuestionBanks, QuestionBank } from '@/lib/api';
import UploadCSVTab from '@/components/admin/UploadCSVTab';
import QuestionBanksList from '@/components/admin/QuestionBanksList';

export default function AdminQuestionsPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'list'>('upload');
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (activeTab === 'list') {
      loadQuestionBanks();
    }
  }, [activeTab]);

  const loadQuestionBanks = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchQuestionBanks(); // Fetch all question banks (prev_year and practice)
      setQuestionBanks(data);
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Failed to load question banks');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Question Banks Management
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('upload')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'upload'
              ? 'bg-[#004B49] text-white'
              : 'bg-white text-black border-2 border-gray-300 hover:border-[#004B49]'
          }`}
        >
          Upload CSV
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'list'
              ? 'bg-[#004B49] text-white'
              : 'bg-white text-black border-2 border-gray-300 hover:border-[#004B49]'
          }`}
        >
          View Question Banks
        </button>
      </div>

      {/* Upload Tab */}
      {/* Upload Tab */}
      {activeTab === 'upload' && (
        <UploadCSVTab 
          onUploadSuccess={loadQuestionBanks}
          onSwitchToList={() => setActiveTab('list')}
        />
      )}

      {/* List Tab */}
      {activeTab === 'list' && (
        <QuestionBanksList 
          questionBanks={questionBanks}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}