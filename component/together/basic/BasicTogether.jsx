import { useRouter } from 'node_modules/next/router';
import React, { useEffect } from 'react';
import TogetherFrame from '../TogetherFrame';

const BasicTogether = ({
  flag,
  setFlag,
  timer,
  setTimer,
  item,
  flagName,
  setFlagName,
}) => {
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      // timer 10에서 시작 -> 준비!
      if (parseInt(timer) > 0) {
        setTimer(parseInt(timer) - 1);
      }

      if (parseInt(timer) === 0) {
        setFlag(flag - 1);
        setTimer(40);
        setFlagName('1set');
      }

      // 시작
      if (flag === 71) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('1set 휴식');
        }
      }

      if (flag === 70) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('2set');
        }
      }

      if (flag === 69) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('2set 휴식');
        }
      }

      if (flag === 68) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('3set');
        }
      }

      if (flag === 67) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('3set 휴식');
        }
      }

      if (flag === 66) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('4set');
        }
      }

      if (flag === 65) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('4set 휴식');
        }
      }

      if (flag === 64) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('5set');
        }
      }

      if (flag === 63) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('5set 휴식');
        }
      }

      if (flag === 62) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('6set');
        }
      }

      if (flag === 61) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('6set 휴식');
        }
      }

      if (flag === 60) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('7set');
        }
      }

      if (flag === 59) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('7set 휴식');
        }
      }

      if (flag === 58) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('8set');
        }
      }

      if (flag === 57) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('8set 휴식');
        }
      }

      if (flag === 56) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('9set');
        }
      }

      if (flag === 55) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('9set 휴식');
        }
      }

      if (flag === 54) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('10set');
        }
      }

      if (flag === 53) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('10set 휴식');
        }
      }

      if (flag === 52) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('11set');
        }
      }

      if (flag === 51) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('11set 휴식');
        }
      }

      if (flag === 50) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('12set');
        }
      }

      if (flag === 49) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(120);
          setFlagName('HYDRATION!');
        }
      }

      if (flag === 48) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('13set');
        }
      }

      if (flag === 47) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('13set 휴식');
        }
      }

      if (flag === 46) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('14set');
        }
      }

      if (flag === 45) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('14set 휴식');
        }
      }

      if (flag === 44) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('15set');
        }
      }

      if (flag === 43) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('15set 휴식');
        }
      }

      if (flag === 42) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('16set');
        }
      }

      if (flag === 41) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('16set 휴식');
        }
      }

      if (flag === 40) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('17set');
        }
      }

      if (flag === 39) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('17set 휴식');
        }
      }

      if (flag === 38) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('18set');
        }
      }

      if (flag === 37) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('18set 휴식');
        }
      }

      if (flag === 36) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('19set');
        }
      }

      if (flag === 35) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('19set 휴식');
        }
      }

      if (flag === 34) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('20set');
        }
      }

      if (flag === 33) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('20set 휴식');
        }
      }

      if (flag === 32) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('21set');
        }
      }

      if (flag === 31) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('21set 휴식');
        }
      }

      if (flag === 30) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('22set');
        }
      }

      if (flag === 29) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('22set 휴식');
        }
      }

      if (flag === 28) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('23set');
        }
      }

      if (flag === 27) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('23set 휴식');
        }
      }

      if (flag === 26) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('24set');
        }
      }

      if (flag === 25) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(120);
          setFlagName('HYDRATION!');
        }
      }

      if (flag === 24) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('25set');
        }
      }

      if (flag === 23) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('25set 휴식');
        }
      }

      if (flag === 22) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('26set');
        }
      }

      if (flag === 21) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('26set 휴식');
        }
      }

      if (flag === 20) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('27set');
        }
      }

      if (flag === 19) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('27set 휴식');
        }
      }

      if (flag === 18) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('28set');
        }
      }

      if (flag === 17) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('28set 휴식');
        }
      }

      if (flag === 16) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('29set');
        }
      }

      if (flag === 15) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('29set 휴식');
        }
      }

      if (flag === 14) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('30set');
        }
      }

      if (flag === 13) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('30set 휴식');
        }
      }

      if (flag === 12) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('31set');
        }
      }

      if (flag === 11) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('31set 휴식');
        }
      }

      if (flag === 10) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('32set');
        }
      }

      if (flag === 9) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('32set 휴식');
        }
      }

      if (flag === 8) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('33set');
        }
      }

      if (flag === 7) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('33set 휴식');
        }
      }

      if (flag === 6) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('34set');
        }
      }

      if (flag === 5) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('34set 휴식');
        }
      }

      if (flag === 4) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('35set');
        }
      }

      if (flag === 3) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(20);
          setFlagName('35set 휴식');
        }
      }

      if (flag === 2) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(40);
          setFlagName('36set');
        }
      }

      if (flag === 1) {
        if (parseInt(timer) > 0) {
          setTimer(parseInt(timer) - 1);
        }

        if (parseInt(timer) === 0) {
          setFlag(flag - 1);
          setTimer(0);
          router.push('/together/complete');
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, flag]);

  return (
    <TogetherFrame
      flag={flag}
      setFlag={setFlag}
      timer={timer}
      setTimer={setTimer}
      item={item}
      flagName={flagName}
    />
  );
};

export default BasicTogether;
