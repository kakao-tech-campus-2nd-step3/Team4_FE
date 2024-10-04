import { Image, Text, CardBody } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const StyledCardBody = styled(CardBody)`
  position: relative;
`;

export const StyledText = styled(Text)`
  position: absolute;
  left: 30px;
  font-size: 18px;
  font-weight: 700;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  width: 80px;
  bottom: 20px;
  right: 25px;
`;
