import { Button, CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 500px;
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  position: relative;
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

export const StyledProposalText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: ${colors.mainColor};
`;

export const StyledStatusText = styled(Text)`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  bottom: 15px;
  right: 25px;
  color: ${colors.mainColor};
`;
