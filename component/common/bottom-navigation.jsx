import Image from 'next/image';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ImageWrapper from '@/component/common/image-wrapper';
import useThemeState from '@/hooks/useThemeState';
import { home, center, event, menu, review } from '@/public/svg';
import { useRouter } from 'next/router';
import useScrollEvent from 'hooks/useScrollEvent';
import Modal from './modal';
import { useState } from 'react';

const bottomNavigationData = [
  { id: 1, menu: '홈', iconUrl: home, routerPush: '/', pathName: '' },
  {
    id: 2,
    menu: '지점안내',
    iconUrl: center,
    routerPush: '/center',
    pathName: 'center',
  },
  {
    id: 3,
    menu: '리뷰',
    iconUrl: review,
    routerPush: '/review',
    pathName: 'review',
  },
  {
    id: 4,
    menu: '이벤트',
    iconUrl: event,
    routerPush: '/event',
    pathName: 'event',
  },
];

const BottomNavigation = () => {
  const router = useRouter();
  const pathName = router?.pathname.split('/')[1];
  const { themeState } = useThemeState();
  const { scrollEventState } = useScrollEvent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Frame themeState={themeState} scrollEventState={scrollEventState}>
      <Modal state={isMenuOpen} setState={setIsMenuOpen}>
        <Font fontSize="1.6rem" fontWeight={700} color="#000">
          준비중 입니다.
        </Font>
      </Modal>

      {bottomNavigationData.map(item => {
        return (
          <MenuWrapper
            key={item.id}
            active={pathName === item.pathName}
            themeState={themeState}
            onClick={() => router.push(item.routerPush)}
          >
            <ImageWrapper width={3} height={3}>
              <Image
                src={item.iconUrl}
                alt={item.menu}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </ImageWrapper>

            <NavigationFont
              active={pathName === item.pathName}
              themeState={themeState}
              fontSize="1.2rem"
              fontWeight="500"
            >
              {item.menu}
            </NavigationFont>
          </MenuWrapper>
        );
      })}

      <EtcMenuWrapper
        themeState={themeState}
        onClick={() => setIsMenuOpen(true)}
      >
        <ImageWrapper width={3} height={3}>
          <Image
            src={menu}
            alt="menu"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">
          메뉴
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
  height: 80px;
  padding: 2rem;
  box-shadow: ${props =>
    props.themeState === 'dark'
      ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'
      : 'rgb(0 0 0 / 7%) 0px -1px 1px, rgb(87 16 238 / 3%) 0px -6px 12px'};
  background-color: ${props => (props.themeState === 'dark' ? '#000' : '#fff')};
  z-index: 10;
  transition: all 0.2s;
`;

const MenuWrapper = styled.div`
  width: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 1rem;
  white-space: nowrap;

  img {
    filter: ${props =>
      props.themeState === 'dark' ? 'brightness(0) invert(1)' : '#000'};
  }

  border: ${props =>
    props.active && props.themeState === 'dark'
      ? '1px solid #fff'
      : props.active && props.themeState === 'light'
      ? '1px solid #000'
      : ''};
  border-radius: 5px;
`;

const NavigationFont = styled(Font)`
  color: ${props => (props.themeState === 'dark' ? '#fff' : '#000')};
`;

const EtcMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  img {
    filter: ${props =>
      props.themeState === 'dark'
        ? 'brightness(0) invert(1)'
        : props.themeState === 'light'
        ? '#000'
        : 'drop-shadow(16px 16px 20px red) invert(75%)'};
  }

  p {
    color: ${props => (props.themeState === 'dark' ? '#fff' : '#000')};
  }
`;
