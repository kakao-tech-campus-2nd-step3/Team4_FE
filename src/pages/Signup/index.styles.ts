import { Card, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

export const TitleText = styled(Text)`
  margin: 0 40px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const CardWrapper = styled(Card)`
  width: 250px;
  height: 300px;
  min-width: 170px;
  margin: 0 20px;
`;

export const EmojiText = styled(Text)`
  font-size: 70px;
  text-align: center;
  margin-top: 35px;
`;

export const RoleText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${colors.black};
  margin-top: 6px;
`;

export const DescriptionText = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: #9e9e9e;
`;
