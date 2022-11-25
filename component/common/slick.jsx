import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWrapper from './image-wrapper';
import Font from '@/component/common/font';
import { useRouter } from 'next/router';

const Slick = ({ data }) => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
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
    beforeChange: (current, next) => {
      handleBeforeChange();
      setActiveSlide({ activeSlide: next });
    },
    afterChange: current => {
      handleAfterChange();
      setActiveSlide2({ activeSlide2: current });
    },
  };

  return (
    <Frame>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <CustomImageWrapper
              key={item.id}
              height={30}
              onClick={e => {
                if (dragging) {
                  e.stopPropagation();
                  return;
                }
                console.log(item.id);
                // router.push(`/`);
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
              <Font fontSize="12px" fontWeight={700}>
                {!activeSlide2 ? 1 : activeSlide2.activeSlide2 + 1} /{' '}
                {data?.length}
              </Font>

              <Image
                src={item.src}
                alt={`slick${index}`}
                priority={true}
                quality={100}
                loading="eager"
              />
            </CustomImageWrapper>
          );
        })}
      </Slider>
    </Frame>
  );
};

export default Slick;

const Frame = styled.div`
  border-radius: 20px;
`;

const CustomImageWrapper = styled(ImageWrapper)`
  position: relative;

  p {
    color: #404040;
    position: absolute;
    top: 15px;
    right: 20px;
  }

  img {
    border-radius: 20px;
  }
`;
