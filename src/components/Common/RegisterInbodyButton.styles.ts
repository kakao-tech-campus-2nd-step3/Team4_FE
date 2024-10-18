import { colors } from '@/styles/colors';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};

  &:hover {
    background-color: #ff467e;
  }
`;
