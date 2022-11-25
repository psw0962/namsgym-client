import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 2.2vw;
    transition: all 0.3s;
  }

  @media screen and (min-width: 450px) {
    html {
      font-size: 10px;
    }
  }

  html[data-theme="dark"] {
    background-color: #000;
    color: #fff;
  }

  html[data-theme="light"] {
    background-color: #fff;
    color: #000;
  }

  body {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;

    // android 환경 클릭 시 highlight 제거
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  nav, section, main, footer {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    /* text-decoration: none; */
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
`;

export default GlobalStyle;
