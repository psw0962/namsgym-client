import { useEffect, useState } from 'react';

const useTimer = (
  seconds,
  setSeconds,
  restTime,
  setRestTime,
  flag,
  setFlag,
  activeNumber,
  restNumber,
) => {
  useEffect(() => {
    if (flag === 0) {
      return;
    }

    const countDown = setInterval(() => {
      // 운동 시간
      if (parseInt(seconds) === 0) {
        setRestTime(restNumber);

        return;
      }

      // 휴식 시간
      if (parseInt(restTime) === 0) {
        setSeconds(activeNumber);
        setFlag(flag - 1);

        return;
      }

      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }

      console.log('check', seconds);
      if (seconds === 0 && parseInt(restTime) > 0) {
        setRestTime(parseInt(restTime) - 1);
      }
    }, 1000);

    return () => clearInterval(countDown);
  }, [seconds, restTime]);

  // 휴식 시간
  // useEffect(() => {
  //   const restTimeCountDown = setInterval(() => {
  //     console.log('check', seconds);

  //     if (parseInt(restTime) === 0) {
  //       setSeconds(activeNumber);
  //       setFlag(flag - 1);

  //       return;
  //     }

  //     if (seconds === 0 && parseInt(restTime) > 0) {
  //       setRestTime(parseInt(restTime) - 1);
  //     }
  //   }, 1000);

  //   return () => clearInterval(restTimeCountDown);
  // }, [restTime]);

  return;
};

export default useTimer;
