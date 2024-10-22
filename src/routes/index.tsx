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
import { RegisterCareer } from '@/pages/Career/RegisterCareer';
import { PreferencePage } from '@/pages/Preference';
import { ClientFinder } from '@/pages/Clients/ClientFinder';
import { ChattingList } from "@/pages/Chat/ChattingList";
import { ChattingRoom } from "@/pages/Chat/ChattingRoom";

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
      {
        path: RouterPath.registerCareer,
        element: <RegisterCareer />,
      },
      {
        path: RouterPath.preference,
        element: <PreferencePage />,
      },
      {
        path: RouterPath.clientFinder,
        element: <ClientFinder />,
      },
      {
        path: RouterPath.chattingList,
        element: <ChattingList />,
      },
      {
        path: `${RouterPath.chattingRoom}/:roomId`, // This should match /chat/1
        element: <ChattingRoom />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
