import { fetchAPI } from '..';

export const postSchedule = async (ptId: number, startTime: string) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: `/pt/${ptId}/schedule`,
    body: { startTime },
  });
};
