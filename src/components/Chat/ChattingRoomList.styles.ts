import styled from "@emotion/styled";
import {CardBody, Image} from "@chakra-ui/react";
import {colors} from "@/styles/colors";

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 90%;
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledProfileImage = styled(Image)`
  width: 80px;
  margin-right: 40px;
  border-radius: 50%;
  float: left;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledNameText = styled.text`
  font-weight: 800;
  font-size: 20px;
`;

export const StyledLastMessage = styled.text<{ isSender: boolean }>`
  font-weight: ${({ isSender }) => (isSender ? '200' : '400')};
  color: ${({ isSender }) => (isSender ? '#a0a0a0' : colors.mainColor)};
  font-size: 12px;
  margin-top: 4px;
`;