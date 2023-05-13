import React from 'react';
import styled from 'styled-components';

const EightProgram = ({ item }) => {
  return (
    <Frame>
      {item?.map(x => {
        return (
          <React.Fragment key={x?.id}>
            {x.isRow ? (
              <video
                src={x?.image}
                poster="/png/logo.png"
                width={750}
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
    </Frame>
  );
};

export default EightProgram;

const Frame = styled.div`
  display: flex;
  justify-content: space-around;
`;
