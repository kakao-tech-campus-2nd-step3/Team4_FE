import { FindClient } from '@/components/Home/FindClient';
import { ProposalHistory } from '@/components/Home/ProposalHistory';
import { Reviews } from '@/components/Home/Reviews';
import { TrainerHomeProfile } from '@/components/Home/TrainerHomeProfile';

import {
  FindClientWrapper,
  ProposalHistoryWrapper,
  ReviewsWrapper,
  RightWrapper,
  TrainerHomeProfileWrapper,
  TrainerHomePTWrapper,
} from './TrainerHome.styles';
import { Wrapper } from './UserHome.styles';

export const TrainerHomePage = () => {
  return (
    <Wrapper>
      <TrainerHomeProfileWrapper>
        <TrainerHomeProfile />
      </TrainerHomeProfileWrapper>
      <TrainerHomePTWrapper>
        <FindClientWrapper>
          <FindClient />
        </FindClientWrapper>
        <RightWrapper>
          <ProposalHistoryWrapper>
            <ProposalHistory />
          </ProposalHistoryWrapper>
          <ReviewsWrapper>
            <Reviews />
          </ReviewsWrapper>
        </RightWrapper>
      </TrainerHomePTWrapper>
    </Wrapper>
  );
};
