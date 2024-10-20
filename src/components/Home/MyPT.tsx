import { Card } from '@chakra-ui/react';

import MyPTImage from '@/assets/date.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './MyPT.styles';

export const MyPT = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={MyPTImage} alt='내 PT' />
          <StyledText>내 PT</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
