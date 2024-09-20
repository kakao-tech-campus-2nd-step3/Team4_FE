import { Card, CardBody, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SignupType = () => {
  return (
    <>
      <Wrapper>
        <TitleText fontSize='3xl' as='b'>
          가입 유형을 선택해주세요
        </TitleText>
        <TypeWrapper>
          <CardWrapper>
            <Link to='/signup/user'>
              <CardBody>
                <EmojiText>🙋‍♂️</EmojiText>
                <RoleText>일반 회원</RoleText>
                <DescriptionText>PT를 받고 싶어요!</DescriptionText>
              </CardBody>
            </Link>
          </CardWrapper>

          <CardWrapper>
            <Link to='/signup/trainer'>
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0;
`;

const TitleText = styled(Text)`
  margin: 0 40px;
`;

const TypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

const CardWrapper = styled(Card)`
  width: 250px;
  height: 300px;
  min-width: 170px;
  margin: 0 20px;
`;

const EmojiText = styled(Text)`
  font-size: 70px;
  text-align: center;
  margin-top: 35px;
`;

const RoleText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #2c2c2c;
  margin-top: 6px;
`;

const DescriptionText = styled(Text)`
  font-size: 14px;
  text-align: center;
  color: #9e9e9e;
`;
