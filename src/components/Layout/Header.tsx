import styled from '@emotion/styled';
import { ChatIcon } from '@chakra-ui/icons';
import LogoImage from '@/assets/linkfit_logo.png';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Wrapper>
      <ChatIcon />
      <Logo src={LogoImage} alt='logo' />
      <UserWrapper>
        <StyledLink to='/login'>로그인</StyledLink>
        <Text fontSize='xs'>/</Text>
        <StyledLink to='/signup'>회원가입</StyledLink>
      </UserWrapper>
    </Wrapper>
  );
};

export const HEADER_HEIGHT = '54px';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
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

const Logo = styled.img`
  height: 30px;
  margin: 0 0 0 16px;
`;

const StyledLink = styled(Link)`
  font-size: 12px; /* 원하는 사이즈로 조정 */
  margin: 0 5px;
  text-decoration: none;
  color: black;
`;
