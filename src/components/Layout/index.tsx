import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { InnerWrapper,Wrapper } from './index.styles';

export const Layout = () => (
  <Wrapper>
    <Header />
    <InnerWrapper>
      <Outlet />
    </InnerWrapper>
  </Wrapper>
);
