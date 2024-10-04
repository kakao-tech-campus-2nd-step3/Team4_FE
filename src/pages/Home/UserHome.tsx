import { UserHomeProfile } from '@/components/Home/UserHomeProfile';
import {
  Wrapper,
  UserHomeProfileWrapper,
  UserHomePTWrapper,
  PTMatchingWrapper,
  RightWrapper,
  MyPTWrapper,
  ReceivedOffersWrapper,
} from './UserHome.styles';
import { PTMatching } from '@/components/Home/PTMatching';
import { MyPT } from '@/components/Home/MyPT';
import { ReceivedOffers } from '@/components/Home/ReceivedOffers';

export const UserHomePage = () => {
  return (
    <Wrapper>
      <UserHomeProfileWrapper>
        <UserHomeProfile />
      </UserHomeProfileWrapper>
      <UserHomePTWrapper>
        <PTMatchingWrapper>
          <PTMatching />
        </PTMatchingWrapper>
        <RightWrapper>
          <MyPTWrapper>
            <MyPT />
          </MyPTWrapper>
          <ReceivedOffersWrapper>
            <ReceivedOffers />
          </ReceivedOffersWrapper>
        </RightWrapper>
      </UserHomePTWrapper>
    </Wrapper>
  );
};
