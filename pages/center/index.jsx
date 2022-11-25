import styled from 'styled-components';
import CenterCard from '@/component/center/center-card';
import { centerCardData } from '@/constant/center/index';
import Button from '@/component/common/button';
import React from 'react';
import KaKaoMap from '@/component/common/kakao-map';
import Font from '@/component/common/font';
import FadeIn from 'react-fade-in';

const Center = () => {
  return (
    <React.Fragment>
      <Font fontSize="2rem" margin="0 0 2rem 0">
        센터소개
      </Font>

      <FadeIn>
        <CenterCardFrame>
          {centerCardData.map(item => {
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

      <ButtonWrapper>
        <Button size="large" color="yellow">
          더보기
        </Button>
      </ButtonWrapper>

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
          { content: '1호점 안산 신길점', latlng: '안산 신길동710-2' },
          { content: '2호점 부천 범안점', latlng: '부천 범박동 155-2' },
          { content: '3호점 구로 오류점', latlng: '구로 오류로70' },
          { content: '4호점 구로 천왕점', latlng: '구로 천왕로 36' },
          { content: '5호점 시흥 능곡점', latlng: '시흥시 능곡동 747' },
          {
            content: '6호점 부천 옥길점',
            latlng: '부천 옥길동 745-5 퀸즈파크 C동',
          },
          { content: '7호점 안산 고잔점', latlng: '안산시 단원구 원고잔로 17' },
          {
            content: '8호점 군포 산본점',
            latlng: '군포시 산본동 고산로691 도율빌딩',
          },
          { content: '9호점 시흥 은행점', latlng: '경기도 시흥시 대은로 80' },
          {
            content: '10호점 시흥 월곶점',
            latlng: '경기도 시흥시 월곶중앙로 49',
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
