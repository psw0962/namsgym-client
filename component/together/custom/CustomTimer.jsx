import React, { useEffect } from 'react';
import TogetherFrame from '../TogetherFrame';

const CustomTimer = ({ flag, setFlag }) => {
  useEffect(() => {
    const countdown = setInterval(() => {
      // 시작
      if (flag.flagNumber === 150) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 149) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 148) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 147) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 146) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 145) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 144) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 143) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 142) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 141) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 140) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 139) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 138) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 137) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 136) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 135) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 134) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 133) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 132) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 131) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 130) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 129) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 128) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 127) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 126) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 125) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 124) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 123) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 122) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 121) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 120) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 119) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 118) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 117) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 116) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 115) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 114) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 113) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 112) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 111) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 110) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 109) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 108) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 107) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 106) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 105) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 104) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 103) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 102) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 101) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 100) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 99) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 98) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 97) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 96) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 95) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 94) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 93) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 92) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 91) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 90) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 89) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 88) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 87) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 86) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 85) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 84) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 83) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 82) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 81) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 80) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 79) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 78) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 77) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 76) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 75) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

      if (flag.flagNumber === 74) {
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }

      if (flag.flagNumber === 73) {
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
              round: '',
              current: 'REST',
              next: 'SET',
            };
          });
        }
      }

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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
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
              timer: 40,
              round: '',
              current: 'REST',
              next: 'SET',
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
              timer: 60,
              round: '',
              current: 'SET',
              next: 'REST',
            };
          });
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [flag.flagNumber, flag.timer]);

  return <TogetherFrame flag={flag} setFlag={setFlag} />;
};

export default CustomTimer;
