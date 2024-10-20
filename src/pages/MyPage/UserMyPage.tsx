import { RegisterInbodyButton } from '@/components/Common/RegisterInbodyButton';
import { UserMyPageProfile } from '@/components/MyPage/Profile/UserMyPageProfile';
import { UserBodyInfo } from '@/components/MyPage/UserBodyInfo';

import { Wrapper } from './UserMyPage.styles';

export const UserMyPage = () => {
  return (
    <Wrapper>
      <UserMyPageProfile />
      <RegisterInbodyButton />
      <UserBodyInfo />
    </Wrapper>
  );
};
