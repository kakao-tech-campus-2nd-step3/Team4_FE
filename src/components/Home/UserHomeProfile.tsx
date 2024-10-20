import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { useProfile } from '@/hooks/useProfile';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './UserHomeProfile.styles';

export const UserHomeProfile = () => {
  const navigate = useNavigate();
  const profile = useProfile();

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  const handleProfileClick = () => {
    navigate(RouterPath.mypage);
  };

  return (
    <Wrapper onClick={handleProfileClick}>
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
