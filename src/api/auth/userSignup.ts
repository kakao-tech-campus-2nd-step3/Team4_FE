export const userSignup = async (formData: FormData) => {
  const response = await fetch(`/api/auth/user/register`, {
    method: 'POST',
    body: formData,
  });

  if (response.status !== 201) {
    throw new Error('회원가입 실패');
  }
};
