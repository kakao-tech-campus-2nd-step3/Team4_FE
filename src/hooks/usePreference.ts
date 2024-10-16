import { postPreference } from '@/api/preference/postPreference';
import { Preference } from '@/types';
import { useState } from 'react';

export const usePreference = () => {
  const preference = useState<Preference>();

  const handleUploadPreference = async (preference: Preference) => {
    try {
      await postPreference(preference);

      alert('매칭이 성공적으로 신청되었습니다.');
    } catch (error) {
      console.error('매칭 신청 실패:', error);
      alert('매칭 신청에 실패했습니다.');
    }
  };

  return { preference, handleUploadPreference };
};
