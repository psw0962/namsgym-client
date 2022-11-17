import { useState, useEffect } from 'react';

const useScrollEvent = () => {
  const [getUserHeight, setGetUserHeight] = useState(0);
  const [scrollEventState, setScrollEventState] = useState(false);

  useEffect(() => {
    // 모바일 환경에서 최상단에서 계속 끌어올릴 경우 user의 height이 음수가 됨
    // st > getUserHeight의 계산이 엉망이 되므로 user의 height이 음수일 경우 event 실행하지 않음
    if (getUserHeight < 0) {
      return;
    }

    window.addEventListener('scroll', () => setGetUserHeight(window.pageYOffset));

    window.addEventListener('scroll', () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > getUserHeight) {
        setScrollEventState(true);
      } else {
        setScrollEventState(false);
      }
    });
  }, [scrollEventState, getUserHeight]);

  return { scrollEventState };
};

export default useScrollEvent;
