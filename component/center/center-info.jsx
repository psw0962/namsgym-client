import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { useDraggable } from 'react-use-draggable-scroll';
import KaKaoMap from '@/component/common/kakao-map';
import Font from '@/component/common/font';
import Button from '@/component/common/button';

const CenterInfo = ({ centerData }) => {
  const scrollRef = useRef();
  const { events: scrollWrapperEvents } = useDraggable(scrollRef, {
    isMounted: true,
    safeDisplacement: 11,
  });

  const inputRef = useRef('');
  const [startPoint, setStartPoint] = useState('');

  const routeSearch = () => {
    setStartPoint(inputRef.current.value);
  };

  return (
    <React.Fragment>
      <Font fontSize="2rem" margin="1rem 0 1rem 0">
        시설 안내{' '}
      </Font>

      <CustomPre>{`*운영시간 ${centerData?.operatingTime}`}</CustomPre>

      <Frame ref={scrollRef} {...scrollWrapperEvents}>
        <div className="carousel-wrapper">
          {centerData?.centerImages?.map((item, index) => {
            return (
              <CustomImageWrapper key={index} width={35} height={40}>
                <Image
                  src={item}
                  alt={`center1_${index + 1}`}
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

      {Object.keys(centerData).length > 0 && (
        <React.Fragment>
          <Font fontSize="2rem" margin="3rem 0 1rem 0">
            위치 안내{' '}
            <CustomSpan>{`*${centerData?.centerName} (${centerData?.address})`}</CustomSpan>
          </Font>

          <SearchWrapper>
            <input
              type="text"
              ref={inputRef}
              placeholder="출발지를 입력해주세요."
              onKeyUp={e => {
                if (e.key === 'Enter') {
                  routeSearch();
                }
              }}
            />
            <Button color="yellow" onClick={routeSearch}>
              경로탐색
            </Button>
          </SearchWrapper>

          <KaKaoMap
            locationData={[
              { content: centerData?.centerName, latlng: centerData?.address },
            ]}
            refreshData={startPoint}
            margin="0"
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CenterInfo;

const Frame = styled.div`
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

const SearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    padding: 0.5rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }
`;

const CustomSpan = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const CustomImageWrapper = styled(ImageWrapper)`
  img {
    border-radius: 5px;
  }
`;

const CustomPre = styled.pre`
  font-size: 1.2rem;
  line-height: 15px;
  margin-bottom: 0.5rem;
`;
