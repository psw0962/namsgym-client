import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import styled from 'styled-components';
import Slick from '@/component/common/slick';
import FadeIn from 'react-fade-in';
import Font from '@/component/common/font';
import { motion } from 'framer-motion';
import useThemeState from '@/hooks/useThemeState';
import {
  eventSlickImages,
  mainImages,
  mainStepImages,
  cardVariants,
} from '@/constant/home';

const Home = () => {
  const { themeState } = useThemeState();

  return (
    <Frame>
      <Slick data={eventSlickImages}></Slick>

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
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          {`상호명 : 남스짐 컴퍼니`}
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          사업자등록번호 : 000-00-00000
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          대표자명 : 남건우
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          주소 : 부천시 옥길동745-5 퀸즈파크 C동 617호
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          전화번호 : 010-0000-1234
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" margin="0 0 2rem 0">
          이메일 : admin@namsgym.com
        </Font>
        <Font fontSize="1.3rem" fontWeight="700" lineHeight="1.5">
          *본 페이지에 제공되는 모든 이미지는 남스짐의 고유한 재산 입니다.
          <br />
          무단으로 도용시 법적 처벌을 요구할 수 있습니다.
        </Font>
      </FooterFrame>
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  img {
    border-radius: 20px;
  }

  .card {
    margin: 0 auto;
    width: 30rem;
    height: 45rem;
  }
`;

const CustomImageWrapper = styled(ImageWrapper)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 1rem;
`;

const FooterFrame = styled.footer`
  padding: 1.5rem;
  margin-top: 200px;
  background-color: ${props =>
    props.themeState === 'dark' ? '#1E1E1E' : '#f5f5f5'};
  border-radius: 20px;
`;
