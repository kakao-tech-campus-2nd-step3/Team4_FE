import { useAuth } from '@/hooks/useAuth';

import { TrainerMyPage } from './TrainerMyPage';
import { UserMyPage } from './UserMyPage';

export const MyPage = () => {
  const { type } = useAuth();

  const renderMyPageScreen = () => {
    switch (type) {
      case 'user':
        return <UserMyPage />;
      case 'trainer':
        return <TrainerMyPage />;
    }
  };

  return <div>{renderMyPageScreen()}</div>;
};
