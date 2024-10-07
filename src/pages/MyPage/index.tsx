import { useAuth } from '@/hooks/useAuth';
import { UserMyPage } from './UserMyPage';
import { TrainerMyPage } from './TrainerMyPage';

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
