import { UserMyPageProfile } from '@/components/MyPage/Profile/UserMyPageProfile';
import { StyledButton, Wrapper } from './UserMyPage.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import { UserBodyInfo } from '@/components/MyPage/UserBodyInfo';

export const UserMyPage = () => {
  const navigate = useNavigate();

  const navigateToRegisterInbody = () => {
    navigate(RouterPath.registerBodyInfo);
  };

  return (
    <Wrapper>
      <UserMyPageProfile />
      <StyledButton type='button' onClick={navigateToRegisterInbody}>
        인바디 이미지 등록하기
      </StyledButton>
      <UserBodyInfo />
    </Wrapper>
  );
};
