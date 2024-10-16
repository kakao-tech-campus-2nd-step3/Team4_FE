import { Career } from '@/types';

export const postCareer = async (careers: Career[]) => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch('/api/trainers/careers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(careers),
  });

  if (response.status !== 201) {
    throw new Error('경력 업로드 실패');
  }
};
