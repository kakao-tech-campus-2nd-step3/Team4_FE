import { Wrapper, StyledText } from './ClientFinder.styles';
import { ClientFinderProfile } from '@/components/Clients/ClientFinderProfile';

export const ClientFinder = () => {
  return (
    <Wrapper>
      <StyledText>LINK를 원하는 회원들이 있어요!</StyledText>
      <ClientFinderProfile />
    </Wrapper>
  );
};
