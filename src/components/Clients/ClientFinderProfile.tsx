import { Card, Box, Flex, Text } from '@chakra-ui/react';
import { useProfile } from '@/hooks/useProfile';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
  StyledInbodyButton,
  StyledButton,
} from './ClientFinder.styles';
import PTMatchingImage from '@/assets/pulse.png';

export const ClientFinderProfile = () => {
  // const profile = useProfile();

  // if (!profile) {
  //   return <p>프로필 정보를 불러오는 중...</p>;
  // }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage src={PTMatchingImage} alt='프로필' />
            <Box>
              <Flex align='center'>
                <StyledNameText>최서린 회원님</StyledNameText>
                <StyledInbodyButton>인바디</StyledInbodyButton>
              </Flex>
              <Text>한달동안 5kg 체중 감량하기</Text>
            </Box>
          </Flex>
        </StyledCardBody>

        <Flex justify='center'>
          <StyledButton>제안하기</StyledButton>
        </Flex>
      </Card>
    </Wrapper>
  );
};
