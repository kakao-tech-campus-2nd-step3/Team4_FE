import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import FindClientImage from '@/assets/runner.png';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './PTMatching.styles';

export const FindClient = () => {
  const navigate = useNavigate();

  const handleFindClientClick = () => {
    navigate(RouterPath.clientFinder);
  };

  return (
    <Wrapper onClick={handleFindClientClick}>
      <Card height='270px'>
        <StyledCardBody>
          <StyledText>내 고객 찾기</StyledText>
          <StyledImage src={FindClientImage} alt='내 고객 찾기' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
