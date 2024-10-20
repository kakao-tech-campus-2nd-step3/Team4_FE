import { useEffect, useState } from 'react';

import { getCareer } from '@/api/career/getCareer';
import { postCareer } from '@/api/career/postCareer';
import { Career, CareerResponse } from '@/types';

export const useCareer = () => {
  const [careers, setCareers] = useState<CareerResponse[]>([]);

  const handleUploadCareer = async (careers: Career[]) => {
    try {
      await postCareer(careers);

      alert('경력이 성공적으로 업로드되었습니다.');
    } catch (error) {
      console.error('경력 업로드 실패:', error);
      alert('경력 업로드에 실패했습니다.');
    }
  };

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const data = await getCareer();
        setCareers(data);
      } catch (error) {
        console.error('경력 데이터를 가져오는데 실패했습니다.', error);
      }
    };

    fetchCareer();
  }, []);

  return { careers, handleUploadCareer };
};
