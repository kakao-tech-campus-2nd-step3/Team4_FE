import styled from '@emotion/styled';
import Z_INDEX from '@/styles/z-index';

export const FOOTER_HEIGHT = '54px';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 85vh;
  padding-bottom: ${FOOTER_HEIGHT};
  overflow-y: auto;
  z-index: ${Z_INDEX.header - 1};
`;

export const InputWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${Z_INDEX.footer};
  width: 100%;
  height: ${FOOTER_HEIGHT};
  padding: 0 16px;
  background: #eee;
`;

// Input field styling
export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  margin-right: 8px;
`;

// Send button styling
export const SendButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  color: #ffffff;
  background-color: #0084ff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #006bbd;
  }
`;