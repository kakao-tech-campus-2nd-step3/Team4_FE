import {
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
} from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper } from './TrainerSignup.styles';

export const TrainerSignupPage = () => {
  return (
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

        <FormControl id='gender' isRequired>
          <FormLabel>성별</FormLabel>
          <Select
            placeholder='성별을 선택해주세요'
            focusBorderColor='#FF1658'
            mb='10px'
          >
            <option value='male'>남성</option>
            <option value='female'>여성</option>
          </Select>
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
  );
};
