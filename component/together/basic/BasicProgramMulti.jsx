import React from 'react';
import styled from 'styled-components';

const BasicProgramMulti = ({ item, flag }) => {
  return (
    <Frame>
      <>
        {item.map(x => {
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
    </Frame>
  );
};

export default BasicProgramMulti;

const Frame = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
