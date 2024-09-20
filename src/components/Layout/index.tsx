import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Header, HEADER_HEIGHT } from './Header';

export const Layout = () => (
  <Wrapper>
    <Header />
    <InnerWrapper>
      <Outlet />
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 70%;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${HEADER_HEIGHT};
`;
