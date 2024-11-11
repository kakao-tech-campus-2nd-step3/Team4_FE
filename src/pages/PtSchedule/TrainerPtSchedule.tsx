import { TrainerSchedule } from '@/components/PtSchedule/TrainerSchedule';
import { UserProfile } from '@/components/PtSchedule/UserProfile';

import { Wrapper } from './UserPtSchedule.styles';

export const TrainerPtSchedulePage = () => {
  return (
    <Wrapper>
      <UserProfile />
      <TrainerSchedule />
    </Wrapper>
  );
};
