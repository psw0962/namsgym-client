import React from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';

const BasicProgram = ({ item, flag }) => {
  return (
    <>
      {flag > 48 && (
        <>
          {item?.slice(0, 3).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                <VideoWrapper>
                  <CustomFont>{index + 1}</CustomFont>

                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </VideoWrapper>
              </React.Fragment>
            );
          })}
        </>
      )}

      {flag <= 48 && flag >= 25 && (
        <>
          {item?.slice(3, 6).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                <VideoWrapper>
                  <CustomFont>{index + 1}</CustomFont>

                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </VideoWrapper>
              </React.Fragment>
            );
          })}
        </>
      )}

      {flag <= 24 && (
        <>
          {item?.slice(6, 9).map((x, index) => {
            return (
              <React.Fragment key={x?.id}>
                <VideoWrapper>
                  <CustomFont>{index + 1}</CustomFont>

                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width={450}
                    height={750}
                    loop={true}
                    autoPlay={true}
                    muted={true}
                  ></video>
                </VideoWrapper>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};

export default BasicProgram;

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
