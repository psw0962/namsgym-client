import Image from 'next/image';
import styled from 'styled-components';
import useScrollEvent from 'hooks/useScrollEvent';
import { useRecoilState } from 'recoil';
import { themeStateAtom } from 'atoms';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import light from 'public/svg/light.svg';
import dark from 'public/svg/dark.svg';
import { useState, useEffect } from 'react';
import logo from '@/public/png/iconlogo.png';

const TopNavigation = () => {
  const { scrollEventState } = useScrollEvent();
  const [themeState, setThemeState] = useRecoilState(themeStateAtom);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const onClickTheme = () => {
    if (!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      setThemeState('light');
      return;
    }

    if (window.localStorage.getItem('theme') === 'light') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.dataset.theme = 'dark';
      setThemeState('dark');
      return;
    }

    if (window.localStorage.getItem('theme') === 'dark') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      setThemeState('light');
      return;
    }
  };

  useEffect(() => {
    if (!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      setThemeState('light');
      return;
    }
  }, []);

  return (
    <Frame scrollEventState={!scrollEventState} themeState={themeState}>
      <NavigationWrapper>
        {/* theme */}
        {themeState === 'light' && (
          <ImageWrapper
            width={3.5}
            height={3.5}
            pointer={true}
            onClick={onClickTheme}
            className="day"
          >
            <Image
              src={light}
              alt="light"
              priority={true}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageWrapper>
        )}

        {themeState === 'dark' && (
          <ImageWrapper
            width={3.5}
            height={3.5}
            pointer={true}
            onClick={onClickTheme}
            className="night"
          >
            <Image
              src={dark}
              alt="dark"
              priority={true}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </ImageWrapper>
        )}

        {/* logo */}
        <Logo themeState={themeState} innerWidth={innerWidth}>
          {themeState === 'light' && (
            <div>
              <ImageWrapper width={4} height={4} pointer={true}>
                <Image
                  src={logo}
                  alt="logo"
                  priority={true}
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </ImageWrapper>
            </div>

            // <LogoFont
            //   color="#000"
            //   fontSize="2rem"
            //   fontWeight="500"
            //   margin="0 0 2rem 0"
            // >
            //   {`NAM'S`} <br /> GYM
            // </LogoFont>
          )}

          {themeState === 'dark' && innerWidth > 1200 && (
            <LogoFont
              color="#fff"
              fontSize="2rem"
              fontWeight="500"
              margin="0 0 2rem 0"
            >
              {`NAM'S`} <br /> GYM
            </LogoFont>
          )}

          {themeState === 'dark' && innerWidth < 1200 && (
            <NeonFont fontSize="2rem" fontWeight="500">
              <span className="first">NAMS</span>
              <br />
              <span className="second">GYM</span>
            </NeonFont>
          )}
        </Logo>

        {/* event button */}
        <EventButton>
          <CustomAtag
            themeState={themeState}
            href="https://naver.me/xQ8scMMs"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            무료 <br />
            PT체험권
          </CustomAtag>
        </EventButton>
      </NavigationWrapper>
    </Frame>
  );
};

export default TopNavigation;

const Frame = styled.div`
  visibility: ${props => (props.scrollEventState ? 'visible' : 'hidden')};
  opacity: ${props => (props.scrollEventState ? '1' : '0')};
  transition: all 0.2s;

  position: fixed;
  top: 0;
  width: 100%;
  max-width: 450px;
  height: 60px;
  padding: 1rem;
  background-color: ${props => (props.themeState === 'dark' ? '#000' : '#fff')};
  z-index: 10;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-content: center;

  .day {
    transform: translateY(8px);
  }

  .night {
    transform: translateY(2px);
  }
`;

const NeonFont = styled(Font)`
  text-align: center;

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
  text-align: center;
`;

const CustomAtag = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const EventButton = styled.div``;

const Logo = styled.div`
  /* transform: ${props =>
    props.themeState === 'dark' ? 'translateX(0px)' : 'translateX(16px)'}; */

  transform: translateX(16px);
`;
