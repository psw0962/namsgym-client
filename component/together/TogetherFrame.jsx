import styled from 'styled-components';
import React, { useState } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Font from '../common/font';
import togetherlogo from '@/public/png/togetherlogo.png';
import BasicProgram from './basic/BasicProgram';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom } from 'atoms/index';
import EightProgram from './eight/EightProgram';
import CustomProgram from './custom/CustomProgram';

const TogetherFrame = ({ flag }) => {
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);
  const [section, setSection] = useState('section1');

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
              {timerMethod === '8' && (
                <div style={{ display: 'flex', gap: '3rem' }}>
                  <SectionButton
                    fontSize="4rem"
                    active={section === 'section1'}
                    onClick={e => setSection(e.target.textContent)}
                  >
                    section1
                  </SectionButton>

                  <SectionButton
                    fontSize="4rem"
                    active={section === 'section2'}
                    onClick={e => setSection(e.target.textContent)}
                  >
                    section2
                  </SectionButton>
                </div>
              )}

              <Font fontSize="8rem">{flag.round}</Font>

              <Font color="blue" fontSize="12rem">
                {flag.current}
              </Font>

              <Font fontSize="5rem">NEXT ➡️ {flag.next}</Font>
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

          {/* 타이머 메소드 분기 */}
          {timerMethod === 'basic' && (
            <BasicProgram flag={flag} section={section} />
          )}

          {timerMethod === '8' && (
            <EightProgram flag={flag} section={section} />
          )}

          {timerMethod === 'custom' && (
            <CustomProgram flag={flag} section={section} />
          )}
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
  align-items: center;
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

const SectionButton = styled(Font)`
  padding: 2rem;
  border-radius: 20px;
  border: ${props => (props.active ? '3px solid #000' : '')};
  cursor: pointer;
`;
