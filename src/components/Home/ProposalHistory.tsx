import { Card } from '@chakra-ui/react';

import ProposalHistoryImage from '@/assets/send.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './MyPT.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

export const ProposalHistory = () => {
  const navigate = useNavigate();

  const handleProposalHistoryClick = () => {
    navigate(RouterPath.proposalHistory);
  };

  return (
    <Wrapper onClick={handleProposalHistoryClick}>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={ProposalHistoryImage} alt='내 제안 기록' />
          <StyledText>내 제안 기록</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
