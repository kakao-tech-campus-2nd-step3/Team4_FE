import { Card, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { usePtDetail } from '@/hooks/usePtDetail';
import { TrainerPtDetail } from '@/types';

import {
  StyledCardBody,
  StyledChatButton,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './UserProfile.styles';

export const UserProfile = () => {
  const { ptId } = useParams();
  const numberPtId = ptId ? parseInt(ptId, 10) : 0;

  const { ptDetail } = usePtDetail<TrainerPtDetail>(numberPtId);

  if (!ptDetail) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex alignItems='center'>
            <StyledProfileImage src={ptDetail.profileImageUrl} alt='프로필' />
            <StyledNameText>{ptDetail.userName} 회원</StyledNameText>
          </Flex>
          <StyledChatButton>1:1 채팅</StyledChatButton>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
