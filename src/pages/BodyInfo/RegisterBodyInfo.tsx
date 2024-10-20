import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Icon, Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { useBodyInfo } from '@/hooks/useBodyInfo';

import {
  FileWrapper,
  StyledFileButton,
  StyledMiddleText,
  StyledText,
  StyledTitleText,
  StyledUploadButton,
  Wrapper,
} from './RegisterBodyInfo.styles';

export const RegisterBodyInfo = () => {
  const { handleUploadBodyInfo } = useBodyInfo();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 선택 Input을 참조

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('inbodyImage', selectedImage);

    handleUploadBodyInfo(formData);
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click(); // 숨겨진 파일 선택 input을 클릭
  };

  return (
    <Wrapper>
      <StyledTitleText>회원님에 대해서 알려주세요.</StyledTitleText>
      <StyledMiddleText>인바디 검사 결과지를 공유해주세요.</StyledMiddleText>
      <StyledText>
        트레이너가 참고하여 나에게 더 알맞는 매칭이 가능해요.
      </StyledText>
      <FileWrapper>
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }} // 숨기기
        />

        <StyledFileButton
          onClick={handleClickFileInput}
          leftIcon={<Icon as={PlusSquareIcon} boxSize={5} />}
        >
          파일 선택
        </StyledFileButton>

        {preview && (
          <Box mt={8} mb={8}>
            <Image
              src={preview}
              alt='미리보기'
              boxSize='300px'
              objectFit='cover'
            />
          </Box>
        )}

        <StyledUploadButton
          onClick={handleImageUpload}
          isDisabled={!selectedImage}
        >
          이미지 업로드
        </StyledUploadButton>
      </FileWrapper>
    </Wrapper>
  );
};
