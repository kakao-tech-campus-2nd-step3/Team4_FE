import { ProposalUserProfile } from '@/components/Proposal/ProposalUserProfile';
import { StyledTitleText, Wrapper } from './ProposalPage.styles';
import { useEffect } from 'react';
import { useProposal } from '@/hooks/useProposal';

export const ProposalHistory = () => {
  const { trainerProposals, fetchTrainerProposals } = useProposal();

  useEffect(() => {
    fetchTrainerProposals();
  }, [fetchTrainerProposals]);

  return (
    <Wrapper>
      <StyledTitleText>회원들에게 LINK를 제안했어요!</StyledTitleText>
      {trainerProposals.length > 0 ? (
        trainerProposals.map((proposal) => (
          <ProposalUserProfile key={proposal.id} proposal={proposal} />
        ))
      ) : (
        <text>아직 제안한 회원이 없습니다.</text>
      )}
    </Wrapper>
  );
};
