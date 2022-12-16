import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useThemeState from '@/hooks/useThemeState';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import Slick from 'react-slick';
import Line from '@/component/common/line';
import { useRecoilState } from 'recoil';
import { reviewSearchKeyWordStateAtom } from 'atoms';
import { useRouter } from 'next/router';

const TrainerCard = ({ data, centerName }) => {
  const router = useRouter();
  const pathName = router?.query?.detail;
  const { themeState } = useThemeState();
  const [playScroll, setPlayScroll] = useState('play');
  const [reviewSearchKeyWordState, setReviewSearchKeyWordState] =
    useRecoilState(reviewSearchKeyWordStateAtom);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    draggable: true,
  };

  const goToDetail = name => {
    const replaceName = name.slice(0, 3);
    router.push(`/center/${pathName}/${replaceName}`);
  };

  const goToReview = name => {
    setReviewSearchKeyWordState(name);
    router.push('/review');
  };

  return (
    <Frame themeState={themeState}>
      <ProfileWrapper>
        <LogoFrame>
          <LogoFont color="#b49445" fontSize="1rem">
            {`NAM'S`} <br /> GYM
          </LogoFont>
        </LogoFrame>

        <ProfileFontWrapper>
          <Font fontSize="1.6rem" fontWeight={500}>
            {data?.name}
          </Font>

          <div style={{ width: '10rem' }}>
            <Font
              fontSize="1rem"
              fontWeight={500}
              color="#acacac"
              lineHeight="11px"
            >
              {centerName}
            </Font>
          </div>
        </ProfileFontWrapper>
      </ProfileWrapper>

      <div style={{ width: '18rem' }}>
        <CustomSlick {...settings}>
          {data?.images?.map((image, index) => {
            return (
              <ImageWrapper key={`trainerCard${index}`} width={18} height={20}>
                <Image
                  src={image.src}
                  alt={`slick${index}`}
                  priority={true}
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  width={180}
                  height={200}
                />
              </ImageWrapper>
            );
          })}
        </CustomSlick>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'flex-end',
        }}
      >
        <Font
          themeState={themeState}
          fontSize="12px"
          fontWeight={500}
          margin="2rem 0 0 0"
        >
          자격사항
        </Font>

        <CustomButton
          themeState={themeState}
          onClick={() => {
            if (playScroll === 'play') {
              setPlayScroll('stop');
            } else {
              setPlayScroll('play');
            }
          }}
        >
          {playScroll === 'stop' ? 'play' : 'stop'}
        </CustomButton>
      </div>

      <CarouselFrame>
        <CarouselWrapper active={playScroll}>
          {data?.tags?.map((item, index) => {
            return (
              <div className="tag" key={index}>
                {item}
              </div>
            );
          })}
        </CarouselWrapper>
      </CarouselFrame>

      <CustomLine themeState={themeState} />

      <Font
        themeState={themeState}
        fontSize="1.4rem"
        fontWeight={500}
        margin="0 0 0 0"
        pointer={true}
        onClick={() => goToDetail(data?.name)}
      >
        {`이력 상세 보기 >`}
      </Font>

      <Font
        themeState={themeState}
        fontSize="1.4rem"
        fontWeight={500}
        margin="2rem 0 0 0"
        pointer={true}
        onClick={() => {
          goToReview(data.name);
        }}
      >
        {data?.name} {`리뷰 >`}
      </Font>
    </Frame>
  );
};

export default TrainerCard;

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

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;

  img {
    border-radius: 100%;
  }
`;

const ProfileFontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LogoFrame = styled.div`
  border-radius: 100%;
  padding: 1.25rem 0.6rem 1rem 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const LogoFont = styled(Font)`
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
`;

const CustomSlick = styled(Slick)`
  display: flex;
  justify-content: center;
  align-items: center;

  .slick-list {
    border-radius: 5px;
  }

  .slick-slider {
    touch-action: 'auto';
  }
`;

const CarouselFrame = styled.div`
  display: flex;
  width: 18rem;
  margin-top: 1rem;
  overflow-x: auto;
  overflow-x: hidden;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  @keyframes tag-scroll {
    from {
      transform: translateX(20%);
      -moz-transform: translateX(20%);
      -webkit-transform: translateX(20%);
      -o-transform: translateX(20%);
      -ms-transform: translateX(20%);
    }
    to {
      transform: translateX(-100%);
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      -o-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
    }
  }

  animation: tag-scroll 15s linear infinite;

  /* &:hover {
      -moz-animation-play-state: paused;
      -webkit-animation-play-state: paused;
      animation-play-state: paused;
    } */

  -moz-animation-play-state: ${props => {
    props.active === 'stop' ? 'paused' : 'running';
  }};
  -webkit-animation-play-state: ${props =>
    props.active === 'stop' ? 'paused' : 'running'};
  animation-play-state: ${props =>
    props.active === 'stop' ? 'paused' : 'running'};

  .tag {
    background-color: #b49445;
    color: #fff;
    font-weight: 500;
    padding: 1rem;
    white-space: nowrap;
    border-radius: 5px;
  }
`;

const CustomButton = styled.div`
  padding: 0.3rem;
  transform: translateY(1.4px);
  cursor: pointer;
  border-radius: 5px;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
`;

const CustomLine = styled(Line)`
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
`;
