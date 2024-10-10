import { Button, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const StyledTitleText = styled(Text)`
  margin: 50px 30px 40px;
  font-size: 28px;
  font-weight: 700;
`;

export const StyledMiddleText = styled(Text)`
  margin: 10px 30px 20px;
  font-size: 20px;
  font-weight: 500;
`;
export const StyledInput = styled(Input)`
  margin: 5px 20px;
`;

export const StyledAddButton = styled(Button)`
  background-color: #4f4f4f;
  color: #f5f5f5;
  &:hover {
    background-color: #2c2c2c;
  }
  margin: 20px 0 10px;
  width: 100%;
`;

export const StyledUploadButton = styled(Button)`
  background-color: #ff1658;
  color: #f5f5f5;
  &:hover {
    background-color: #ff467e;
  }
  width: 100%;
`;
