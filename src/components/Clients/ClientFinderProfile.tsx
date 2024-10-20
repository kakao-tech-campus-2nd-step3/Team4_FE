import {
  Box,
  Card,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import { useState } from 'react';

import { PreferenceResponse } from '@/types';

import {
  StyledButton,
  StyledCardBody,
  StyledGoalText,
  StyledInbodyButton,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './ClientFinderProfile.styles';

export const ClientFinderProfile = ({
  preference,
}: {
  preference: PreferenceResponse;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage src={preference.profileImageUrl} alt='프로필' />
            <Box>
              <Flex align='center'>
                <StyledNameText>{preference.name} 회원님</StyledNameText>
                <StyledInbodyButton
                  onClick={() => openModal(preference.inbodyImageUrl)}
                >
                  인바디
                </StyledInbodyButton>
              </Flex>
              <StyledGoalText>{preference.goal}</StyledGoalText>
            </Box>
          </Flex>
        </StyledCardBody>

        <Flex justify='center'>
          <StyledButton>제안하기</StyledButton>
        </Flex>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalContent>
            <ModalHeader>인바디 이미지</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedImage && <Image src={selectedImage} alt='인바디' />}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Card>
    </Wrapper>
  );
};
