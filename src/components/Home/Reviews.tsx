import { Card } from '@chakra-ui/react';

import ReviewsImage from '@/assets/invitation.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './ReceivedOffers.styles';

export const Reviews = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledText>리뷰 보기</StyledText>
          <StyledImage src={ReviewsImage} alt='리뷰 보기' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
