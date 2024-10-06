import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
} from './UserHomeProfile.styles';
import { useProfile } from '@/hooks/useProfile';

export const UserHomeProfile = () => {
  const profile = useProfile();

  // profile이 UserProfile 타입인지 확인
  if (!profile || !('profileImageUrl' in profile)) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <StyledProfileImage src={profile.profileImageUrl} alt='프로필' />
          <StyledNameText mt='15px'>
            {profile.name}님 안녕하세요!
          </StyledNameText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
