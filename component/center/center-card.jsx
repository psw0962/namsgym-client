import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import { useRouter } from 'next/router';
import useThemeState from '@/hooks/useThemeState';
import Slick from 'react-slick';
import ImageWrapper from '@/component/common/image-wrapper';

const CustomNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '2px',
        zIndex: '10',
      }}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};

const CustomPrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        left: '2px',
        zIndex: '10',
      }}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};

const CenterCard = ({ data }) => {
  const router = useRouter();
  const { themeState } = useThemeState();
  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    draggable: true,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    beforeChange: () => {
      handleBeforeChange();
    },
    afterChange: () => {
      handleAfterChange();
    },
  };

  return (
    <Frame
      themeState={themeState}
      onClick={e => {
        if (dragging) {
          e.stopPropagation();
          return;
        }

        router.push(`/center/${data?.id}`);
      }}
      onMouseMove={() => {
        setDragging(true);
      }}
      onMouseDown={() => {
        setDragging(false);
      }}
      onTouchMove={() => {
        setDragging(true);
      }}
      onTouchStart={() => {
        setDragging(false);
      }}
    >
      <div style={{ width: '17.5rem' }}>
        <CustomSlick {...settings}>
          {data?.thumbNail?.map((item, index) => {
            return (
              <ImageWrapper key={`centerCard${index}`} width={30} height={20}>
                <Image
                  src={item}
                  alt={`slick${index}`}
                  priority={true}
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </ImageWrapper>
            );
          })}
        </CustomSlick>
      </div>

      <CenterInfoWrapper>
        <Font fontSize="1.6rem" fontWeight={500}>
          {data?.centerName}
        </Font>

        <Line themeState={themeState} />

        <GotoDetail>{`지점 및 트레이너 안내 >`}</GotoDetail>

        <PhoneAtag
          href={`tel:${data?.phone}`}
          onClick={e => e.stopPropagation()}
        >
          전화 문의 ({data?.phone})
        </PhoneAtag>

        <Wrapper>
          <CustomAtag
            themeState={themeState}
            href={data?.kakaoTalkUrl}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {`카카오톡 문의 >`}
          </CustomAtag>

          <CustomAtag
            themeState={themeState}
            href={data?.naverPlaceUrl}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {`무료 PT체험권 신청 >`}
          </CustomAtag>
        </Wrapper>
      </CenterInfoWrapper>
    </Frame>
  );
};

export default CenterCard;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#fff'};
  border-radius: 5px;
  cursor: pointer;

  img {
    border-radius: 5px;
  }
`;

const CustomSlick = styled(Slick)`
  display: flex;
  justify-content: center;

  .slick-list {
    border-radius: 5px;
  }

  .slick-slider {
    touch-action: 'auto';
  }
`;

const CenterInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
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

const PhoneAtag = styled.a`
  font-size: 1.4rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GotoDetail = styled.div`
  font-size: 1.4rem;
  text-decoration: underline;
`;

const Line = styled.div`
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
`;
