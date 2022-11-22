import useThemeState from "@/hooks/useThemeState";
import Image from "next/image";
import styled from "styled-components";
import Font from '@/component/common/font';
import ImageWrapper from '@/component/common/image-wrapper';
import { home, center, event, column } from "@/public/svg";
import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();
  const pathName = router?.pathname;
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      <MenuWrapper active={pathName === '/'} themeState={themeState} onClick={() => router.push('/')}>
        <ImageWrapper width={3} height={3}>
          <Image src={home} alt='home' priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont active={pathName === '/'} themeState={themeState} fontSize="1.2rem" fontWeight="500">홈</NavigationFont>
      </MenuWrapper>

      <MenuWrapper active={pathName === '/center'} themeState={themeState} onClick={() => router.push('/center')}>
        <ImageWrapper width={3} height={3}>
          <Image src={center} alt='center' priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont active={pathName === '/center'} themeState={themeState} fontSize="1.2rem" fontWeight="500">센터소개</NavigationFont>
      </MenuWrapper>

      <MenuWrapper active={pathName === '/event'} themeState={themeState} onClick={() => router.push('/event')}>
        <ImageWrapper width={3} height={3}>
          <Image src={event} alt='event' priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont active={pathName === '/event'} themeState={themeState} fontSize="1.2rem" fontWeight="500">이벤트</NavigationFont>
      </MenuWrapper>

      <MenuWrapper active={pathName === '/column'} themeState={themeState} onClick={() => router.push('/column')}>
        <ImageWrapper width={3} height={3}>
          <Image src={column} alt='column' priority={true} loading="eager" />
        </ImageWrapper>

        <NavigationFont active={pathName === '/column'} themeState={themeState} fontSize="1.2rem" fontWeight="500">칼럼</NavigationFont>
      </MenuWrapper>
    </Frame>
  )
}

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
  box-shadow: ${props => props.themeState === 'dark' ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px' : 'rgb(0 0 0 / 7%) 0px -1px 1px, rgb(87 16 238 / 3%) 0px -6px 12px'};
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 5px;
  cursor: pointer;
  padding: 1rem;
  
  img {
    filter: ${props => 
      props.active && props.themeState === 'dark' ? 'brightness(0) invert(1)' : 
      props.active && props.themeState === 'light' ? '#000' : 'drop-shadow(16px 16px 20px red) invert(75%)'
    };
  }
`;

const NavigationFont = styled(Font)`
  color: ${props => 
      props.active && props.themeState === 'dark' ? '#fff' :
      props.active && props.themeState === 'light' ? '#000' : '#acacac'
  };
`;