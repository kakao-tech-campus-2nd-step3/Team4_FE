import { Text, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const UserSignupPage = () => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
            회원가입
          </Text>
        </TitleWrapper>

        <FormWrapper>
          <FormControl id='username' isRequired>
            <FormLabel>이메일</FormLabel>
            <Input
              type='email'
              placeholder='이메일을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
            />
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>비밀번호</FormLabel>
            <Input
              type='password'
              placeholder='비밀번호를 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
            />
          </FormControl>

          <FormControl id='confirm-password' isRequired>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input
              type='password'
              placeholder='비밀번호를 다시 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
            />
          </FormControl>

          <FormControl id='name' isRequired>
            <FormLabel>이름</FormLabel>
            <Input
              type='text'
              placeholder='이름을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
            />
          </FormControl>

          <FormControl id='region' isRequired>
            <FormLabel>지역</FormLabel>
            <Input
              type='text'
              placeholder='지역을 입력해주세요 (예 : OO시 OO구)'
              focusBorderColor='#FF1658'
              mb='10px'
            />
          </FormControl>

          <Button
            bg='#FF1658'
            color='#F5F5F5'
            _hover={{ bg: '#FF467E' }}
            size='md'
            mt='24px'
          >
            회원가입
          </Button>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  gap: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
