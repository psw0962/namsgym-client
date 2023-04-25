import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Font from '../common/font';
import togetherlogo from '@/public/png/togetherlogo.png';
import BasicProgram from './basic/BasicProgram';

const TogetherFrame = ({ item, flag }) => {
  return (
    <>
      <audio
        style={{ display: 'none' }}
        controls
        src="/sounds/beep.mp3"
      ></audio>

      <Frame>
        <Container>
          <TitleContainer>
            <TitleWrapper>
              <ImageWrapper width={30} height={30}>
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
              </ImageWrapper>
            </TitleWrapper>

            <ProgressWrapper>
              <Font fontSize="5rem">남은 세트 ➡️ {flag.remaining}</Font>

              <Font color="blue" fontSize="12rem">
                {flag.current}
              </Font>

              <Font fontSize="5rem">다음 세트 ➡️ {flag.next}</Font>
            </ProgressWrapper>

            <ProgressBar timer={flag.timer} style={{ width: 300, height: 300 }}>
              <CircularProgressbar
                value={flag.timer}
                text={`${flag.timer}`}
                maxValue={60}
                strokeWidth={15}
              />
            </ProgressBar>
          </TitleContainer>

          <BasicProgram item={item} flag={flag} />
        </Container>
      </Frame>
    </>
  );
};

export default TogetherFrame;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
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

const ProgressWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
