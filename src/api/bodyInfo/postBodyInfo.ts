export const postBodyInfo = async (formData: FormData) => {
  const token = localStorage.getItem('accessToken');

  try {
    //TODO : 추후 엔드포인트 /info -> /bodyInfo 로 변경
    const response = await fetch('/api/users/info', {
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
