import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import makeTrainerData from '@/function/makeTrainerData';

const TrainerDetail = () => {
  const router = useRouter();
  const centerNumber = router.query.detail;
  const trainerNumber = router.query.trainerDetail;
  const [trainerData, setTrainerData] = useState({});

  useEffect(() => {
    makeTrainerData(centerNumber, trainerNumber, setTrainerData);
  }, [centerNumber, trainerNumber, trainerData]);

  return (
    <div>
      {/* trainerData가 빈 객체면 */}

      <div>{trainerData?.name}</div>
    </div>
  );
};

export default TrainerDetail;
