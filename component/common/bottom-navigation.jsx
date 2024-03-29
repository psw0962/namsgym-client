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
  {
    id: 1,
    menu: '홈',
    iconUrl: home,
    routerPush: '/',
    pathName: '',
  },
  {
    id: 2,
    menu: '지점 안내',
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
  // {
  //   id: 4,
  //   menu: '이벤트',
  //   iconUrl: event,
  //   routerPush: '/event',
  //   pathName: 'event',
  // },
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
        <ModalMenuWrapper>
          <CustomAtag
            href="https://nonstop-attraction-3c8.notion.site/382e1fb43d6741c2afaedf971c33fd7d"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {`인재채용 >`}
          </CustomAtag>

          {/* <Font
            fontSize="1.6rem"
            color="#000"
            pointer={true}
            onClick={e => {
              e.stopPropagation();
              router.push('/notice');
              setIsMenuOpen(false);
            }}
          >
            {`공지사항 >`}
          </Font>

          <CustomAtag
            href="https://naver.me/FgvGUUTs"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {`고객 만족 설문 조사 >`}
          </CustomAtag> */}
        </ModalMenuWrapper>
      </Modal>

      <NavContainer>
        <MenuList>
          {bottomNavigationData.map(item => {
            return (
              <MenuWrapper
                key={item.id}
                active={pathName === item.pathName}
                themeState={themeState}
                onClick={() => router.push(item.routerPush)}
              >
                <MenuSpan>
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
                </MenuSpan>
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
        </MenuList>
      </NavContainer>
    </Frame>
  );
};

export default BottomNavigation;

const Frame = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 80px;
  width: calc(100% + 21 * 2);
  margin: 21px 0 0px -21px;

  box-shadow: ${props =>
    props.themeState === 'dark'
      ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px'
      : 'rgb(0 0 0 / 7%) 0px -1px 1px, rgb(87 16 238 / 3%) 0px -6px 12px'};
  background-color: ${props => (props.themeState === 'dark' ? '#000' : '#fff')};
  z-index: 50;
  transition: all 0.2s;
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const MenuWrapper = styled.li`
  width: 6rem;
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
  width: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

const CustomAtag = styled.a`
  font-size: 1.6rem;
  color: #000;
  text-decoration: none;
`;

const ModalMenuWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const MenuSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;
