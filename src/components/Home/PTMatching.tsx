import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledText,
  StyledImage,
} from './PTMatching.styles';
import PTMatchingImage from '@/assets/pulse.png';

export const PTMatching = () => {
  return (
    <Wrapper>
      <Card height='270px'>
        <StyledCardBody>
          <StyledText>PT 매칭하기</StyledText>
          <StyledImage src={PTMatchingImage} alt='PTMatchingImage' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
