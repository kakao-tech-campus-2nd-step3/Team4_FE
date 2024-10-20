import { Button, CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 500px;
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
  margin-right: 40px;
  border: 1px solid #eeeeee;
  border-radius: 100%;
`;

export const StyledNameText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
`;

export const StyledInbodyButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  border-radius: 20px;
  font-size: 12px;
  width: 50px;
  height: 20px;
  margin-left: 20px;

  &:hover {
    background-color: #ff467e;
  }
`;

export const StyledGoalText = styled(Text)`
  text-align: left;
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  width: 300px;
  height: 28px;
  margin-bottom: 10px;

  &:hover {
    background-color: #ff467e;
  }
`;
