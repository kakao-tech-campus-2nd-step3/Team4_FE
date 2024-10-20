import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import LogoImage from '@/assets/linkfit_logo.png';
import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';
import { RouterPath } from '@/routes/path';

import {
  Logo,
  StyledButton,
  StyledChatIcon,
  StyledLink,
  UserWrapper,
  Wrapper,
} from './Header.styles';

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const { handleLogout } = useLogout();

  return (
    <Wrapper>
      <StyledChatIcon />
      <Link to={RouterPath.home}>
        <Logo src={LogoImage} alt='logo' />
      </Link>
      <UserWrapper>
        {isAuthenticated ? (
          <>
            <StyledLink to={RouterPath.mypage}>내정보</StyledLink>
            <Text fontSize='xs'>/</Text>
            <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
          </>
        ) : (
          <>
            <StyledLink to={RouterPath.login}>로그인</StyledLink>
            <Text fontSize='xs'>/</Text>
            <StyledLink to={RouterPath.signup}>회원가입</StyledLink>
          </>
        )}
      </UserWrapper>
    </Wrapper>
  );
};
