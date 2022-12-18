import React, { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ImageWrapper from '@/component/common/image-wrapper';
import { useDraggable } from 'react-use-draggable-scroll';

const Carousel = ({ data, width, height }) => {
  const scrollRef = useRef();
  const { events: scrollWrapperEvents } = useDraggable(scrollRef, {
    isMounted: true,
    safeDisplacement: 11,
  });

  return (
    <Frame
      ref={scrollRef}
      {...scrollWrapperEvents}
      isCenter={data?.images?.length === 1}
    >
      <div className="carousel-wrapper">
        {data?.images?.map((item, index) => {
          return (
            <CustomImageWrapper key={index} width={width} height={height}>
              <Image
                src={item}
                alt={`center_${index + 1}`}
                priority={true}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </CustomImageWrapper>
          );
        })}
      </div>
    </Frame>
  );
};

export default Carousel;

const Frame = styled.div`
  justify-content: ${props => (props.isCenter ? 'center' : '')};

  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  .carousel-wrapper {
    display: flex;
    gap: 2rem;
  }
`;

const CustomImageWrapper = styled(ImageWrapper)`
  img {
    border-radius: 5px;
  }
`;
