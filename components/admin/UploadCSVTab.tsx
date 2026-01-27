import { useState } from 'react';
import { uploadQuestionBankCSV } from '@/lib/api';

interface UploadCSVTabProps {
  onUploadSuccess: () => void;
  onSwitchToList: () => void;
}

export default function UploadCSVTab({ onUploadSuccess, onSwitchToList }: UploadCSVTabProps) {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
      
      // Switch to list tab and refresh
      setTimeout(() => {
        onSwitchToList();
        onUploadSuccess();
      }, 500);
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'Failed to upload CSV file');
    } finally {
      setUploadLoading(false);
    }
  };

  return (
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

        <div className="bg-gray-50 border-2 border-dashed border-[#004B49] rounded-lg p-8 text-center">
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
  );
}
