import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';
import { useBodyInfo } from '@/hooks/useBodyInfo';
import {
  StyledButton,
  StyledCard,
  HistoryBox,
  StyledDefaultText,
  StyledDateText,
  StyledTitleText,
} from './UserBodyInfo.styles';
export const UserBodyInfo = () => {
  const { bodyInfo } = useBodyInfo();
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
    <StyledCard>
      <StyledTitleText>&#128196; 나의 히스토리</StyledTitleText>
      {bodyInfo.length === 0 ? (
        <StyledDefaultText>등록된 인바디 이미지가 없습니다.</StyledDefaultText>
      ) : (
        bodyInfo.map((info) => (
          <HistoryBox key={info.infoId}>
            <StyledDateText>
              {new Date(info.createDate).toLocaleDateString()}
            </StyledDateText>
            <StyledButton onClick={() => openModal(info.inbodyImageUrl)}>
              인바디 이미지
            </StyledButton>
          </HistoryBox>
        ))
      )}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>인바디 이미지</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedImage && <Image src={selectedImage} alt='Inbody' />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </StyledCard>
  );
};
