import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Font from '../common/font';
import togetherlogo from '@/public/png/togetherlogo.png';

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
          <ImageWrapper width={30} height={30}>
            <Image
              src={togetherlogo}
              alt=""
              logo
              priority={true}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              width={180}
              height={200}
            />
          </ImageWrapper>

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
        </TitleWrapper>

        <ProgramWrapper>
          {item?.map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                <CustomImageWrapper width={90} height={90}>
                  <CustomFont>{index + 1}</CustomFont>

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
                </CustomImageWrapper>
              </React.Fragment>
            );
          })}
        </ProgramWrapper>
      </Frame>
    </>
  );
};

export default TogetherFrame;

const Frame = styled.div`
  display: flex;
`;

const ProgramWrapper = styled.div`
  /* width: 2500px; */
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  border: 1px solid #000;
  border-radius: 10px;
  padding: 10rem;
`;

const TitleWrapper = styled.div`
  display: flex;
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

const CustomImageWrapper = styled(ImageWrapper)`
  position: relative;
  border-radius: 20px;

  .program {
    border-radius: 20px;
  }
`;

const CustomFont = styled(Font)`
  position: absolute;
  left: 3rem;
  top: 2.5rem;
  font-size: 10rem;
`;
