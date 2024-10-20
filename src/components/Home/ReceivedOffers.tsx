import { Card } from '@chakra-ui/react';

import ReceiveOfferImage from '@/assets/invitation.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './ReceivedOffers.styles';

export const ReceivedOffers = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledText>받은 제안</StyledText>
          <StyledImage src={ReceiveOfferImage} alt='받은 제안' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
