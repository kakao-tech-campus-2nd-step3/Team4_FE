export const getTrainerProfile = async () => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch('/api/trainers/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error('트레이너회원 정보 가져오기 실패');
  }

  const data = await response.json();
  return data;
};
