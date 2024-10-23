import { Box, Card, Flex, Text } from '@chakra-ui/react';
import {
  StyledCardBody,
  StyledNameText,
  StyledProposalText,
  StyledProfileImage,
  Wrapper,
  StyledStatusText,
} from './ProposalUserProfile.styles';
import imageUrl from '@/assets/date.png';

export const ProposalUserProfile = () => {
  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage src={imageUrl} alt='프로필' />
            <Box>
              <StyledNameText>최서린 회원님</StyledNameText>
              <StyledProposalText>10회 60만원</StyledProposalText>
            </Box>
          </Flex>
          <StyledStatusText>대기중</StyledStatusText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
