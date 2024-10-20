import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/routes/path';

import { StyledButton } from './RegisterInbodyButton.styles';

export const RegisterInbodyButton = () => {
  const navigate = useNavigate();

  const navigateToRegisterInbody = () => {
    navigate(RouterPath.registerBodyInfo);
  };
  return (
    <StyledButton type='button' onClick={navigateToRegisterInbody}>
      인바디 이미지 등록하기
    </StyledButton>
  );
};
