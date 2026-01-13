// API configuration and base URL
export const BASE_URL = 'https://iut-admission-mocktest-server.onrender.com';

// Helper function to make authenticated API calls
export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  console.log(`🔵 API Request: ${options.method || 'GET'} ${url}`);
  console.log('📤 All Cookies:', document.cookie);
  console.log('📤 Has auth cookie?', document.cookie.includes('token') || document.cookie.includes('session') || document.cookie.includes('auth'));
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // Always include cookies for authentication
  });

  console.log(`📥 Response Status: ${response.status}`);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    
    // Special handling for 401 Unauthorized
    if (response.status === 401) {
      console.error('🔴 Authentication failed - No valid session cookie');
      throw new Error('Please sign in to access this feature');
    }
    
    throw new Error(error.message || `Request failed with status ${response.status}`);
  }

  return response.json();
}
