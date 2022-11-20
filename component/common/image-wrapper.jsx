import styled from 'styled-components';

const ImageWrapper = props => {
  const { width, height, onClick, children } = props;

  return (
    <Frame width={width} height={height} onClick={onClick}>
      {children}
    </Frame>
  );
};

export default ImageWrapper;

const Frame = styled.div`
  width: ${props => (props.width ? `${props.width}rem` : 0)};
  height: ${props => (props.height ? `${props.height}rem` : 0)};
`;
