import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import logo from 'public/png/logo.png';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import useThemeState from '@/hooks/useThemeState';

const BusinessInfo = () => {
  const router = useRouter();
  const { themeState } = useThemeState();

  return (
    <Frame>
      <LogoSection>
      {themeState === 'light' &&
        <Font className="light-font" fontSize="3rem" fontWeight="700" margin="0 0 2rem 0">
          <span>남다른 몸</span>{' '}
          <span>남다른 삶</span>
        </Font>}

        {themeState === 'dark' && 
        <NeonFont fontSize="3rem" fontWeight="500" margin="0 0 2rem 0">
          <span className="first">남다른 몸</span>{' '}
          <span className="second">남다른 삶</span>
        </NeonFont>}

        {themeState === 'light' && 
        <ImageWrapper>
          <Image src={logo} alt="logo" priority />
        </ImageWrapper>}
        
        {themeState === 'dark' && <LogoFont
            color="#fff"
            fontSize="4rem"
            fontWeight="500"
            margin="0 0 2rem 0"
          >
            {`NAM'S GYM`}
          </LogoFont>}
      </LogoSection>

      <BusinessInfoSection>
        <p>{`상호명 : (주)남스짐 컴퍼니`}</p>
        <p>사업자등록번호 : 250-81-02543</p>
        <p>대표자명 : 남건우</p>
        <p>주소 : 서울시 강남구 테헤란로8길 22, 202동 143호</p>
        <p>전화번호 : 02-558-573333</p>
      </BusinessInfoSection>
    </Frame>
  );
};

export default BusinessInfo;

const Frame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: fixed;
  left: 25%;
  transform: translate(-25%, 0);
  z-index: 3;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LogoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const BusinessInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const NeonFont = styled(Font)`
  .first {
    color: #fb4264;
    text-shadow: 0 0 3vw #f40a35;

    @keyframes first {
      0%,
      100% {
        text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #272424,
          0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
        color: #fed128;
      }
      50% {
        text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
          0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
        color: #806914;
      }
    }

    animation: first 1s ease infinite;
    -moz-animation: first 1s ease infinite;
    -webkit-animation: first 1s ease infinite;
  }

  .second {
    @keyframes second {
      0%,
      100% {
        text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
          0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
        color: #28d7fe;
      }
      50% {
        text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
          0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
        color: #146c80;
      }
    }

    animation: second 2s linear infinite;
    -moz-animation: second 2s linear infinite;
    -webkit-animation: second 2s linear infinite;
    -o-animation: second 2s linear infinite;
  }
`;

const LogoFont = styled(Font)`
  font-family: 'Alfa Slab One', cursive;
  white-space: nowrap;
`;