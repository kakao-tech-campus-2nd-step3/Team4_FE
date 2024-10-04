import { UserHomeProfile } from '@/components/Profile/UserHomeProfile';
import { Wrapper, UserHomeProfileWrapper } from './UserHome.styles';

export const UserHomePage = () => {
  return (
    <Wrapper>
      <UserHomeProfileWrapper>
        <UserHomeProfile />
      </UserHomeProfileWrapper>
    </Wrapper>
  );
};
