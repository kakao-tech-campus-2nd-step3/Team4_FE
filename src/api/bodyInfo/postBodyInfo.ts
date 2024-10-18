export const postBodyInfo = async (formData: FormData) => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch('/api/bodyInfos', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (response.status !== 201) {
    throw new Error('이미지 업로드 실패');
  }
};
