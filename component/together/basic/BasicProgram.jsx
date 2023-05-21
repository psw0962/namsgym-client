import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';

const BasicProgram = ({ flag }) => {
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );

  return (
    <Frame>
      {flag.flagNumber > 48 && (
        <>
          {currentProgramState?.slice(0, 3).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                {x.isRow ? (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={650}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                ) : (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}

      {flag.flagNumber <= 48 && flag.flagNumber >= 25 && (
        <>
          {currentProgramState?.slice(3, 6).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                {x.isRow ? (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={650}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                ) : (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}

      {flag.flagNumber <= 24 && (
        <>
          {currentProgramState?.slice(6, 9).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                {x.isRow ? (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={650}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                ) : (
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}
    </Frame>
  );
};

export default BasicProgram;

const Frame = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
