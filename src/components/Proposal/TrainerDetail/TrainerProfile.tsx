import { Card } from '@chakra-ui/react';

import { useProfile } from '@/hooks/useProfile';
import { getDisplayGender, Profile } from '@/utils/getDisplayGender';

import {
  StyledCardBody,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './TrainerProfile.styles';

interface TrainerProfileProps {
  trainerId: number;
}

export const TrainerProfile = ({ trainerId }: TrainerProfileProps) => {
  const profile = useProfile(trainerId);

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  const displayGender = getDisplayGender(profile as Profile);

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <StyledProfileImage src={profile.profileImageUrl} alt='프로필' />
          <StyledNameText mt='15px'>
            {profile.name} 트레이너님 ({displayGender})
          </StyledNameText>
          <StyledGymText>
            소속 : {'gymName' in profile ? profile.gymName : '체육관 정보 없음'}
          </StyledGymText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
