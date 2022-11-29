import styled from 'styled-components';
import CenterCard from '@/component/center/center-card';
import { centerCardData } from '@/constant/center/index';
import Button from '@/component/common/button';
import React, { useState } from 'react';
import KaKaoMap from '@/component/common/kakao-map';
import Font from '@/component/common/font';
import FadeIn from 'react-fade-in';

const Center = () => {
  const [centerDataLength, setCenterDataLength] = useState(5);

  const onClickMoreButton = () => {
    setCenterDataLength(prev => prev + 5);
  };

  return (
    <React.Fragment>
      <Font fontSize="2rem" margin="0 0 2rem 0">
        센터소개
      </Font>

      <FadeIn>
        <CenterCardFrame>
          {centerCardData.slice(0, centerDataLength).map(item => {
            return (
              <CenterCard
                key={item.id}
                id={item.id}
                thumbNail={item.thumbNail}
                centerName={item.centerName}
                address={item.address}
              />
            );
          })}
        </CenterCardFrame>
      </FadeIn>

      {centerCardData.length > centerDataLength && (
        <ButtonWrapper onClick={() => onClickMoreButton()}>
          <Button size="large" color="yellow">
            더보기
          </Button>
        </ButtonWrapper>
      )}

      <Font fontSize="2rem" margin="10rem 0 2rem 0">
        남스짐 전체 지점현황{' '}
        <CustomSpan>
          *2022 12월 기준 총{' '}
          <span style={{ color: '#B49445' }}>{centerCardData?.length}호점</span>{' '}
          운영중
        </CustomSpan>
      </Font>

      <KaKaoMap
        locationData={[
          {
            content: centerCardData[0].centerName,
            latlng: centerCardData[0].address,
          },
          {
            content: centerCardData[1].centerName,
            latlng: centerCardData[1].address,
          },
          {
            content: centerCardData[2].centerName,
            latlng: centerCardData[2].address,
          },
          {
            content: centerCardData[3].centerName,
            latlng: centerCardData[3].address,
          },
          {
            content: centerCardData[4].centerName,
            latlng: centerCardData[4].address,
          },
          {
            content: centerCardData[5].centerName,
            latlng: centerCardData[5].address,
          },
          {
            content: centerCardData[6].centerName,
            latlng: centerCardData[6].address,
          },
          {
            content: centerCardData[7].centerName,
            latlng: centerCardData[7].address,
          },
          {
            content: centerCardData[8].centerName,
            latlng: centerCardData[8].address,
          },
          {
            content: centerCardData[9].centerName,
            latlng: centerCardData[9].address,
          },
        ]}
        margin="0"
      />
    </React.Fragment>
  );
};

export default Center;

const CenterCardFrame = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const CustomSpan = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
