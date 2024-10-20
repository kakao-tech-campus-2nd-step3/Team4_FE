import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/useSignup';
import { TrainerSignupFormData } from '@/types';

import { FormWrapper,TitleWrapper, Wrapper } from './TrainerSignup.styles';

export const TrainerSignupPage = () => {
  const navigate = useNavigate();

  const registerType = 'trainer';
  const { handleSignup } = useSignup(registerType);

  const [formData, setFormData] = useState<TrainerSignupFormData>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    profileImage: null,
    gender: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value, // 선택된 값으로 처리
    }));
  };

  const jsonToBlob = (): Blob => {
    const jsonData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      gender: formData.gender,
    };
    const jsonBlob = new Blob([JSON.stringify(jsonData)], {
      type: 'application/json',
    });

    return jsonBlob;
  };

  const createFormDataWithFile = (jsonBlob: Blob): FormData => {
    const formDataToSend = new FormData();
    formDataToSend.append('trainer', jsonBlob);

    if (formData.profileImage) {
      formDataToSend.append('profileImage', formData.profileImage);
    }

    return formDataToSend;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPasswordMatch()) return;

    const jsonBlob = jsonToBlob();

    const isSignupSuccessful = await handleSignup(
      createFormDataWithFile(jsonBlob)
    );
    if (isSignupSuccessful) {
      navigate('/login'); // 성공 시에만 로그인 페이지로 이동
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Text fontSize='2xl' as='b' mt='13px' mb='20px' ml='8px'>
          회원가입
        </Text>
      </TitleWrapper>
      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id='email' isRequired>
            <FormLabel>이메일</FormLabel>
            <Input
              type='email'
              placeholder='이메일을 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id='gender' isRequired>
            <FormLabel>성별</FormLabel>
            <Select
              placeholder='성별을 선택해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={formData.gender}
              onChange={handleSelectChange}
            >
              <option value='MALE'>남성</option>
              <option value='FEMALE'>여성</option>
            </Select>
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
              onChange={handleInputChange}
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
