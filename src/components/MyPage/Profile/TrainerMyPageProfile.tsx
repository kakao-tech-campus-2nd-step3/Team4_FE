import { Card } from '@chakra-ui/react';

import { useProfile } from '@/hooks/useProfile';

import {
  StyledCardBody,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from '../../Home/UserHomeProfile.styles';

export const TrainerMyPageProfile = () => {
  const profile = useProfile();

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <StyledProfileImage src={profile.profileImageUrl} alt='프로필' />
          <StyledNameText mt='15px'>{profile.name} 님</StyledNameText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
