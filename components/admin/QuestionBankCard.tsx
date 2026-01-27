import { QuestionBank } from '@/lib/api';

interface QuestionBankCardProps {
  bank: QuestionBank;
}

export default function QuestionBankCard({ bank }: QuestionBankCardProps) {
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-[#004B49] transition-colors">
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
  );
}
