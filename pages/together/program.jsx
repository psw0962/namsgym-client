import styled from 'styled-components';
import React, { useEffect } from 'react';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom } from 'atoms/index';
import BasicTimer from '@/component/together/basic/BasicTimer';
import EightTimer from '@/component/together/eight/EightTimer';
import CustomTimer from '@/component/together/custom/CustomTimer';

const Program = () => {
  const audio = new Audio('/sounds/beep.mp3');
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

      return;
    }

    if (timerMethod === '8') {
      setFlag({
        flagNumber: 65,
        timer: 10,
        round: '1ROUND',
        current: '준비!',
        next: '1set',
      });

      return;
    }

    if (timerMethod === 'custom') {
      setFlag({
        flagNumber: 150,
        timer: 10,
        round: '',
        current: '준비!',
        next: 'SET',
      });

      return;
    }
  }, []);

  // 오디오 이펙트
  useEffect(() => {
    if (flag.timer <= 3) {
      audio.play();
    }
  }, [flag.timer]);

  return (
    <Frame>
      {timerMethod === 'basic' && <BasicTimer flag={flag} setFlag={setFlag} />}
      {timerMethod === '8' && <EightTimer flag={flag} setFlag={setFlag} />}
      {timerMethod === 'custom' && (
        <CustomTimer flag={flag} setFlag={setFlag} />
      )}
    </Frame>
  );
};

export default Program;

const Frame = styled.div`
  display: flex;
  padding: 5rem;
`;
