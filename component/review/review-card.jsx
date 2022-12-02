import styled from 'styled-components';
import useThemeState from '@/hooks/useThemeState';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import test from '@/public/png/review/before-after/test.jpeg';
import Font from '@/component/common/font';

const ReviewCard = () => {
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      <ImageWrapper width={18} height={20}>
        <Image src={test} alt="test" />
      </ImageWrapper>

      <Wrapper>
        <div>
          <Font fontSize="1.6rem" fontWeight={500}>
            박*우 회원님
          </Font>

          <Tag>바디프로필</Tag>
        </div>

        <Font fontSize="1.2rem" fontWeight={500}>
          지점 : 2호점 부천 범안점 <span>확인하기</span>
        </Font>

        <Font fontSize="1.2rem" fontWeight={500}>
          담당 트레이너 : 박상우 <span>확인하기</span>
        </Font>
      </Wrapper>
    </Frame>
  );
};

export default ReviewCard;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#fff'};
  border-radius: 5px;

  img {
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: #b49445;
  color: #fff;
  font-weight: 500;
  padding: 0.2rem 1rem;
  white-space: nowrap;
  border-radius: 5px;
`;
