import { Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const StyledTitleText = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 13px 0 20px 8px;
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  margin-top: 24px;

  &:hover {
    background-color: #ff467e;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
