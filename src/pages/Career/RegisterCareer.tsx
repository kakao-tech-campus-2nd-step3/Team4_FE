import { Box, Button, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import {
  StyledAddButton,
  StyledInput,
  StyledMiddleText,
  StyledTitleText,
  StyledUploadButton,
  Wrapper,
} from './RegisterCareer.styles';
import { AddIcon } from '@chakra-ui/icons';
import { Career } from '@/types';
import { useCareer } from '@/hooks/useCareer';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

export const RegisterCareer = () => {
  const navigate = useNavigate();
  const [careers, setCareers] = useState<Career[]>([{ career: '' }]);
  const { handleUploadCareer } = useCareer();

  const addCareer = () => {
    setCareers([...careers, { career: '' }]);
  };

  const handleCareerChange = (index: number, value: string) => {
    const updatedCareers = careers.map((career, i) =>
      i === index ? { ...career, career: value } : career
    );
    setCareers(updatedCareers);
  };

  const handleCareerSubmit = () => {
    handleUploadCareer(careers);
    navigate(RouterPath.mypage);
  };

  return (
    <Wrapper>
      <StyledTitleText>트레이너님에 대해서 알려주세요.</StyledTitleText>
      <StyledMiddleText>경력 및 자격사항을 알려주세요.</StyledMiddleText>

      {careers.map((career, index) => (
        <Box key={index}>
          <StyledInput
            placeholder='경력 및 자격사항을 입력하세요'
            value={career.career}
            onChange={(e) => handleCareerChange(index, e.target.value)}
          />
        </Box>
      ))}

      <StyledAddButton
        onClick={addCareer}
        leftIcon={<Icon as={AddIcon} boxSize={3} />}
      >
        추가하기
      </StyledAddButton>
      <StyledUploadButton
        onClick={handleCareerSubmit}
        isDisabled={!careers.length}
      >
        확인
      </StyledUploadButton>
    </Wrapper>
  );
};
