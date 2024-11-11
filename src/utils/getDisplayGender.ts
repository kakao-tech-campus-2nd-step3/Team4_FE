export interface Profile {
  gender?: string;
}

export const getDisplayGender = (profile: Profile): string => {
  if (!profile.gender) return '성별 정보 없음';

  return profile.gender === 'MALE'
    ? '남'
    : profile.gender === 'FEMALE'
      ? '여'
      : '성별 정보 없음';
};
