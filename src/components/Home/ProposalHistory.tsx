import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledImage,
  StyledCardBody,
  StyledText,
} from './MyPT.styles';
import ProposalHistoryImage from '@/assets/send.png';

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
