import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { usePt } from '@/hooks/usePt';
import { RouterPath } from '@/routes/path';

import {
  StyledButton,
  StyledCard,
  StyledDefaultText,
  StyledNameText,
  StyledProfileCard,
  StyledProfileImage,
  StyledTitleText,
  Wrapper,
} from './LinkedClients.styles';

export const LinkedClients = () => {
  const navigate = useNavigate();
  const { linkedClients } = usePt();

  const navigateToPt = (ptId: number) => {
    navigate(RouterPath.trainerPtSchedule.replace(':ptId', ptId.toString()));
  };

  return (
    <Wrapper>
      <StyledCard>
        <StyledTitleText>내 회원 목록</StyledTitleText>
        {linkedClients.length === 0 ? (
          <StyledDefaultText>PT가 성사된 회원이 없습니다.</StyledDefaultText>
        ) : (
          linkedClients.map((linkedClient) => (
            <StyledProfileCard
              key={linkedClient.id}
              onClick={() => navigateToPt(linkedClient.id)}
            >
              <Flex justify='left' align='center' position='relative'>
                <StyledProfileImage
                  src={linkedClient.profileImageUrl}
                  alt='프로필'
                ></StyledProfileImage>
                <StyledNameText>{linkedClient.userName}</StyledNameText>
                <StyledButton>일정 관리</StyledButton>
              </Flex>
            </StyledProfileCard>
          ))
        )}
      </StyledCard>
    </Wrapper>
  );
};
