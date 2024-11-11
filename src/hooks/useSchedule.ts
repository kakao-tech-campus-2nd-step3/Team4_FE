import { postSchedule } from '@/api/schedule/postSchedule';
import { putSchedule } from '@/api/schedule/putSchedule';

export const useSchedule = () => {
  const handleUploadSchedule = async (ptId: number, startTime: string) => {
    try {
      await postSchedule(ptId, startTime);
      alert('PT 일정이 성공적으로 추가되었습니다.');
    } catch (error) {
      console.error('PT 일정 추가 실패:', error);
      alert('PT 일정 추가에 실패했습니다.');
    }
  };

  const handleCompleteSchedule = async (scheduleId: number) => {
    try {
      await putSchedule(scheduleId);
      alert('일정이 완료되었습니다.');
    } catch (error) {
      console.error('일정 완료 처리 실패:', error);
      alert('일정 완료 처리에 실패했습니다.');
    }
  };

  return {
    handleUploadSchedule,
    handleCompleteSchedule,
  };
};
