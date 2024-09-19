import styled from '@emotion/styled';
export const Header = () => {
  return <Wrapper>Header</Wrapper>;
};

export const HEADER_HEIGHT = '54px';

export const Wrapper = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 100vw;
  height: ${HEADER_HEIGHT};
`;
