'use client';

import { useState, useEffect } from 'react';
import {
  fetchQuestionBanks,
  uploadQuestionBankCSV,
  QuestionBank,
} from '@/lib/api';

export default function AdminQuestionsPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'list'>('upload');
  const [questionBanks, setQuestionBanks] = useState<QuestionBank[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    if (activeTab === 'list') {
      loadQuestionBanks();
    }
  }, [activeTab]);

  // Refresh list when upload is successful
  useEffect(() => {
    if (success && activeTab === 'list') {
      loadQuestionBanks();
    }
  }, [success, activeTab]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
        setError('Please select a valid CSV file');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setError('');
      setSuccess('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a CSV file first');
      return;
    }

    try {
      setUploadLoading(true);
      setError('');
      setSuccess('');

      const result = await uploadQuestionBankCSV(selectedFile);
      
      setSuccess(
        `Successfully uploaded ${selectedFile.name}. ${result.questionsCount || 0} questions have been imported.`
      );
      setSelectedFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('csv-file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      // Switch to list tab and refresh to show the new question bank
      setActiveTab('list');
      setTimeout(() => {
        loadQuestionBanks();
      }, 500);
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Failed to upload CSV file');
    } finally {
      setUploadLoading(false);
    }
  };

  const getSubjectBadge = (subject: string) => {
    const subjectMap: { [key: string]: { label: string; color: string } } = {
      phy: { label: 'Physics', color: 'bg-blue-100 text-blue-700' },
      chem: { label: 'Chemistry', color: 'bg-green-100 text-green-700' },
      math: { label: 'Math', color: 'bg-purple-100 text-purple-700' },
      eng: { label: 'English', color: 'bg-orange-100 text-orange-700' },
    };
    
    const config = subjectMap[subject] || { label: subject, color: 'bg-gray-100 text-gray-700' };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const filteredBanks = questionBanks.filter((bank) => {
    if (filterType === 'all') return true;
    return bank.type === filterType;
  });

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
      {activeTab === 'upload' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Upload Question Bank CSV
          </h3>

          <div className="mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">
                CSV Format Instructions
              </h4>
              <p className="text-sm text-blue-800 mb-2">
                Your CSV file must include the following columns:
              </p>
              <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">subject</span> - phy, chem, math, or eng
                </li>
                <li>
                  <span className="font-semibold">stem</span> - The question text
                </li>
                <li>
                  <span className="font-semibold">optionA, optionB, optionC, optionD</span> - Answer options
                </li>
                <li>
                  <span className="font-semibold">correctAnswer</span> - The correct option text
                </li>
                <li>
                  <span className="font-semibold">difficulty</span> - easy, medium, or hard
                </li>
                <li>
                  <span className="font-semibold">year</span> - Year (e.g., 2022)
                </li>
                <li>
                  <span className="font-semibold">source</span> - prev_year or practice
                </li>
                <li>
                  <span className="font-semibold">bankTitle</span> - Name of the question bank (e.g., "IUT Admission 2022")
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <label
                htmlFor="csv-file"
                className="cursor-pointer inline-block px-6 py-3 bg-[#004B49] text-white rounded-lg hover:bg-[#003333] font-semibold"
              >
                Select CSV File
              </label>
              <input
                id="csv-file"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="mt-2 text-sm text-gray-600">
                Only CSV files are accepted
              </p>
            </div>

            {selectedFile && (
              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-green-900">
                      Selected File:
                    </p>
                    <p className="text-sm text-green-800">{selectedFile.name}</p>
                    <p className="text-xs text-green-700">
                      Size: {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      const fileInput = document.getElementById('csv-file') as HTMLInputElement;
                      if (fileInput) fileInput.value = '';
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-600 font-semibold">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <p className="text-green-600 font-semibold">{success}</p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!selectedFile || uploadLoading}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              !selectedFile || uploadLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#004B49] text-white hover:bg-[#003333]'
            }`}
          >
            {uploadLoading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Uploading...
              </span>
            ) : (
              'Upload Question Bank'
            )}
          </button>
        </div>
      )}

      {/* List Tab */}
      {activeTab === 'list' && (
        <div>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-black">
                Filter by Type:
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#004B49] focus:outline-none text-black"
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
                <div
                  key={bank._id}
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#004B49] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {bank.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                        bank.type === 'prev_year'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {bank.type === 'prev_year' ? 'Previous Year' : 'Practice'}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Questions:</span>
                      <span className="font-semibold text-black">
                        {bank.totalQuestions}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-black">
                        {bank.duration} min
                      </span>
                    </div>
                    {bank.year && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Year:</span>
                        <span className="font-semibold text-black">
                          {bank.year}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Created:</span>
                      <span className="text-gray-600 text-xs">
                        {new Date(bank.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {bank.subjects.map((subject) => (
                      <div key={subject}>{getSubjectBadge(subject)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
