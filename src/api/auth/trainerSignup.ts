export const trainerSignup = async (formData: FormData) => {
  const response = await fetch('/api/auth/trainer/register', {
    method: 'POST',
    body: formData,
  });

  if (response.status === 201) {
    return null;
  } else {
    throw new Error('회원가입 실패');
  }
};
