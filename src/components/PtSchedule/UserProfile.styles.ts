import { Button, CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  width: 90%;
  margin: 30px 0 20px;
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
  margin-right: 20px;
`;

export const StyledNameText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
`;

export const StyledChatButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  &:hover {
    background-color: #ff467e;
  }
  width: 80%;
  height: 30px;
  margin-top: 12px;
`;
