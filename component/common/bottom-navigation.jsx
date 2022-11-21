import useThemeState from "@/hooks/useThemeState";
import Image from "next/image";
import styled from "styled-components";
import Font from '@/component/common/font';
import ImageWrapper from '@/component/common/image-wrapper';
import { home, center, event, column } from "@/public/svg";

const BottomNavigation = () => {
  const { themeState } = useThemeState();

  return (
    <Frame themeState={themeState}>
      <MenuWrapper>
        <ImageWrapper width={3} height={3}>
          <Image src={home} alt='home' priority />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">홈</Font>
      </MenuWrapper>

      <MenuWrapper>
        <ImageWrapper width={3} height={3}>
          <Image src={center} alt='center' priority />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">센터소개</Font>
      </MenuWrapper>

      <MenuWrapper>
        <ImageWrapper width={3} height={3}>
          <Image src={event} alt='event' priority />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">이벤트</Font>
      </MenuWrapper>

      <MenuWrapper>
        <ImageWrapper width={3} height={3}>
          <Image src={column} alt='column' priority />
        </ImageWrapper>

        <Font fontSize="1.2rem" fontWeight="500">칼럼</Font>
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
  border:${props => props.themeState === 'dark' ? '1px solid #f0f0f0' : ''};
  box-shadow: rgb(0 0 0 / 7%) 0px -1px 1px, rgb(87 16 238 / 3%) 0px -6px 12px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 5px;
  cursor: pointer;
`;