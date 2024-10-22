import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #eee;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledTitleText = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
`;
