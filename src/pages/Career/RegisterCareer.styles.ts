import { Button, Input, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

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
  color: ${colors.white};
  &:hover {
    background-color: ${colors.black};
  }
  margin: 20px 0 10px;
  width: 100%;
`;

export const StyledUploadButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  &:hover {
    background-color: #ff467e;
  }
  width: 100%;
`;
