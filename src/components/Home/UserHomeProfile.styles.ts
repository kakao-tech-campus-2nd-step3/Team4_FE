import { CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 30px 0 20px;
  cursor: pointer;
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const StyledProfileImage = styled(Image)`
  width: 80px;
  border: 1px solid #eeeeee;
  border-radius: 100%;
`;

export const StyledNameText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
`;
