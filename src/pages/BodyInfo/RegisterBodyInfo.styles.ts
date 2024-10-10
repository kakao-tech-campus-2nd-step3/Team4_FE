import { Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const StyledTitleText = styled(Text)`
  margin: 50px 30px 40px;
  font-size: 28px;
  font-weight: 700;
`;

export const StyledMiddleText = styled(Text)`
  margin: 10px 30px 0;
  font-size: 20px;
  font-weight: 500;
`;
export const StyledText = styled(Text)`
  margin: 0 30px;
  font-size: 15px;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

export const StyledFileButton = styled(Button)`
  background-color: #4f4f4f;
  color: #f5f5f5;
  &:hover {
    background-color: #2c2c2c;
  }
  margin-bottom: 20px;
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