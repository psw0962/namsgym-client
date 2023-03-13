import { useEffect, useState } from 'react';
import { useRouter } from 'node_modules/next/router';
import TogetherHome from './home';
import Program from './program';
import useTimer from '@/hooks/useTimer';

const Together = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  const [restTime, setRestTime] = useState(3);
  const [flag, setFlag] = useState(2);

  // useTimer(seconds, setSeconds, restTime, setRestTime, flag, setFlag, 5, 3);

  // useEffect(() => {
  //   console.log('seconds', seconds);
  //   console.log('restTime', restTime);
  // }, []);

  return (
    <>
      {router?.pathname === '/together' && <TogetherHome />}
      {router?.pathname === '/together/program' && <Program />}
    </>
  );
};

export default Together;
