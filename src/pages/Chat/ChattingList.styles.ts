import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const StyledTitleText = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 13px 0 20px 8px;
`;

export const StyledText = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StyledDefaultText = styled(Text)`
  text-align: center;
`;
