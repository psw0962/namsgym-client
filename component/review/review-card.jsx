import styled from 'styled-components';
import useThemeState from '@/hooks/useThemeState';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';

const ReviewCard = ({ data }) => {
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      <ImageWrapper width={18} height={20}>
        <Image src={data.images[0]} alt="review-image" />
      </ImageWrapper>

      <Wrapper>
        <div>
          <Font fontSize="1.6rem" fontWeight={500}>
            {data.title}
          </Font>

          <Tag>{data.tag}</Tag>
        </div>

        <Font fontSize="1.2rem" fontWeight={500}>
          지점 : {data.center}
        </Font>

        <Font fontSize="1.2rem" fontWeight={500}>
          담당 트레이너 : {data.trainer}
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
  cursor: pointer;

  img {
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1.5rem;

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
