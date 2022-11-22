import Image from 'next/image';
import styled from 'styled-components';
import useScrollEvent from 'hooks/useScrollEvent';
import { useRecoilState } from 'recoil';
import { themeStateAtom } from 'atoms';
import ImageWrapper from '@/component/common/image-wrapper';
import Font from '@/component/common/font';
import light from 'public/svg/light.svg';
import dark from 'public/svg/dark.svg';

const TopNavigation = () => {
  const { scrollEventState } = useScrollEvent();
  const [themeState, setThemeState] = useRecoilState(themeStateAtom);

  const onClickTheme = () => {
    if(!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      setThemeState('light');
      return;
    }

    if(window.localStorage.getItem('theme') === 'light') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.dataset.theme = 'dark';
      setThemeState('dark');
      return;
    }

    if(window.localStorage.getItem('theme') === 'dark') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.dataset.theme = 'light';
      setThemeState('light');
      return;
    }
  }

  return (
    <Frame scrollEventState={!scrollEventState}>
      <NavigationWrapper>
          {/* theme */}
          {themeState === 'light' &&
          <ImageWrapper className="theme" width={3.5} height={3.5} pointer={true} onClick={onClickTheme}>
            <Image src={light} alt="light" priority={true} />
          </ImageWrapper>}
          
          {themeState === 'dark' &&
          <ImageWrapper className="theme" width={3.5} height={3.5} pointer={true} onClick={onClickTheme}>
            <Image src={dark} alt="dark" priority={true} />
          </ImageWrapper>}

          {/* logo */}
          {themeState === 'light' &&
          <LogoFont
            color="#000"
            fontSize="2rem"
            fontWeight="500"
            margin="0 0 2rem 0"
          >
           NAM'S <br /> GYM
          </LogoFont>}

          {themeState === 'dark' && 
          <NeonFont fontSize="2rem" fontWeight="500">
            <span className="first">NAMS</span><br />
            <span className="second">GYM</span>
          </NeonFont>}

          {/* blank */}
          <div style={{width: '100%'}}></div>
        </NavigationWrapper>
      </Frame>
  )
}

export default TopNavigation;

const Frame = styled.nav`
  visibility: ${props => (props.scrollEventState ? 'visible' : 'hidden')};
  opacity: ${props => (props.scrollEventState ? '1' : '0')};
  transition: all 0.3s;

  position: fixed;
  top: 0;
  width: 100%;
  max-width: 450px;
  height: 60px;
  padding: 1rem;
`;

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;

  .theme {
    transform: translateY(7px);
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