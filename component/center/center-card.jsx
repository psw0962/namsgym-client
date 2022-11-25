import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import { useRouter } from 'next/router';
import useThemeState from '@/hooks/useThemeState';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from 'public/png/logo.png';

const CenterCard = ({ id, thumbNail, centerName, address }) => {
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

        router.push(`/center/${id}`);
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
          {thumbNail?.map((item, index) => {
            return (
              <Image
                key={index}
                src={item || logo}
                alt={`slick${index}`}
                priority={true}
                quality={100}
                loading="eager"
                width={300}
                height={200}
              />
            );
          })}
        </CustomSlick>
      </div>

      <Test>
        <Font fontSize="1.6rem" fontWeight={700}>
          {centerName}
        </Font>

        <Font fontSize="1.2rem" fontWeight={700}>
          {address}
        </Font>
      </Test>
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
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-30px);
    transition: all 0.2s;
  }

  img {
    border-radius: 10px;
  }
`;

const CustomSlick = styled(Slick)`
  display: flex;
  justify-content: center;
`;

const Test = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
