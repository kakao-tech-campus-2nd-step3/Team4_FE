import { useEffect, useState } from 'react';

import { getPreference } from '@/api/preference/getPreference';
import { postPreference } from '@/api/preference/postPreference';
import { Preference, PreferenceResponse } from '@/types';

export const usePreference = () => {
  const [preferences, setPreferences] = useState<PreferenceResponse[]>([]);

  const handleUploadPreference = async (preference: Preference) => {
    try {
      await postPreference(preference);

      alert('매칭이 성공적으로 신청되었습니다.');
    } catch (error) {
      console.error('매칭 신청 실패:', error);
      alert('매칭 신청에 실패했습니다.');
    }
  };

  useEffect(() => {
    const fetchPreference = async () => {
      try {
        const data = await getPreference();
        setPreferences(data);
      } catch (error) {
        console.error(
          '매칭 신청 고객 데이터를 가져오는데 실패했습니다.',
          error
        );
      }
    };

    fetchPreference();
  }, []);

  return { preferences, handleUploadPreference };
};
