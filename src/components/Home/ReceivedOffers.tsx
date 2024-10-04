import { Card } from '@chakra-ui/react';
import {
  Wrapper,
  StyledImage,
  StyledText,
  StyledCardBody,
} from './ReceivedOffers.styles';
import ReceiveOfferImage from '@/assets/invitation.png';

export const ReceivedOffers = () => {
  return (
    <Wrapper>
      <Card height='125px'>
        <StyledCardBody>
          <StyledText>받은 제안</StyledText>
          <StyledImage src={ReceiveOfferImage} alt='ReceiveOfferImage' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
