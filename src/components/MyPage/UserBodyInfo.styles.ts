import { Box, Button, Card, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const StyledCard = styled(Card)`
  margin: 20px 0px;
  padding-bottom: 20px;
`;

export const StyledTitleText = styled(Text)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0px 30px;
`;

export const StyledDefaultText = styled(Text)`
  text-align: center;
`;

export const HistoryBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const StyledDateText = styled(Text)`
  margin: 10px 50px 0px 20px;
  font-size: 18px;
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  border-radius: 20px;
  font-size: 12px;
  height: 28px;
  margin-top: 8px;

  &:hover {
    background-color: #ff467e;
  }
`;
