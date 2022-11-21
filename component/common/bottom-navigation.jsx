import styled from "styled-components";

const BottomNavigation = () => {
  return (
    <Frame>
      <div>bottom</div>
    </Frame>
  )
}

export default BottomNavigation;

const Frame = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 65px;
  border:1px solid #fff;
`;