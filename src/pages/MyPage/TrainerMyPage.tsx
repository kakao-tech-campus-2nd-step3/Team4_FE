import { useNavigate } from 'react-router-dom';

import { TrainerMyPageProfile } from '@/components/MyPage/Profile/TrainerMyPageProfile';
import { TrainerCareer } from '@/components/MyPage/TrainerCareer';
import { RouterPath } from '@/routes/path';

import { StyledButton, Wrapper } from './TrainerMyPage.styles';

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
