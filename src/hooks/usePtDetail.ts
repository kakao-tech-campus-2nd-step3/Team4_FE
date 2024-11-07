import { useEffect, useState } from 'react';

import { getTrainerPtDetail, getUserPtDetail } from '@/api/pt/getPtDetail';
import { useAuth } from './useAuth';

export const usePtDetail = <T>(ptId?: number) => {
  const { type } = useAuth();
  const [ptDetail, setPtDetail] = useState<T | undefined>();

  const fetchPtDetail = async () => {
    try {
      if (ptId && type === 'trainer') {
        const data = await getTrainerPtDetail(ptId);
        setPtDetail(data);
      } else {
        const data = await getUserPtDetail();
        setPtDetail(data);
      }
    } catch (error) {
      console.error('PT 데이터를 가져오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchPtDetail();
  }, []);

  return { ptDetail };
};
