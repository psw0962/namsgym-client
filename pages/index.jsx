import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import styled from 'styled-components';
import Slick from '@/component/common/slick';
import event_1 from 'public/png/event/event_1.jpeg';
import logo from 'public/png/logo.png';
import FadeIn from 'react-fade-in';
import Font from '@/component/common/font';
import { motion } from 'framer-motion';
import {
  main_1,
  main_2,
  main_3,
  main_step_1,
  main_step_2,
  main_step_3,
} from '@/public/png/main';

const eventSlickData = [
  { id: 1, src: event_1, url: '/' },
  { id: 2, src: logo },
];

const mainImageData = [
  { id: 1, src: main_1 },
  { id: 2, src: main_2 },
  { id: 3, src: main_3 },
];

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const mainStepImageData = [[main_step_1], [main_step_2], [main_step_3]];

const Home = () => {
  return (
    <Frame>
      <Slick data={eventSlickData}></Slick>

      <FadeIn>
        <div>
          <Font fontSize="2.5rem" margin="6rem 0 3rem 0">
            남스짐의 차별화된 운영방식
          </Font>

          {mainImageData.map((item, index) => {
            return (
              <CustomImageWrapper key={item.id}>
                <Image src={item.src} alt={`main${index}`} />
              </CustomImageWrapper>
            );
          })}
        </div>
      </FadeIn>

      <Font fontSize="2.5rem" margin="6rem 0 3rem 0">
        남스짐의 차별화된 트레이닝 방식
      </Font>

      {mainStepImageData.map(([item], index) => (
        <motion.div
          key={index}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="card" variants={cardVariants}>
            <CustomImageWrapper>
              <Image src={item} alt={`main${index}`} />
            </CustomImageWrapper>
          </motion.div>
        </motion.div>
      ))}

      <FooterFrame>
        <Font
          fontSize="1.2rem"
          fontWeight="700"
          margin="0 0 2rem 0"
        >{`상호명 : 남스짐 컴퍼니`}</Font>
        <Font fontSize="1.2rem" fontWeight="700" margin="0 0 2rem 0">
          사업자등록번호 : 000-00-00000
        </Font>
        <Font fontSize="1.2rem" fontWeight="700" margin="0 0 2rem 0">
          대표자명 : 남건우
        </Font>
        <Font fontSize="1.2rem" fontWeight="700" margin="0 0 2rem 0">
          주소 : 부천시 옥길동745-5 퀸즈파크 C동 617호
        </Font>
        <Font fontSize="1.2rem" fontWeight="700" margin="0 0 2rem 0">
          전화번호 : 010-0000-0000 | 이메일 : admin@namsgym.com
        </Font>
        <Font fontSize="1.2rem" fontWeight="700" lineHeight="1.5">
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

const FooterFrame = styled.div`
  padding: 1.5rem;
  margin-top: 200px;
  background-color: #f5f5f5;
  border-radius: 20px;
`;
