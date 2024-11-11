import { fetchAPI } from '..';

export const putSchedule = async (scheduleId: number) => {
  return await fetchAPI({
    method: 'PUT',
    endpoint: `/pt/schedule/${scheduleId}`,
  });
};
