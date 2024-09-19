import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPath } from './path';
import { HomePage } from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: RouterPath.home,
    element: <HomePage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
