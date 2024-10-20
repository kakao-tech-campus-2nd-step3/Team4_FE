import styled from '@emotion/styled';

import { HEADER_HEIGHT } from './Header.styles';

export const Wrapper = styled.div`
  width: 70%;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${HEADER_HEIGHT};
`;
