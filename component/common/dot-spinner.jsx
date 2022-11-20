import styled from "styled-components";

const DotSpinner = ({ width, height, marginRight, dotColor }) => {
  return (
    <Spinner
      width={width}
      height={height}
      marginRight={marginRight}
      dotColor={dotColor}
    >
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </Spinner>
  );
};

export default DotSpinner;

const Spinner = styled.div`
  margin: 0 auto;
  text-align: center;
  div {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    background-color: ${({ dotColor }) => (dotColor ? dotColor : "#fff")};
    &:not(&:last-child) {
      margin-right: ${({ marginRight }) => `${marginRight}px`};
    }
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
