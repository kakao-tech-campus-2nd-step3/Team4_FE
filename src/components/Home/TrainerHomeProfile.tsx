import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
} from './UserHomeProfile.styles';
import { useProfile } from '@/hooks/useProfile';

export const TrainerHomeProfile = () => {
  const profile = useProfile();

  // profile이 TrainerProfile 타입인지 확인
  // TODO : 프로필 이미지 명칭 통일에 대해 백엔드와 논의 후 이 부분과 type 부분 수정
  if (!profile || !('profileImageUrl' in profile)) {
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
