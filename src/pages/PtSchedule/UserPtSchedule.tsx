import { TrainerProfile } from '@/components/PtSchedule/TrainerProfile';
import { UserSchedule } from '@/components/PtSchedule/UserSchedule';

import { Wrapper } from './UserPtSchedule.styles';

export const UserPtSchedulePage = () => {
  return (
    <Wrapper>
      <TrainerProfile />
      <UserSchedule />
    </Wrapper>
  );
};
