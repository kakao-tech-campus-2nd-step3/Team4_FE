import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ProposalTrainerProfile } from '@/components/Proposal/ProposalTrainerProfile';
import { useProposal } from '@/hooks/useProposal';

import { StyledTitleText, Wrapper } from './SentProposal.styles';

export const ReceivedProposal = () => {
  const { userProposals, fetchUserProposals } = useProposal();

  useEffect(() => {
    fetchUserProposals();
  }, []);

  return (
    <Wrapper>
      <StyledTitleText>트레이너들에게 LINK를 제안받았어요!</StyledTitleText>
      {userProposals.length > 0 ? (
        userProposals.map((proposal) => (
          <ProposalTrainerProfile key={proposal.ptId} proposal={proposal} />
        ))
      ) : (
        <Text>아직 제안한 트레이너가 없습니다.</Text>
      )}
    </Wrapper>
  );
};
