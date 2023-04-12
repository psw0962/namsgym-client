import { useRouter } from 'node_modules/next/router';
import React, { useEffect } from 'react';
import TogetherFrame from '../TogetherFrame';

const BasicTimer = ({ item, flag, setFlag }) => {
  const router = useRouter();
  console.log(flag);

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
              remaining: '35set',
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
              remaining: '35set',
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
              remaining: '34set',
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
              remaining: '34set',
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
              remaining: '33set',
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
              remaining: '33set',
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
              remaining: '32set',
              current: '4set',
              next: '4set 휴식',
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
              remaining: '32set',
              current: '4set 휴식',
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
              remaining: '31set',
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
              remaining: '31set',
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
              remaining: '30set',
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
              remaining: '30set',
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
              remaining: '29set',
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
              remaining: '29set',
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
              remaining: '28set',
              current: '8set',
              next: '8set 휴식',
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
              remaining: '28set',
              current: '8set 휴식',
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
              remaining: '27set',
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
              remaining: '27set',
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
              remaining: '26set',
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
              remaining: '26set',
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
              remaining: '25set',
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
              remaining: '25set',
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
              remaining: '24set',
              current: '12set',
              next: 'HYDRATE!💧',
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
              remaining: '24set',
              current: 'HYDRATE!💧',
              next: '13set',
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
              remaining: '23set',
              current: '13set',
              next: '13set 휴식',
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
              remaining: '23set',
              current: '13set 휴식',
              next: '14set',
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
              remaining: '22set',
              current: '14set',
              next: '14set 휴식',
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
              remaining: '22set',
              current: '14set 휴식',
              next: '15set',
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
              remaining: '21set',
              current: '15set',
              next: '15set 휴식',
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
              remaining: '21set',
              current: '15set 휴식',
              next: '16set',
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
              remaining: '20set',
              current: '16set',
              next: '16set 휴식',
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
              remaining: '20set',
              current: '16set 휴식',
              next: '17set',
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
              remaining: '19set',
              current: '17set',
              next: '17set 휴식',
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
              remaining: '19set',
              current: '17set 휴식',
              next: '18set',
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
              remaining: '18set',
              current: '18set',
              next: '18set 휴식',
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
              remaining: '18set',
              current: '18set 휴식',
              next: '19set',
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
              remaining: '17set',
              current: '19set',
              next: '19set 휴식',
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
              remaining: '17set',
              current: '19set 휴식',
              next: '20set',
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
              remaining: '16set',
              current: '20set',
              next: '20set 휴식',
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
              remaining: '16set',
              current: '20set 휴식',
              next: '21set',
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
              remaining: '15set',
              current: '21set',
              next: '21set 휴식',
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
              remaining: '15set',
              current: '21set 휴식',
              next: '22set',
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
              remaining: '14set',
              current: '22set',
              next: '22set 휴식',
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
              remaining: '14set',
              current: '22set 휴식',
              next: '23set',
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
              remaining: '13set',
              current: '23set',
              next: '23set 휴식',
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
              remaining: '13set',
              current: '23set 휴식',
              next: '24set',
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
              remaining: '12set',
              current: '24set',
              next: 'HYDRATE!💧',
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
              remaining: '12set',
              current: 'HYDRATE!💧',
              next: '25set',
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
              remaining: '11set',
              current: '25set',
              next: '25set 휴식',
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
              remaining: '11set',
              current: '25set 휴식',
              next: '26set',
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
              remaining: '10set',
              current: '26set',
              next: '26set 휴식',
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
              remaining: '10set',
              current: '26set 휴식',
              next: '27set',
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
              remaining: '9set',
              current: '27set',
              next: '27set 휴식',
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
              remaining: '9set',
              current: '27set 휴식',
              next: '28set',
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
              remaining: '8set',
              current: '28set',
              next: '28set 휴식',
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
              remaining: '8set',
              current: '28set 휴식',
              next: '29set',
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
              remaining: '7set',
              current: '29set',
              next: '29set 휴식',
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
              remaining: '7set',
              current: '29set 휴식',
              next: '30set',
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
              remaining: '6set',
              current: '30set',
              next: '30set 휴식',
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
              remaining: '6set',
              current: '30set 휴식',
              next: '31set',
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
              remaining: '5set',
              current: '31set',
              next: '31set 휴식',
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
              remaining: '5set',
              current: '31set 휴식',
              next: '32set',
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
              remaining: '4set',
              current: '32set',
              next: '32set 휴식',
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
              remaining: '4set',
              current: '32set 휴식',
              next: '33set',
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
              remaining: '3set',
              current: '33set',
              next: '33set 휴식',
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
              remaining: '3set',
              current: '33set 휴식',
              next: '34set',
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
              remaining: '2set',
              current: '34set',
              next: '34set 휴식',
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
              remaining: '2set',
              current: '34set 휴식',
              next: '35set',
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
              remaining: '1set',
              current: '35set',
              next: '35set 휴식',
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
              remaining: '1set',
              current: '35set 휴식',
              next: '36set',
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
              remaining: '0set',
              current: '36set',
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

  return <TogetherFrame item={item} flag={flag} setFlag={setFlag} />;
};

export default BasicTimer;
