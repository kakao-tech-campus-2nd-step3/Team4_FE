import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledImage,
  StyledCardBody,
  StyledText,
} from './MyPT.styles';
import MyPTImage from '@/assets/date.png';

export const MyPT = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={MyPTImage} alt='MyPTImage' />
          <StyledText>내 피티</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
