import { useAuth } from '@/hooks/useAuth';
import { UserHomePage } from './UserHome';
import { TrainerHomePage } from './TrainerHome';

export const HomePage = () => {
  const { isAuthenticated, type } = useAuth();

  const renderHomeScreen = () => {
    switch (type) {
      case 'user':
        return <UserHomePage />;
      case 'trainer':
        return <TrainerHomePage />;
    }
  };

  return (
    <div>{isAuthenticated ? renderHomeScreen() : <p>로그인 전 홈화면</p>}</div>
  );
};
