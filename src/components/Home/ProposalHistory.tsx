import { Card } from '@chakra-ui/react';

import ProposalHistoryImage from '@/assets/send.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './MyPT.styles';

export const ProposalHistory = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={ProposalHistoryImage} alt='내 제안 기록' />
          <StyledText>내 제안 기록</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
