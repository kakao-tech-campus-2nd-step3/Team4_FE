import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import PTMatchingImage from '@/assets/pulse.png';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './PTMatching.styles';

export const PTMatching = () => {
  const navigate = useNavigate();

  const handlePTMatchingClick = () => {
    navigate(RouterPath.preference);
  };

  return (
    <Wrapper onClick={handlePTMatchingClick}>
      <Card height='270px'>
        <StyledCardBody>
          <StyledText>PT 매칭하기</StyledText>
          <StyledImage src={PTMatchingImage} alt='PT 매칭하기' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
