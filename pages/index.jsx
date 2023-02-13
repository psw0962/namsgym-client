import { useEffect, useState } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import styled from 'styled-components';
import Slick from '@/component/common/slick';
import FadeIn from 'react-fade-in';
import Font from '@/component/common/font';
import { motion } from 'framer-motion';
import useThemeState from '@/hooks/useThemeState';
import Modal from '@/component/common/modal';
import {
  eventSlickImages,
  mainImages,
  mainStepImages,
  cardVariants,
  modalImages,
} from '@/constant/home';

const Home = () => {
  const { themeState } = useThemeState();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const StopWatchingToday = () => {
    const obj = {
      value: true,
      expire: Date.now() + 86400000,
    };

    const objString = JSON.stringify(obj);

    window.localStorage.setItem('mainDialog', objString);
  };

  const removeStopWatching = () => {
    const isShow = JSON.parse(window.localStorage.getItem('mainDialog'));

    if (!isShow) {
      return;
    }

    if (Date.now() > isShow.expire) {
      window.localStorage.removeItem('mainDialog');
      return;
    }
  };

  useEffect(() => {
    removeStopWatching();
  }, []);

  return (
    <Frame>
      <IframeWrapper>
        <iframe
          src="https://www.youtube.com/embed/QQqDaQ7pqy0"
          title="PT로 사람이 달라지다니!찐 후기"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </IframeWrapper>

      <CustomSlick data={eventSlickImages} height={40}></CustomSlick>

      <FadeIn>
        <div>
          <Font fontSize="2.5rem" margin="6rem 0 3rem 0">
            <span style={{ color: '#B49445' }}>남스짐</span>의 차별화된 운영방식
          </Font>

          {mainImages.map((item, index) => {
            return (
              <CustomImageWrapper key={item.id}>
                <Image
                  src={item.src}
                  alt={`main${index}`}
                  priority={true}
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </CustomImageWrapper>
            );
          })}
        </div>
      </FadeIn>

      <Font fontSize="2.5rem" margin="6rem 0 3rem 0">
        <span style={{ color: '#B49445' }}>남스짐</span>의 차별화된 트레이닝
        방식
      </Font>

      {mainStepImages.map(([item], index) => (
        <motion.div
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="card" variants={cardVariants}>
            <CustomImageWrapper>
              <Image
                src={item}
                alt={`main${index}`}
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              />
            </CustomImageWrapper>
          </motion.div>
        </motion.div>
      ))}

      <FooterFrame themeState={themeState}>
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
          전화번호 : 010-4756-3376
        </Font>
        <Font fontSize="1.3rem" fontWeight="500" margin="0 0 2rem 0">
          이메일 : namgh90@nate.com
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
          lineHeight="1.5"
          margin="2rem 0 0 0"
        >
          *본 페이지에 제공되는 모든 이미지는 남스짐의 고유한 재산 입니다.
          <br />
          무단으로 도용시 법적 처벌을 요구할 수 있습니다.
        </Font>
      </FooterFrame>

      {JSON.parse(window.localStorage.getItem('mainDialog'))?.value !==
        true && (
        <Modal
          state={isMenuOpen}
          setState={setIsMenuOpen}
          isOverflow={true}
          isCenter={false}
        >
          <Font
            fontSize="2rem"
            fontWeight="500"
            margin="0 0 3rem 0"
            color="#000"
          >
            현재 진행중인 이벤트🎉
          </Font>

          <CustomSlick
            data={modalImages}
            height={40}
            autoPlay={false}
            useDot={true}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Font
              fontSize="2rem"
              fontWeight="500"
              margin="3rem 0 0 0"
              color="#000"
              pointer={true}
              textDecoration="underline"
              onClick={() => {
                StopWatchingToday();
                setIsMenuOpen(false);
              }}
            >
              {`오늘 하루 그만보기 >`}
            </Font>

            <Font
              fontSize="2rem"
              fontWeight="500"
              margin="3rem 0 0 0"
              color="#000"
              pointer={true}
              textDecoration="underline"
              onClick={() => {
                setIsMenuOpen(false);
                window.open('https://naver.me/GLACdhWu');
              }}
            >
              {`무료 PT체험권 신청하기 >`}
            </Font>
          </div>
        </Modal>
      )}
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  img {
    border-radius: 5px;
  }

  .card {
    margin: 0 auto;
    width: 30rem;
    height: 45rem;
  }
`;

const CustomImageWrapper = styled(ImageWrapper)`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 1rem;
`;

const FooterFrame = styled.footer`
  padding: 1.5rem;
  margin-top: 200px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#f5f5f5'};
  border-radius: 5px;
`;

const CustomSlick = styled(Slick)`
  .slick-slider {
    touch-action: 'auto';
  }
`;

const CustomAtag = styled.a`
  font-size: 1.4rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-top: 56%;
  width: 100%;
  height: 0;
  margin-bottom: 3rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
