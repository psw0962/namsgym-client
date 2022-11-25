import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ImageWrapper from '@/component/common/image-wrapper';
import useThemeState from '@/hooks/useThemeState';
import { home, center, event, menu, review } from '@/public/svg';
import { useRouter } from 'next/router';

const BottomNavigation = () => {
  const router = useRouter();
  const pathName = router?.pathname.split('/')[1];
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      <MenuWrapper
        active={pathName === ''}
        themeState={themeState}
        onClick={() => router.push('/')}
      >
        <ImageWrapper width={3} height={3}>
          <Image src={home} alt="home" priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont
          active={pathName === ''}
          themeState={themeState}
          fontSize="1.2rem"
          fontWeight="500"
        >
          홈
        </NavigationFont>
      </MenuWrapper>

      <MenuWrapper
        active={pathName === 'center'}
        themeState={themeState}
        onClick={() => router.push('/center')}
      >
        <ImageWrapper width={3} height={3}>
          <Image src={center} alt="center" priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont
          active={pathName === 'center'}
          themeState={themeState}
          fontSize="1.2rem"
          fontWeight="500"
        >
          센터소개
        </NavigationFont>
      </MenuWrapper>

      <MenuWrapper
        active={pathName === 'event'}
        themeState={themeState}
        onClick={() => router.push('/event')}
      >
        <ImageWrapper width={3} height={3}>
          <Image src={event} alt="event" priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont
          active={pathName === 'event'}
          themeState={themeState}
          fontSize="1.2rem"
          fontWeight="500"
        >
          이벤트
        </NavigationFont>
      </MenuWrapper>

      <MenuWrapper
        active={pathName === 'review'}
        themeState={themeState}
        onClick={() => router.push('/review')}
      >
        <ImageWrapper width={3} height={3}>
          <Image src={review} alt="review" priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont
          active={pathName === 'review'}
          themeState={themeState}
          fontSize="1.2rem"
          fontWeight="500"
        >
          리뷰
        </NavigationFont>
      </MenuWrapper>

      <EtcMenuWrapper
        themeState={themeState}
        onClick={() => console.log('menu')}
      >
        <ImageWrapper width={3} height={3}>
          <Image src={menu} alt="menu" priority={true} loading="eager" />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">
          기타메뉴
        </Font>
      </EtcMenuWrapper>
    </Frame>
  );
};

export default BottomNavigation;

const Frame = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 65px;
  padding: 2rem;
  box-shadow: ${props =>
    props.themeState === 'dark'
      ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'
      : 'rgb(0 0 0 / 7%) 0px -1px 1px, rgb(87 16 238 / 3%) 0px -6px 12px'};
  background-color: ${props => (props.themeState === 'dark' ? '#000' : '#fff')};
  z-index: 10;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 1rem;

  img {
    filter: ${props =>
      props.active && props.themeState === 'dark'
        ? 'brightness(0) invert(1)'
        : props.active && props.themeState === 'light'
        ? '#000'
        : 'drop-shadow(16px 16px 20px red) invert(75%)'};
  }
`;

const NavigationFont = styled(Font)`
  color: ${props =>
    props.active && props.themeState === 'dark'
      ? '#fff'
      : props.active && props.themeState === 'light'
      ? '#000'
      : '#acacac'};
`;

const EtcMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  border: ${props =>
    props.themeState === 'dark' ? '1px solid #acacac' : '1px solid #000'};

  img {
    filter: ${props =>
      props.themeState === 'dark'
        ? 'brightness(0) invert(1)'
        : props.themeState === 'light'
        ? '#000'
        : 'drop-shadow(16px 16px 20px red) invert(75%)'};
  }

  p {
    color: ${props => (props.themeState === 'dark' ? '#acacac' : '#000')};
  }
`;
