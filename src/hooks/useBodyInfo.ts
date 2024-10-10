import { postBodyInfo } from '@/api/bodyInfo/postBodyInfo';

export const useBodyInfo = () => {
  const handleUploadBodyInfo = async (formData: FormData) => {
    try {
      await postBodyInfo(formData);

      alert('이미지가 성공적으로 업로드되었습니다.');
      return true;
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다.');
      return false;
    }
  };

  return { handleUploadBodyInfo };
};
