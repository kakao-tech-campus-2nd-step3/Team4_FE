const API_URL = '/api';

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  body?: any;
  headers?: HeadersInit;
  isFormData?: boolean;
}

export const fetchAPI = async ({
  method,
  endpoint,
  body,
  headers = {},
  isFormData = false,
}: FetchOptions) => {
  const token = localStorage.getItem('accessToken');

  const defaultHeaders: HeadersInit = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(!isFormData && { 'Content-Type': 'application/json' }),
    ...headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: defaultHeaders,
    body: body && !isFormData ? JSON.stringify(body) : body,
  });

  if (!response.ok) {
    throw new Error('API 요청 실패');
  }

  return response.json();
};
