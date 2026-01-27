import { useState } from 'react';
import { QuestionBank } from '@/lib/api';
import QuestionBankCard from './QuestionBankCard';

interface QuestionBanksListProps {
  questionBanks: QuestionBank[];
  loading: boolean;
  error: string;
}

export default function QuestionBanksList({ questionBanks, loading, error }: QuestionBanksListProps) {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredBanks = questionBanks.filter((bank) => {
    if (filterType === 'all') return true;
    return bank.type === filterType;
  });

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-2 border-[#004B49]">
        <div className="flex items-center gap-4">
          <label className="text-sm font-semibold text-black">
            Filter by Type:
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border-2 border-[#004B49] rounded-lg focus:border-[#003333] focus:outline-none text-black"
          >
            <option value="all">All Types</option>
            <option value="prev_year">Previous Year</option>
            <option value="practice">Practice</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004B49] mx-auto mb-4"></div>
            <p className="text-black">Loading question banks...</p>
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-600 font-semibold mb-2">Error</p>
          <p className="text-black">{error}</p>
        </div>
      ) : filteredBanks.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No question banks found
          </h3>
          <p className="text-gray-600">
            Upload a CSV file to create your first question bank
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBanks.map((bank) => (
            <QuestionBankCard key={bank._id} bank={bank} />
          ))}
        </div>
      )}
    </div>
  );
}
