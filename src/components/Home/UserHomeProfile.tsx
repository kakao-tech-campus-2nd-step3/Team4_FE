import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
} from './UserHomeProfile.styles';
import { useEffect, useState } from 'react';
import { UserProfile } from '@/types';
import { getUserProfile } from '@/api/profile/userProfile';

export const UserHomeProfile = () => {
  const [profile, setProfile] = useState<UserProfile>();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <StyledProfileImage
            src={profile.profileImageUrl}
            alt='프로필 이미지'
          />
          <StyledNameText mt='15px'>
            {profile.name}님 안녕하세요!
          </StyledNameText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
