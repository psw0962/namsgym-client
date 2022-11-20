import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 2.2vw;
  }

  @media screen and (min-width: 450px) {
    html {
      font-size: 10px;
    }
  }

  body {
    background-color: #000;

    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;

    // android 환경 클릭 시 highlight 제거
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;

    width: 100%;
    height: 100%;
    font-weight: 500;
    font-size: 1.6rem;
    color: #000;
    caret-color: #0004f3;

    // textarea 크기 자동조절 막기
    resize: none;

    &::placeholder {
      color: #1a1a1a;
      opacity: 0.3;
    }

    // 자동완성 배경색 지우기
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }
  }
`;

export default GlobalStyle;
