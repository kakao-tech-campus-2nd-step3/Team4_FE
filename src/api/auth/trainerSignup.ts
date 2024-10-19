import { fetchAPI } from '..';

export const trainerSignup = async (formData: FormData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/auth/trainer/register',
    body: formData,
    isFormData: true,
  });
};
