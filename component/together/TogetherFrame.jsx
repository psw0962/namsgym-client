import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Font from '../common/font';
import togetherlogo from '@/public/png/togetherlogo.svg';
import BasicProgram from './basic/BasicProgram';

const TogetherFrame = ({ flag, setFlag, timer, setTimer, item, flagName }) => {
  return (
    <>
      <audio
        style={{ display: 'none' }}
        controls
        src="/sounds/beep.mp3"
      ></audio>

      <Frame>
        <TitleWrapper>
          <CustomImageWrapper width={50} height={50}>
            <Image
              src={togetherlogo}
              alt="logo"
              priority={true}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              width={180}
              height={200}
            />
          </CustomImageWrapper>

          <TimerWrapper>
            <Font fontSize="10rem">{flagName}</Font>

            <ProgressBar timer={timer} style={{ width: 300, height: 300 }}>
              <CircularProgressbar
                value={timer}
                text={`${timer}`}
                maxValue={60}
                strokeWidth={15}
              />
            </ProgressBar>
          </TimerWrapper>
        </TitleWrapper>

        <ProgramWrapper>
          <BasicProgram item={item} flag={flag} />
        </ProgramWrapper>
      </Frame>
    </>
  );
};

export default TogetherFrame;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ProgramWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5rem;
  margin-right: 6rem;
`;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 20px;

  .program {
    border-radius: 20px;
  }
`;

const CustomFont = styled(Font)`
  position: absolute;
  left: 3rem;
  top: 1rem;
  font-size: 10rem;
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

const CustomImageWrapper = styled(ImageWrapper)`
  transform: translateY(80px);
`;
