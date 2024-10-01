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
} from './Header.styles';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const { isAuthenticated } = useAuth();

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
            <StyledLink to={RouterPath.signup}>로그아웃</StyledLink>
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
