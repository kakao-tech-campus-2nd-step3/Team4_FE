import { ChatIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Z_INDEX from '@/styles/z-index';

export const HEADER_HEIGHT = '54px';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${Z_INDEX.header};
  width: 100%;
  max-width: 100vw;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  background: #eee;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledChatIcon = styled(ChatIcon)`
  margin-right: 65px;
`;

export const Logo = styled.img`
  height: 30px;
  margin: 0 0 0 16px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  margin: 0 5px;
  text-decoration: none;
  color: black;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
`;
