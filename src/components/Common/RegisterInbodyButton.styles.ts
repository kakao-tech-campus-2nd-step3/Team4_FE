import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};

  &:hover {
    background-color: #ff467e;
  }
`;
