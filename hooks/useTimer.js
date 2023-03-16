import { useEffect } from 'react';

const useTimer = (timer, setTimer, flag, setFlag) => {
  console.log('hereflag', flag);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (flag === 0) {
        setTimer(0);
        return;
      }

      // timer 10에서 시작 -> 준비!
      if (parseInt(timer) > 0) {
        setTimer(parseInt(timer) - 1);
      }

      if (parseInt(timer) === 0) {
        setFlag(flag - 1);

        // 첫 번째 세트 타이머
        setTimer(40);
      }

      // 운동 시간
      if (flag === 2) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20); // 첫 번째 휴식 시간 세트 타이머
        }
      }

      // 휴식 시간
      if (flag === 1) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, flag]);

  return;
};

export default useTimer;
