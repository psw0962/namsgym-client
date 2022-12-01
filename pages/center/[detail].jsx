import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Font from '@/component/common/font';
import makeCenterData from '@/function/makeCenterData';
import CenterTab from '@/component/center/center-tab';
import CenterInfo from '@/component/center/center-info';
import CenterTrainers from '@/component/center/center-trainers';

const CenterDetail = () => {
  const router = useRouter();
  const pathName = router.query.detail;
  const [centerData, setCenterData] = useState({});
  const [tabState, setTabState] = useState('지점안내');

  useEffect(() => {
    makeCenterData(pathName, setCenterData);
  }, [pathName, centerData]);

  return (
    <Frame>
      <Font fontSize="2rem" fontWeight={700}>
        {centerData?.centerName}
      </Font>

      <CenterTab tabState={tabState} setTabState={setTabState} />

      {tabState === '지점안내' && <CenterInfo centerData={centerData} />}
      {tabState === '트레이너' && <CenterTrainers centerData={centerData} />}
    </Frame>
  );
};

export default CenterDetail;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;
