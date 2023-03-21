import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom } from 'atoms/index';
import BasicTogether from '@/component/together/BasicTogether';

const Program = () => {
  const audio = new Audio('/sounds/beep.mp3');

  const [item, setItem] = useState([]);
  const [flag, setFlag] = useState(73);
  const [flagName, setFlagName] = useLocalStorage('준비!');
  const [timer, setTimer] = useLocalStorage('timer', '');
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);

  // 최초 셋팅 이펙트
  useEffect(() => {
    // 최초 시간 셋팅 -> 준비!
    setFlagName('준비!');
    setTimer(10);

    // 프로그램 셋팅
    setItem(JSON.parse(window.sessionStorage.getItem('program')));
  }, []);

  // 오디오 이펙트
  useEffect(() => {
    if (timer <= 3) {
      audio.play();
    }
  }, [timer]);

  return (
    <Frame>
      {timerMethod === 'Basic' && (
        <BasicTogether
          flag={flag}
          setFlag={setFlag}
          timer={timer}
          setTimer={setTimer}
          item={item}
          flagName={flagName}
          setFlagName={setFlagName}
        />
      )}
    </Frame>
  );
};

export default Program;

const Frame = styled.div`
  display: flex;
  padding: 5rem;
`;
