import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import useTimer from '@/hooks/useTimer';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Program = () => {
  const [item, setItem] = useState([]);

  const [flag, setFlag] = useState(3); // 준비 세트 포함
  const [timer, setTimer] = useLocalStorage('timer', '');

  useTimer(timer, setTimer, flag, setFlag);

  useEffect(() => {
    // 최초 시간 셋팅 -> 준비!
    setTimer(10);
  }, []);

  console.log('flag', flag);

  useEffect(() => {
    setItem(JSON.parse(window.sessionStorage.getItem('program')));
  }, []);

  return (
    <Frame>
      <TimerWrapper>
        <div style={{ fontSize: '4rem' }}>
          {(flag === 3 && '준비!') ||
            (flag === 2 && '1세트') ||
            (flag === 1 && '1세트 휴식')}
        </div>

        <ProgressBar timer={timer} style={{ width: 200, height: 200 }}>
          <CircularProgressbar
            value={timer}
            text={`${timer}`}
            maxValue={60}
            strokeWidth={15}
          />
        </ProgressBar>
      </TimerWrapper>

      <ProgramFrame>
        {item?.map(x => {
          return (
            <>
              <ImageWrapper width={40} height={40}>
                <Image
                  className="program"
                  src={x?.image}
                  alt={x?.name}
                  priority={true}
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  width={180}
                  height={200}
                />
              </ImageWrapper>
            </>
          );
        })}
      </ProgramFrame>
    </Frame>
  );
};

export default Program;

const Frame = styled.div`
  display: flex;
  padding: 5rem;
`;

const ProgramFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-right: 10rem;
`;

const ProgressBar = styled.div`
  .CircularProgressbar-path {
    stroke: ${props => (props.timer <= 3 ? 'red' : 'blue')};
  }
  .CircularProgressbar-trail {
    stroke: gray;
  }
  .CircularProgressbar-text {
    fill: ${props => (props.timer <= 3 ? 'red' : 'blue')};
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;
