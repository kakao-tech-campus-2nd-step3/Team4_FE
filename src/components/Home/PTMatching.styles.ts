import { CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 300px;
  cursor: pointer;
`;

export const StyledCardBody = styled(CardBody)`
  position: relative;
  height: 300px;
`;

export const StyledText = styled(Text)`
  position: absolute;
  font-size: 18px;
  font-weight: 700;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  width: 120px;
  bottom: 20px;
  right: 50px;
`;
