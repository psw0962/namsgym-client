import styled from 'styled-components';
import CenterCard from '@/component/center/center-card';
import { centerCardData } from '@/constant/center/index';
import React from 'react';
import KaKaoMap from '@/component/common/kakao-map';
import Font from '@/component/common/font';

const Center = () => {
  return (
    <React.Fragment>
      <Font fontSize="2rem" margin="0 0 6rem 0">
        지점 안내
      </Font>

      <CenterCardFrame>
        {centerCardData.map(item => {
          return <CenterCard key={item.id} data={item} />;
        })}
      </CenterCardFrame>

      <Font fontSize="2rem" margin="10rem 0 2rem 0">
        남스짐 전체 지점 현황
        <CustomSpan>
          *2022 12월 기준 총
          <span style={{ color: '#B49445' }}>{centerCardData?.length}호점</span>
          운영중
        </CustomSpan>
      </Font>

      <KaKaoMap
        refreshData=""
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

const CustomSpan = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
