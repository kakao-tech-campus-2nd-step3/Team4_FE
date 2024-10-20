import { Text } from '@chakra-ui/react';

import { useCareer } from '@/hooks/useCareer';

import {
  CareerBox,
  StyledCard,
  StyledDefaultText,
  StyledTitleText,
} from './TrainerCareer.styles';
export const TrainerCareer = () => {
  const { careers } = useCareer();

  return (
    <StyledCard>
      <StyledTitleText>&#128196; 경력 및 자격사항</StyledTitleText>
      {careers.length === 0 ? (
        <StyledDefaultText>
          등록된 경력 및 자격사항이 없습니다.
        </StyledDefaultText>
      ) : (
        careers.map((career) => (
          <CareerBox key={career.id}>
            <Text>{career.career}</Text>
          </CareerBox>
        ))
      )}
    </StyledCard>
  );
};
