import LogoImage from '@/assets/linkfit_logo.png';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { RouterPath } from '@/routes/path';
import {
  Wrapper,
  StyledChatIcon,
  Logo,
  UserWrapper,
  StyledLink,
  StyledButton,
} from './Header.styles';
import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';

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
            <StyledLink to={RouterPath.login}>내정보</StyledLink>
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
