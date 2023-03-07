import styled from 'styled-components';

const Line = ({ margin = '18px 0', width }) => {
  return <LineDiv margin={margin} width={width} />;
};

const LineDiv = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => props.margin && props.margin};
  border: 1px solid #989898;
`;

export default Line;
