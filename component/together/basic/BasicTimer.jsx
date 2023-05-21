import { useRouter } from 'node_modules/next/router';
import React, { useEffect } from 'react';
import TogetherFrame from '../TogetherFrame';

const BasicTimer = ({ flag, setFlag }) => {
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      // 시작
      if (flag.flagNumber === 72) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 71) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag.flagNumber === 70) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 69) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag.flagNumber === 68) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 67) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag.flagNumber === 66) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 65) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag.flagNumber === 64) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 63) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag.flagNumber === 62) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 61) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag.flagNumber === 60) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 59) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag.flagNumber === 58) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 57) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag.flagNumber === 56) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 55) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag.flagNumber === 54) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 53) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag.flagNumber === 52) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 51) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '1ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag.flagNumber === 50) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '1ROUND',
              current: '12set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag.flagNumber === 49) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 120,
              round: '1ROUND',
              current: '수분 충전!🚰💧',
              next: '2ROUND',
            };
          });
        }
      }

      if (flag.flagNumber === 48) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 47) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag.flagNumber === 46) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 45) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag.flagNumber === 44) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 43) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag.flagNumber === 42) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 41) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag.flagNumber === 40) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 39) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag.flagNumber === 38) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 37) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag.flagNumber === 36) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 35) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag.flagNumber === 34) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 33) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag.flagNumber === 32) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 31) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag.flagNumber === 30) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 29) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag.flagNumber === 28) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 27) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '2ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag.flagNumber === 26) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '2ROUND',
              current: '12set',
              next: '수분 충전!🚰💧',
            };
          });
        }
      }

      if (flag.flagNumber === 25) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 120,
              round: '2ROUND',
              current: '수분 충전!🚰💧',
              next: '3ROUND',
            };
          });
        }
      }

      if (flag.flagNumber === 24) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '1set',
              next: '1set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 23) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '1set 휴식',
              next: '2set',
            };
          });
        }
      }

      if (flag.flagNumber === 22) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '2set',
              next: '2set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 21) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '2set 휴식',
              next: '3set',
            };
          });
        }
      }

      if (flag.flagNumber === 20) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '3set',
              next: '3set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 19) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '3set 휴식',
              next: '4set',
            };
          });
        }
      }

      if (flag.flagNumber === 18) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '4set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 17) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '이동하세요!',
              next: '5set',
            };
          });
        }
      }

      if (flag.flagNumber === 16) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '5set',
              next: '5set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 15) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '5set 휴식',
              next: '6set',
            };
          });
        }
      }

      if (flag.flagNumber === 14) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '6set',
              next: '6set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 13) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '6set 휴식',
              next: '7set',
            };
          });
        }
      }

      if (flag.flagNumber === 12) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '7set',
              next: '7set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 11) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '7set 휴식',
              next: '8set',
            };
          });
        }
      }

      if (flag.flagNumber === 10) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '8set',
              next: '이동하세요!',
            };
          });
        }
      }

      if (flag.flagNumber === 9) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '이동하세요!',
              next: '9set',
            };
          });
        }
      }

      if (flag.flagNumber === 8) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '9set',
              next: '9set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 7) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '9set 휴식',
              next: '10set',
            };
          });
        }
      }

      if (flag.flagNumber === 6) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '10set',
              next: '10set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 5) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '10set 휴식',
              next: '11set',
            };
          });
        }
      }

      if (flag.flagNumber === 4) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '11set',
              next: '11set 휴식',
            };
          });
        }
      }

      if (flag.flagNumber === 3) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 20,
              round: '3ROUND',
              current: '11set 휴식',
              next: '12set',
            };
          });
        }
      }

      if (flag.flagNumber === 2) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          setFlag(() => {
            return {
              flagNumber: flag.flagNumber - 1,
              timer: 40,
              round: '3ROUND',
              current: '12set',
              next: 'DONE!',
            };
          });
        }
      }

      if (flag.flagNumber === 1) {
        if (parseInt(flag.timer) > 0) {
          setFlag(() => {
            return {
              ...flag,
              timer: flag.timer - 1,
            };
          });
        }

        if (parseInt(flag.timer) === 0) {
          router.push('/together/complete');
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [flag.flagNumber, flag.timer]);

  return <TogetherFrame flag={flag} setFlag={setFlag} />;
};

export default BasicTimer;
