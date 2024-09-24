import { Text, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper } from './index.styles';

export const LoginPage = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
          로그인
        </Text>
      </TitleWrapper>

      <FormWrapper>
        <FormControl id='username'>
          <FormLabel>이메일</FormLabel>
          <Input
            type='email'
            placeholder='이메일을 입력해주세요'
            focusBorderColor='#FF1658'
            mb='10px'
          />
        </FormControl>

        <FormControl id='password'>
          <FormLabel>비밀번호</FormLabel>
          <Input
            type='password'
            placeholder='비밀번호를 입력해주세요'
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
          로그인
        </Button>
      </FormWrapper>
    </Wrapper>
  );
};
