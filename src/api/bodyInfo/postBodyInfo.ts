import { fetchAPI } from '..';

export const postBodyInfo = async (formData: FormData) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/bodyInfos',
    body: formData,
    isFormData: true,
  });
};
