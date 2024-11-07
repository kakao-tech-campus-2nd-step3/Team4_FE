import { Card, Text } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';

import { Wrapper } from './UserSchedule.styles';
import { UserPtDetail } from '@/types';

export const UserSchedule = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();

  if (!ptDetail) {
    return <Text>PT 일정 정보를 불러오는 중...</Text>;
  }

  return (
    <Wrapper>
      <Text>PT 일정</Text>
      {ptDetail?.schedules.length === 0 ? (
        <Text>등록된 PT 일정이 없습니다.</Text>
      ) : (
        ptDetail.schedules.map((schedule, index) => (
          <Card key={index}>
            <Text>{new Date(schedule.date).toLocaleDateString()}</Text>
            <Text>{schedule.isCompleted ? '완료' : '미완료'}</Text>
          </Card>
        ))
      )}
    </Wrapper>
  );
};
