import { CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { RouterPath } from '@/routes/path';

import {
  CardWrapper,
  DescriptionText,
  EmojiText,
  RoleText,
  TitleText,
  TypeWrapper,
  Wrapper,
} from './index.styles';

export const SignupPage = () => {
  return (
    <>
      <Wrapper>
        <TitleText fontSize='3xl' as='b'>
          가입 유형을 선택해주세요
        </TitleText>
        <TypeWrapper>
          <CardWrapper>
            <Link to={RouterPath.signupUser}>
              <CardBody>
                <EmojiText>🙋‍♂️</EmojiText>
                <RoleText>일반 회원</RoleText>
                <DescriptionText>PT를 받고 싶어요!</DescriptionText>
              </CardBody>
            </Link>
          </CardWrapper>

          <CardWrapper>
            <Link to={RouterPath.signupTrainer}>
              <CardBody>
                <EmojiText>💪</EmojiText>
                <RoleText>트레이너 회원</RoleText>
                <DescriptionText>PT 고객을 찾고 싶어요!</DescriptionText>
              </CardBody>
            </Link>
          </CardWrapper>
        </TypeWrapper>
      </Wrapper>
    </>
  );
};
