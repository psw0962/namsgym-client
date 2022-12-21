import Image from 'next/image';
import styled from 'styled-components';
import useThemeState from '@/hooks/useThemeState';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import { useRecoilState } from 'recoil';
import { reviewFilterStateAtom } from 'atoms';
import { useRouter } from 'next/router';

const EventCard = ({ data }) => {
  const router = useRouter();
  const { themeState } = useThemeState();
  const [reviewFilterState, setReviewFilterState] = useRecoilState(
    reviewFilterStateAtom,
  );

  const onClickEventCard = data => {
    setReviewFilterState(prev => {
      return {
        ...prev,
        tabState: data.tag,
      };
    });

    router.push('/review');
  };

  return (
    <Frame themeState={themeState}>
      <ImageWrapper height={30}>
        <Image
          src={data?.imageUrl}
          alt={`event${data?.id}`}
          priority={true}
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </ImageWrapper>

      <TagWrapper>
        <Font fontSize="2.4rem" fontWeight={500}>
          {data?.title}
        </Font>

        <StatusTag active={data?.status ? true : false}>
          {data?.status ? '진행중' : '종료'}
        </StatusTag>
      </TagWrapper>

      <Font fontSize="1.6rem" fontWeight={500} color="#acacac">
        {data?.subTitle}
      </Font>

      <Wrapper>
        <Font fontSize="1.6rem" fontWeight={500} color="#acacac">
          시작일 : {data?.createdAt}
        </Font>

        <Font fontSize="1.6rem" fontWeight={500} color="#acacac">
          종료일 : {data?.endDate}
        </Font>
      </Wrapper>

      <Font
        fontSize="2rem"
        fontWeight={500}
        textDecoration="underline"
        margin="2rem 0 0 0"
        onClick={e => {
          e.stopPropagation();
          onClickEventCard(data);
        }}
      >
        {`상담 신청 >`}
      </Font>

      <Font
        fontSize="2rem"
        fontWeight={500}
        textDecoration="underline"
        onClick={e => {
          e.stopPropagation();
          onClickEventCard(data);
        }}
      >
        {`${data?.tag} 리뷰 보러가기 >`}
      </Font>
    </Frame>
  );
};

export default EventCard;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#fff'};

  cursor: pointer;

  img {
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StatusTag = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  background-color: ${props => (props.active ? '#b49445' : '#acacac')};
`;
