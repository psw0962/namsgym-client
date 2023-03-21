import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Font from '../common/font';

const TogetherFrame = ({ flag, setFlag, timer, setTimer, item, flagName }) => {
  return (
    <>
      <audio
        style={{ display: 'none' }}
        controls
        src="/sounds/beep.mp3"
      ></audio>

      <TimerWrapper>
        <Font fontSize="4rem">{flagName}</Font>

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
            <React.Fragment key={x?.id}>
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
            </React.Fragment>
          );
        })}
      </ProgramFrame>
    </>
  );
};

export default TogetherFrame;

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
