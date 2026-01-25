import { fetchAPI } from './client';
import { QuestionBank } from './types';

/**
 * Fetch question banks for grid display
 * @param type - 'prev_year' or 'practice' (optional, fetches all if not specified)
 * @param subject - Optional subject filter for practice tests
 */
export async function fetchQuestionBanks(
  type?: 'prev_year' | 'practice',
  subject?: string
): Promise<QuestionBank[]> {
  const params = new URLSearchParams();
  if (type) params.append('type', type);
  if (subject && type === 'practice') params.append('subject', subject);

  const queryString = params.toString();
  const endpoint = queryString ? `/api/question-banks?${queryString}` : '/api/question-banks';

  return fetchAPI<QuestionBank[]>(endpoint, { method: 'GET' });
}
