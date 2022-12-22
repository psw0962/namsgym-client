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

  return (
    <Frame
      themeState={themeState}
      onClick={e => {
        e.stopPropagation();
        window.open(`${data?.detailUrl}`);
      }}
    >
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

        <ActiveTag active={data?.active ? true : false}>
          {data?.active ? '진행중' : '종료'}
        </ActiveTag>
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

      {data?.active && (
        <ContactWrapper>
          <CustomAtag
            themeState={themeState}
            href={data?.kakaoTalkUrl}
            target="_blank"
            rel="noreferrer"
          >
            {`카카오톡 문의 >`}
          </CustomAtag>

          <Font fontSize="1.4rem" fontWeight={500}>
            <a href={`tel:${data?.phone}`}>*전화 문의 ({data?.phone})</a>
          </Font>
        </ContactWrapper>
      )}

      <Font
        fontSize="2rem"
        fontWeight={500}
        textDecoration="underline"
        onClick={e => {
          e.stopPropagation();
          setReviewFilterState(prev => {
            return {
              ...prev,
              tabState: data.tag,
            };
          });

          router.push('/review');
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

const ActiveTag = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  background-color: ${props => (props.active ? '#b49445' : '#acacac')};
`;

const CustomAtag = styled.a`
  font-size: 1.4rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
`;
