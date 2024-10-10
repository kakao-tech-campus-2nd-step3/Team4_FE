import { postCareer } from '@/api/career/postCareer';
import { Career } from '@/types';

export const useCareer = () => {
  const handleUploadCareer = async (careers: Career[]) => {
    try {
      await postCareer(careers);

      alert('경력이 성공적으로 업로드되었습니다.');
      return true;
    } catch (error) {
      console.error('경력 업로드 실패:', error);
      alert('경력 업로드에 실패했습니다.');
      return false;
    }
  };

  return { handleUploadCareer };
};
