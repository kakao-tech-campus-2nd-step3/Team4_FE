export const postBodyInfo = async (formData: FormData) => {
  const token = localStorage.getItem('accessToken');

  try {
    const response = await fetch('/api/users/bodyInfo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.status !== 201) {
      throw new Error('이미지 업로드 실패');
    }
  } catch (error) {
    console.error('업로드 중 오류가 발생했습니다:', error);
  }
};
