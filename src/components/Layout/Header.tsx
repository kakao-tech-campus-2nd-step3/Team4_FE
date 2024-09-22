import styled from '@emotion/styled';
import { ChatIcon } from '@chakra-ui/icons';
import LogoImage from '@/assets/linkfit_logo.png';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { RouterPath } from '@/routes/path';
import Z_INDEX from '@/styles/z-index';

export const Header = () => {
  return (
    <Wrapper>
      <StyledChatIcon />
      <Link to={RouterPath.home}>
        <Logo src={LogoImage} alt='logo' />
      </Link>
      <UserWrapper>
        <StyledLink to={RouterPath.login}>로그인</StyledLink>
        <Text fontSize='xs'>/</Text>
        <StyledLink to={RouterPath.signup}>회원가입</StyledLink>
      </UserWrapper>
    </Wrapper>
  );
};

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

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChatIcon = styled(ChatIcon)`
  margin-right: 65px;
`;

const Logo = styled.img`
  height: 30px;
  margin: 0 0 0 16px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  margin: 0 5px;
  text-decoration: none;
  color: black;
`;
