import { Button,FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { useLogin } from '@/hooks/useLogin';
import { LoginData } from '@/types';

import {
  FormWrapper,
  LoginWrapper,
  TitleWrapper,
  Wrapper,
} from './index.styles';

export const LoginPage = () => {
  const { handleLogin } = useLogin();

  const [userLoginData, setUserLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [trainerLoginData, setTrainerLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'user' | 'trainer'
  ) => {
    const { id, value } = e.target;
    switch (type) {
      case 'user':
        setUserLoginData((prev) => ({ ...prev, [id]: value }));
        break;
      case 'trainer':
        setTrainerLoginData((prev) => ({ ...prev, [id]: value }));
        break;
    }
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    type: 'user' | 'trainer'
  ) => {
    e.preventDefault();

    switch (type) {
      case 'user':
        await handleLogin(userLoginData, type);
        break;
      case 'trainer':
        await handleLogin(trainerLoginData, type);
        break;
    }

    //  TODO : 토큰 저장 및 로그인 후 홈페이지 이동
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <TitleWrapper>
          <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
            일반회원 로그인
          </Text>
        </TitleWrapper>
        <form onSubmit={(e) => handleFormSubmit(e, 'user')}>
          <FormWrapper>
            <FormControl id='email' isRequired>
              <FormLabel>이메일</FormLabel>
              <Input
                type='email'
                placeholder='이메일을 입력해주세요'
                focusBorderColor='#FF1658'
                mb='10px'
                value={userLoginData.email}
                onChange={(e) => handleInputChange(e, 'user')}
              />
            </FormControl>

            <FormControl id='password' isRequired>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type='password'
                placeholder='비밀번호를 입력해주세요'
                focusBorderColor='#FF1658'
                mb='10px'
                value={userLoginData.password}
                onChange={(e) => handleInputChange(e, 'user')}
              />
            </FormControl>
            <Button
              bg='#FF1658'
              color='#F5F5F5'
              _hover={{ bg: '#FF467E' }}
              size='md'
              mt='24px'
              type='submit'
            >
              로그인
            </Button>
          </FormWrapper>
        </form>
      </LoginWrapper>

      <LoginWrapper>
        <TitleWrapper>
          <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
            트레이너회원 로그인
          </Text>
        </TitleWrapper>
        <form onSubmit={(e) => handleFormSubmit(e, 'trainer')}>
          <FormWrapper>
            <FormControl id='email' isRequired>
              <FormLabel>이메일</FormLabel>
              <Input
                type='email'
                placeholder='이메일을 입력해주세요'
                focusBorderColor='#FF1658'
                mb='10px'
                value={trainerLoginData.email}
                onChange={(e) => handleInputChange(e, 'trainer')}
              />
            </FormControl>

            <FormControl id='password' isRequired>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type='password'
                placeholder='비밀번호를 입력해주세요'
                focusBorderColor='#FF1658'
                mb='10px'
                value={trainerLoginData.password}
                onChange={(e) => handleInputChange(e, 'trainer')}
              />
            </FormControl>
            <Button
              bg='#FF1658'
              color='#F5F5F5'
              _hover={{ bg: '#FF467E' }}
              size='md'
              mt='24px'
              type='submit'
            >
              로그인
            </Button>
          </FormWrapper>
        </form>
      </LoginWrapper>
    </Wrapper>
  );
};
