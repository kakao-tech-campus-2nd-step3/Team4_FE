import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  background-color: #ff1658;
  color: #f5f5f5;
  margin-top: 24px;

  &:hover {
    background-color: #ff467e;
  }
`;
