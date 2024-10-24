import { getTrainerProposal } from '@/api/proposal/getTrainerProposal';
import { postProposal } from '@/api/proposal/postProposal';
import { Proposal, TrainerProposalResponse } from '@/types';
import { useState } from 'react';

export const useProposal = () => {
  const [trainerProposals, setTrainerProposals] = useState<
    TrainerProposalResponse[]
  >([]);
  const fetchTrainerProposals = async () => {
    try {
      const response = await getTrainerProposal();
      setTrainerProposals(response);
    } catch (error) {
      console.error('PT 제안 리스트를 가져오는 데 실패했습니다:', error);
      alert('PT 제안 리스트를 가져오는 데 실패했습니다.');
    }
  };

  const handleUploadProposal = async (proposal: Proposal) => {
    try {
      await postProposal(proposal);

      alert('PT가 성공적으로 제안되었습니다.');
    } catch (error) {
      console.error('PT 제안 실패:', error);
      alert('PT 제안에 실패했습니다.');
    }
  };

  return { trainerProposals, fetchTrainerProposals, handleUploadProposal };
};
