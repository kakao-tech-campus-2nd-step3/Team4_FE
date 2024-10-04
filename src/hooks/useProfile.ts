import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { getUserProfile } from '@/api/profile/userProfile';
import { TrainerProfile, UserProfile } from '@/types';

export const useProfile = () => {
  const { type } = useAuth();
  const [profile, setProfile] = useState<UserProfile | TrainerProfile | null>(
    null
  );

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (type === 'user') {
          const data = await getUserProfile();
          setProfile(data);
        } else if (type === 'trainer') {
          // const data = await getTrainerProfile();
          // setProfile(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [type]);

  return profile;
};
