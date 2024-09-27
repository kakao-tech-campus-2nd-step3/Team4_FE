import { userSignup } from '@/api/auth/userSignup';
import { trainerSignup } from '@/api/auth/trainerSignup';

export const useSignup = (registerType: 'user' | 'trainer') => {
  const handleSignup = async (formData: FormData) => {
    try {
      if (registerType === 'user') {
        await userSignup(formData);
      } else {
        await trainerSignup(formData);
      }
      alert('회원가입에 성공했습니다.');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return { handleSignup };
};
