import { MyPT } from '@/components/Home/MyPT';
import { PTMatching } from '@/components/Home/PTMatching';
import { ReceivedOffers } from '@/components/Home/ReceivedOffers';
import { UserHomeProfile } from '@/components/Home/UserHomeProfile';

import {
  MyPTWrapper,
  PTMatchingWrapper,
  ReceivedOffersWrapper,
  RightWrapper,
  UserHomeProfileWrapper,
  UserHomePTWrapper,
  Wrapper,
} from './UserHome.styles';

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
