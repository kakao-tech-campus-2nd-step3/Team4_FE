import { ClientFinderProfile } from '@/components/Clients/ClientFinderProfile';
import { usePreference } from '@/hooks/usePreference';

import { StyledDefaultText,StyledText, Wrapper } from './ClientFinder.styles';

export const ClientFinder = () => {
  const { preferences } = usePreference();

  return (
    <Wrapper>
      <StyledText>LINK를 원하는 회원들이 있어요!</StyledText>
      {preferences.length === 0 ? (
        <StyledDefaultText>
          현재 매칭이 가능한 회원이 없습니다.
        </StyledDefaultText>
      ) : (
        preferences.map((preference) => (
          <ClientFinderProfile preference={preference} />
        ))
      )}
    </Wrapper>
  );
};
