import styled from 'styled-components';

const GlobalSpinner = ({ color }) => {
  return (
    <Frame>
      <SvgTag className="spinner" viewBox="0 0 50 50" color={color}>
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </SvgTag>
    </Frame>
  );
};

export default GlobalSpinner;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30rem;
`;

const SvgTag = styled.svg`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  @keyframes colors {
    0% {
      stroke: ${props => (props.color ? props.color : '#0004f3')};
    }
    50% {
      stroke: ${props => (props.color ? props.color : '#6163ff')};
    }
    100% {
      stroke: ${props => (props.color ? props.color : '#0004f3')};
    }
  }
  &.spinner {
    animation: rotate 1.2s linear infinite;
    width: 50px;
    height: 50px;
  }
  .path {
    stroke: #0004f3;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite, colors 2.4s ease-in-out infinite;
  }
`;
