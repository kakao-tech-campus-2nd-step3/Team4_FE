import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Wrapper, InnerWrapper } from './index.styles';

export const Layout = () => (
  <Wrapper>
    <Header />
    <InnerWrapper>
      <Outlet />
    </InnerWrapper>
  </Wrapper>
);
