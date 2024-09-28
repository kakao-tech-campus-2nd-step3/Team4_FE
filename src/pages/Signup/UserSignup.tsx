import { Text, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { Wrapper, TitleWrapper, FormWrapper } from './UserSignup.styles';
import { useSignup } from '@/hooks/useSignup';
import { useState } from 'react';
import { UserSignupFormData } from '@/types';

export const UserSignupPage = () => {
  const registerType = 'user';
  const { handleSignup } = useSignup(registerType);

  const [formData, setFormData] = useState<UserSignupFormData>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    profileImage: null,
    local: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value, // 파일 필드 처리
    }));
  };

  const isPasswordMatch = (): boolean => {
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return false;
    }
    return true;
  };

  const jsonToBlob = (): Blob => {
    const jsonData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      local: formData.local,
    };
    const jsonBlob = new Blob([JSON.stringify(jsonData)], {
      type: 'application/json',
    });

    return jsonBlob;
  };

  const createFormDataWithFile = (jsonBlob: Blob): FormData => {
    const formDataToSend = new FormData();
    formDataToSend.append('user', jsonBlob);

    if (formData.profileImage) {
      formDataToSend.append('profileImage', formData.profileImage);
    }

    return formDataToSend;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordMatch()) return;

    const jsonBlob = jsonToBlob();

    await handleSignup(createFormDataWithFile(jsonBlob));
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
          회원가입
        </Text>
      </TitleWrapper>
      <form onSubmit={onSubmit}>
        <FormWrapper>
          <FormControl id='email' isRequired>
            <FormLabel>이메일</FormLabel>
            <Input
              type='email'
              placeholder='이메일을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>비밀번호</FormLabel>
            <Input
              type='password'
              placeholder='비밀번호를 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id='passwordConfirm' isRequired>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input
              type='password'
              placeholder='비밀번호를 다시 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id='name' isRequired>
            <FormLabel>이름</FormLabel>
            <Input
              type='text'
              placeholder='이름을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id='local' isRequired>
            <FormLabel>지역</FormLabel>
            <Input
              type='text'
              placeholder='지역을 입력해주세요 (예 : OO시 OO구)'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.local}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id='profileImage'>
            <FormLabel>프로필 이미지</FormLabel>
            <Input
              type='file'
              accept='image/*'
              mb='10px'
              border='none'
              _hover={{ border: 'none' }}
              _focus={{ border: 'none' }}
              onChange={handleChange}
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
            회원가입
          </Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};
