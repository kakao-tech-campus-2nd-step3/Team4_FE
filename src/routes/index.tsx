import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './path';
import { HomePage } from '@/pages/Home';
import { Layout } from '@/components/Layout';
import { SignupPage } from '@/pages/Signup';
import { UserSignupPage } from '@/pages/Signup/UserSignup';
import { TrainerSignupPage } from '@/pages/Signup/TrainerSignup';
import { LoginPage } from '@/pages/Login';
import { MyPage } from '@/pages/MyPage';
import { RegisterBodyInfo } from '@/pages/BodyInfo/RegisterBodyInfo';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.login,
        element: <LoginPage />,
      },
      {
        path: RouterPath.signup,
        element: <SignupPage />,
      },
      {
        path: RouterPath.signupUser,
        element: <UserSignupPage />,
      },
      {
        path: RouterPath.signupTrainer,
        element: <TrainerSignupPage />,
      },
      {
        path: RouterPath.mypage,
        element: <MyPage />,
      },
      {
        path: RouterPath.registerBodyInfo,
        element: <RegisterBodyInfo />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
