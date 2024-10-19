import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledText,
  StyledImage,
} from './PTMatching.styles';
import PTMatchingImage from '@/assets/pulse.png';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

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
