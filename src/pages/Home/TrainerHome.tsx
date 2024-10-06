import { TrainerHomeProfile } from '@/components/Home/TrainerHomeProfile';
import { Wrapper } from './UserHome.styles';
import { FindClient } from '@/components/Home/FindClient';
import { ProposalHistory } from '@/components/Home/ProposalHistory';
import { Reviews } from '@/components/Home/Reviews';
import {
  FindClientWrapper,
  ProposalHistoryWrapper,
  ReviewsWrapper,
  RightWrapper,
  TrainerHomeProfileWrapper,
  TrainerHomePTWrapper,
} from './TrainerHome.styles';

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
