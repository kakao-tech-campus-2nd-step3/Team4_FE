import {
  Card,
  Box,
  Flex,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
  StyledGoalText,
  StyledInbodyButton,
  StyledButton,
} from './ClientFinder.styles';
import { PreferenceResponse } from '@/types';
import { useState } from 'react';

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
