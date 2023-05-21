import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';

const EightProgram = ({ flag, section }) => {
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );

  return (
    <Frame>
      {section === 'section1' && (
        <>
          {currentProgramState?.slice(0, 4).map((x, index) => {
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

      {section === 'section2' && (
        <>
          {currentProgramState?.slice(4, 9).map((x, index) => {
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

export default EightProgram;

const Frame = styled.div`
  display: flex;
  justify-content: space-around;
`;
