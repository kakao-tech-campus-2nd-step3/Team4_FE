import { UserMyPageProfile } from '@/components/MyPage/Profile/UserMyPageProfile';
import { Wrapper } from './UserMyPage.styles';
import { UserBodyInfo } from '@/components/MyPage/UserBodyInfo';
import { RegisterInbodyButton } from '@/components/Common/RegisterInbodyButton';

export const UserMyPage = () => {
  return (
    <Wrapper>
      <UserMyPageProfile />
      <RegisterInbodyButton />
      <UserBodyInfo />
    </Wrapper>
  );
};
