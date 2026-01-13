import { fetchAPI } from './client';
import { TestHistoryResponse, TestHistoryDetail } from './types';

/**
 * Fetch test history for analytics
 * @param page - Page number (default: 1)
 * @param limit - Items per page (default: 10)
 */
export async function fetchTestHistory(
  page: number = 1,
  limit: number = 10
): Promise<TestHistoryResponse> {
  return fetchAPI<TestHistoryResponse>(
    `/api/tests/history?page=${page}&limit=${limit}`,
    { method: 'GET' }
  );
}

/**
 * Fetch detailed test results
 * @param testSessionId - ID of the test session
 */
export async function fetchTestDetail(testSessionId: string): Promise<TestHistoryDetail> {
  return fetchAPI<TestHistoryDetail>(`/api/tests/history/${testSessionId}`, {
    method: 'GET',
  });
}
