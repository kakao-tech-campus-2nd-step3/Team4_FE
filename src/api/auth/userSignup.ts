import { fetchAPI } from '..';

export const userSignup = async (formData: FormData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/user/register',
    body: formData,
    isFormData: true,
  });
};
