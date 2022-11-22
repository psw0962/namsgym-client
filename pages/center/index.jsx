import styled from "styled-components";

const Center = () => {
  return (
    <Frame>
      <p>center</p>
    </Frame>
  )
}

export default Center;

const Frame = styled.main`
  display: flex;
  justify-content: space-between;
`;