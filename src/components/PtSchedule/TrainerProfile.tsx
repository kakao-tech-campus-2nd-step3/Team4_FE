import { Card, Flex } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';

import {
  StyledCardBody,
  StyledChatButton,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './TrainerProfile.styles';
import { UserPtDetail } from '@/types';

export const TrainerProfile = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();

  if (!ptDetail) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex>
            <StyledProfileImage src={ptDetail.profileImageUrl} alt='프로필' />
            <Flex direction='column' alignItems='flex-start'>
              <StyledNameText mt='15px'>
                {ptDetail.trainerName} 트레이너
              </StyledNameText>
              <StyledGymText>소속 : {ptDetail.gymName}</StyledGymText>
            </Flex>
          </Flex>
          <StyledChatButton>1:1 채팅</StyledChatButton>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
