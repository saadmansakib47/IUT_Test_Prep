import { fetchAPI } from './client';
import { TestSession, TestSubmitResponse } from './types';

/**
 * Start a new test session
 * @param questionBankId - ID of the question bank to start
 */
export async function startTest(questionBankId: string): Promise<TestSession> {
  return fetchAPI<TestSession>('/api/tests/start', {
    method: 'POST',
    body: JSON.stringify({ questionBankId }),
  });
}

/**
 * Resume an ongoing test session
 * @param testSessionId - ID of the test session
 */
export async function getTestSession(testSessionId: string): Promise<TestSession> {
  return fetchAPI<TestSession>(`/api/tests/${testSessionId}`, {
    method: 'GET',
  });
}

/**
 * Save or update answer for a question
 * @param testSessionId - ID of the test session
 * @param questionId - ID of the question
 * @param selectedAnswer - The selected answer
 */
export async function saveAnswer(
  testSessionId: string,
  questionId: string,
  selectedAnswer: string
): Promise<{ message: string }> {
  return fetchAPI<{ message: string }>(`/api/tests/${testSessionId}/answer`, {
    method: 'PATCH',
    body: JSON.stringify({ questionId, selectedAnswer }),
  });
}

/**
 * Submit test and get results
 * @param testSessionId - ID of the test session
 */
export async function submitTest(testSessionId: string): Promise<TestSubmitResponse> {
  return fetchAPI<TestSubmitResponse>(`/api/tests/${testSessionId}/submit`, {
    method: 'POST',
  });
}
