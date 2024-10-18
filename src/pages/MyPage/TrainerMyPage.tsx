import { TrainerMyPageProfile } from '@/components/MyPage/Profile/TrainerMyPageProfile';
import { StyledButton, Wrapper } from './TrainerMyPage.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';
import { TrainerCareer } from '@/components/MyPage/TrainerCareer';

export const TrainerMyPage = () => {
  const navigate = useNavigate();

  const navigateToRegisterCareer = () => {
    navigate(RouterPath.registerCareer);
  };

  return (
    <Wrapper>
      <TrainerMyPageProfile />
      <StyledButton type='button' onClick={navigateToRegisterCareer}>
        경력 등록하기
      </StyledButton>
      <TrainerCareer />
    </Wrapper>
  );
};
