import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './path';
import { HomePage } from '@/pages/Home';
import { SignupType } from '@/pages/SignupType';
import { Layout } from '@/components/Layout';

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
        path: RouterPath.signupType,
        element: <SignupType />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
