import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Slider from 'react-slick';
import ImageWrapper from './image-wrapper';
import Font from '@/component/common/font';

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
        background: 'black',
        paddingTop: '1.3px',
        borderRadius: '100%',
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
        background: 'black',
        paddingTop: '1.3px',
        borderRadius: '100%',
      }}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};

const Slick = ({ data, width, height, autoPlay = true, useArrow = false }) => {
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
    arrows: useArrow,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: autoPlay,
    draggable: true,
    beforeChange: (current, next) => {
      handleBeforeChange();
      setActiveSlide({ activeSlide: next });
    },
    afterChange: current => {
      handleAfterChange();
      setActiveSlide2({ activeSlide2: current });
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Frame>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <CustomImageWrapper
              key={item.id ? item.id : index}
              width={width}
              height={height}
              onClick={e => {
                if (dragging) {
                  e.stopPropagation();
                  return;
                }

                if (item.url) {
                  window.open(`${item.url}`);
                }
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
              <div className="slickPage">
                <Font fontSize="12px" fontWeight={500}>
                  {!activeSlide2 ? 1 : activeSlide2.activeSlide2 + 1} /{' '}
                  {data?.length}
                </Font>
              </div>

              <Image
                src={item?.src}
                alt={`slick${index}`}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
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
  border-radius: 5px;
`;

const CustomImageWrapper = styled(ImageWrapper)`
  position: relative;
  cursor: pointer;

  .slickPage {
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    color: #000;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  img {
    border-radius: 5px;
  }
`;
