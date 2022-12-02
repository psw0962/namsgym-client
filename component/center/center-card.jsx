import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import { useRouter } from 'next/router';
import useThemeState from '@/hooks/useThemeState';
import Slick from 'react-slick';
import ImageWrapper from '@/component/common/image-wrapper';

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
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    draggable: true,

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

        <Font fontSize="1.2rem" fontWeight={500}>
          {data?.address}
        </Font>

        <Font fontSize="1.2rem" fontWeight={500}>
          {data?.phone}
        </Font>

        <Font fontSize="1.2rem" fontWeight={500}>
          *운영시간 : {data?.operatingTime}
        </Font>
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
`;

const CenterInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
