import styled from "@emotion/styled";
import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const AlignWrapper = styled.div<{ isSender: boolean }>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  text-align: ${({ isSender }) => (isSender ? 'right' : 'left')};
`;

export const StyledMessageBody = styled.div<{ isSender: boolean }>`
  padding: 10px 10px;
  border-radius: 20px;
  background-color: ${({ isSender }) => (isSender ? colors.mainColor : '#e4e6eb')};
  color: ${({ isSender }) => (isSender ? '#ffffff' : '#000000')};
  font-weight: 400;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`;

export const Timestamp = styled.div`
  font-size: 12px;
  color: #999999;
  margin-top: 4px;
`;
