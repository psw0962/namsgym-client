import React, { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ImageWrapper from '@/component/common/image-wrapper';
import { useDraggable } from 'react-use-draggable-scroll';

const Carousel = ({ data, width, height, padding }) => {
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
      padding={padding}
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
  padding: ${props => (props.padding ? props.padding : '')};

  display: flex;
  justify-content: ${props => (props.isCenter ? 'center' : '')};
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
