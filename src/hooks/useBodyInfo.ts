import { useEffect, useState } from 'react';

import { getBodyInfo } from '@/api/bodyInfo/getBodyInfo';
import { postBodyInfo } from '@/api/bodyInfo/postBodyInfo';
import { RouterPath } from '@/routes/path';
import { BodyInfo } from '@/types';

export const useBodyInfo = () => {
  const [bodyInfo, setBodyInfo] = useState<BodyInfo[]>([]);

  const handleUploadBodyInfo = async (formData: FormData) => {
    try {
      await postBodyInfo(formData);

      alert('이미지가 성공적으로 업로드되었습니다.');
      window.location.replace(RouterPath.mypage);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다.');
    }
  };

  useEffect(() => {
    const fetchBodyInfo = async () => {
      try {
        const data = await getBodyInfo();
        setBodyInfo(data);
      } catch (error) {
        console.error('인바디 이미지 데이터를 가져오는데 실패했습니다.', error);
      }
    };

    fetchBodyInfo();
  }, []);

  return { bodyInfo, handleUploadBodyInfo };
};
