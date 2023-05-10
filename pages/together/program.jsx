import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom } from 'atoms/index';
import BasicTimer from '@/component/together/basic/BasicTimer';

const Program = () => {
  const audio = new Audio('/sounds/beep.mp3');

  const [item, setItem] = useState([]);
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);
  const [flag, setFlag] = useLocalStorage('flag', {});

  // 최초 셋팅 이펙트
  useEffect(() => {
    // 타이머에 따라 첫 셋팅 분기
    if (timerMethod === 'basic') {
      setFlag({
        flagNumber: 72,
        timer: 10,
        round: '1ROUND',
        current: '준비!',
        next: '1set',
      });
    }

    // 프로그램 셋팅
    setItem(JSON.parse(window.sessionStorage.getItem('program')));
  }, []);

  // 오디오 이펙트
  useEffect(() => {
    if (flag.timer <= 3) {
      audio.play();
    }
  }, [flag.timer]);

  return (
    <Frame>
      {timerMethod === 'basic' && (
        <BasicTimer item={item} flag={flag} setFlag={setFlag} />
      )}
    </Frame>
  );
};

export default Program;

const Frame = styled.div`
  display: flex;
  padding: 5rem;
`;
