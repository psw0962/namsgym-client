import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
// import { useRouter } from 'next/router';
import logo from 'public/png/logo.png';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import useThemeState from '@/hooks/useThemeState';

const BusinessInfo = () => {
  // const router = useRouter();
  const { themeState } = useThemeState();

  return (
    <Frame>
      <LogoSection>
        {themeState === 'light' && (
          <Font fontSize="3rem" fontWeight="500" margin="0 0 2rem 0">
            <span>남다른 몸</span> <span>남다른 삶</span>
          </Font>
        )}

        {themeState === 'dark' && (
          <NeonFont fontSize="3rem" fontWeight="500" margin="0 0 2rem 0">
            <span className="first">남다른 몸</span>{' '}
            <span className="second">남다른 삶</span>
          </NeonFont>
        )}

        {themeState === 'light' && (
          <ImageWrapper>
            <Image
              src={logo}
              alt="logo"
              priority={true}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageWrapper>
        )}

        {themeState === 'dark' && (
          <LogoFont
            color="#fff"
            fontSize="4rem"
            fontWeight="500"
            margin="0 0 2rem 0"
          >
            {`NAM'S GYM`}
          </LogoFont>
        )}
      </LogoSection>

      <BusinessInfoSection>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          상호명 : 남스짐
        </Font>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          사업자등록번호 : 746-36-00255
        </Font>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          대표자명 : 남건우
        </Font>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          주소 : 경기도 부천시 옥길로 124 617호
        </Font>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          전화번호 : 010-4756-3376 | 이메일 : namgh90@nate.com
        </Font>

        <CustomAtag
          themeState={themeState}
          href="https://rainy-reaper-d5b.notion.site/29ce947a1fed48f3a878f586f071ba6c"
          target="_blank"
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
        >
          {`인재채용 >`}
        </CustomAtag>

        <Font
          fontSize="1.3rem"
          fontWeight="500"
          margin="0 0 2rem 0"
          lineHeight="1.5"
        >
          *본 페이지에 제공되는 모든 이미지는 남스짐의 고유한 재산 입니다.
          <br />
          무단으로 도용시 법적 처벌을 요구할 수 있습니다.
        </Font>
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

const CustomAtag = styled.a`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
