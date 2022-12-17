import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Font from '@/component/common/font';
import makeCenterData from '@/function/makeCenterData';
import CenterTab from '@/component/center/center-tab';
import CenterInfo from '@/component/center/center-info';
import CenterTrainers from '@/component/center/center-trainers';
import useThemeState from '@/hooks/useThemeState';

const CenterDetail = () => {
  const router = useRouter();
  const pathName = router.query.detail;
  const [centerData, setCenterData] = useState({});
  const [tabState, setTabState] = useState('지점 안내');
  const { themeState } = useThemeState();

  useEffect(() => {
    makeCenterData(pathName, setCenterData);
  }, []);

  return (
    <Frame>
      <Font fontSize="2rem" fontWeight={500}>
        {centerData?.centerName}{' '}
        <CustomSpan>
          <a href={`tel:${centerData?.phone}`}>
            *전화 문의 ({centerData?.phone})
          </a>
        </CustomSpan>
      </Font>

      <Wrapper>
        <CustomAtag
          themeState={themeState}
          href={centerData?.kakaoTalkUrl}
          target="_blank"
          rel="noreferrer"
        >
          {`카카오톡 문의 >`}
        </CustomAtag>

        <CustomAtag
          themeState={themeState}
          href={centerData?.naverPlaceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {`무료 PT체험권 신청 >`}
        </CustomAtag>
      </Wrapper>

      <CenterTab tabState={tabState} setTabState={setTabState} />

      {tabState === '지점 안내' && <CenterInfo centerData={centerData} />}
      {tabState === '트레이너' && <CenterTrainers centerData={centerData} />}
    </Frame>
  );
};

export default CenterDetail;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomAtag = styled.a`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const CustomSpan = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
