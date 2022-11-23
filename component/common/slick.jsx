import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWrapper from './image-wrapper';
import Font from '@/component/common/font';

const Slick = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide({ activeSlide: next }),
    afterChange: current => setActiveSlide2({ activeSlide2: current }),
  };

  return (
    <Frame>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <CustomImageWrapper
              className="slick-image-wrapper"
              key={item.id}
              height={30}
              onClick={() => console.log(item.id)}
            >
              <Font fontSize="10px">
                {!activeSlide2 ? 1 : activeSlide2.activeSlide2 + 1} /{' '}
                {data?.length}
              </Font>

              <Image
                className="slick-image"
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
