import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledText,
  StyledImage,
} from './PTMatching.styles';
import FindClientImage from '@/assets/runner.png';

export const FindClient = () => {
  return (
    <Wrapper>
      <Card height='270px'>
        <StyledCardBody>
          <StyledText>내 고객 찾기</StyledText>
          <StyledImage src={FindClientImage} alt='내 고객 찾기' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
