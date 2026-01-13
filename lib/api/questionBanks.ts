import { fetchAPI } from './client';
import { QuestionBank } from './types';

/**
 * Fetch question banks for grid display
 * @param type - 'prev_year' or 'practice'
 * @param subject - Optional subject filter for practice tests
 */
export async function fetchQuestionBanks(
  type: 'prev_year' | 'practice',
  subject?: string
): Promise<QuestionBank[]> {
  let endpoint = `/api/question-banks?type=${type}`;
  if (subject && type === 'practice') {
    endpoint += `&subject=${subject}`;
  }

  return fetchAPI<QuestionBank[]>(endpoint, { method: 'GET' });
}
