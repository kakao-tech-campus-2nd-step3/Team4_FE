import { postProposal } from '@/api/proposal/postProposal';
import { Proposal } from '@/types';

export const useProposal = () => {
  const handleUploadProposal = async (proposal: Proposal) => {
    try {
      await postProposal(proposal);

      alert('PT가 성공적으로 제안되었습니다.');
    } catch (error) {
      console.error('PT 제안 실패:', error);
      alert('PT 제안에 실패했습니다.');
    }
  };
  return { handleUploadProposal };
};
