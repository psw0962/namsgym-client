import styled from "styled-components";
import useThemeState from "@/hooks/useThemeState";

const AppWrapper = ({ children }) => {
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      {children}
    </Frame>
  )
}

export default AppWrapper;

const Frame = styled.div`
    width: 100%;
    height: 100%;
    max-width: 450px;
    min-height: 100vh;
    margin: 0 auto;
    box-shadow: ${props => props.themeState === 'dark' ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px' : 'rgb(0 0 0 / 16%) 0px 0px 8px'};

    // top nav의 높이 + 40px
    padding-top: 100px;

    // bottom nav 높이만큼
    padding-bottom: 65px;

    // isLoading
    ${props => {
      if (props.isLoading) {
        return css`
          justify-content: center;
          align-items: center;
        `;
      }
    }}
`;