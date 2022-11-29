import { useEffect } from 'react';

/* modal 이외의 곳 클릭 시 모달이 닫히게 하기 위한 hook
  inRef: modal 안을 클릭했을 때 모달이 닫히지 않게 하기 위한 ref입니다.
  exceptRef: toggle 시 모달이 닫힐 때 버벅거리면서 닫히는 현상을 방지하기 위한 ref입니다.
  handler: () => setModalOpen(false) - 모달이 닫히게 하는 함수
*/

export default function useOnClickOutside({ inRef, exceptRef, handler }) {
  useEffect(() => {
    const listener = event => {
      if (
        !inRef?.current ||
        inRef?.current?.contains(event.target) ||
        exceptRef?.current?.contains(event.target)
      ) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [inRef, exceptRef, handler]);
}
