import styled from 'styled-components';

const Line = ({ margin = '18px 0' }) => {
  return <LineDiv margin={margin} />;
};

const LineDiv = styled.div`
  width: 100%;
  margin: ${props => props.margin && props.margin};
  border: 1px solid #989898;
`;

export default Line;
