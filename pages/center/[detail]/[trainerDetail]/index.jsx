import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import makeTrainerData from '@/function/makeTrainerData';
import styled from 'styled-components';
import Button from '@/component/common/button';
import Font from '@/component/common/font';
import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('@/component/common/carousel'), {
  suspense: true,
});

const TrainerDetail = () => {
  const router = useRouter();
  const centerNumber = router.query.detail;
  const trainerNumber = router.query.trainerDetail;
  const [trainerData, setTrainerData] = useState({});

  useEffect(() => {
    makeTrainerData(centerNumber, trainerNumber, setTrainerData);
  }, [centerNumber, trainerNumber]);

  return (
    <div>
      {trainerData === undefined && (
        <Unregistered>
          <Font fontSize="1.8rem" margin="0 0 4rem 0">
            현재 등록되어 있지 않은 트레이너입니다.
          </Font>

          <Button color="yellow" size="medium" onClick={() => router.back()}>
            뒤로가기
          </Button>

          <Button color="white" size="medium" onClick={() => router.push('/')}>
            홈으로
          </Button>
        </Unregistered>
      )}

      <Font fontSize="2rem" margin="0 0 4rem 0">
        {trainerData?.name} 이력 사항
      </Font>

      <Carousel data={trainerData} width={35} height={40} />
    </div>
  );
};

export default TrainerDetail;

const Unregistered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
