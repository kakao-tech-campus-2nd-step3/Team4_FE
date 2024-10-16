export const getBodyInfo = async () => {
  const token = localStorage.getItem('accessToken');
  const response = await fetch('/api/bodyInfos', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error('이미지 데이터 가져오기 실패');
  }

  const data = await response.json();
  return data;
};
