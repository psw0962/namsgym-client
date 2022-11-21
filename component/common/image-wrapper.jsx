import styled from 'styled-components';

const ImageWrapper = props => {
  const { width, height, onClick, className, pointer, children } = props;

  return (
    <Frame className={className} width={width} height={height} pointer={pointer} onClick={onClick}>
      {children}
    </Frame>
  );
};

export default ImageWrapper;

const Frame = styled.div`
  width: ${props => (props.width ? `${props.width}rem` : '100%')};
  height: ${props => (props.height ? `${props.height}rem` : '100%')};
  cursor: ${props => (props.pointer ? 'pointer' : '')};

  img {
    width: 100%;
    height: 100%;
  }
`;
