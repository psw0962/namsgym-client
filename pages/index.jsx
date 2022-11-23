import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import styled from 'styled-components';
import Slick from '@/component/common/slick';
import event_1 from 'public/png/event/event_1.jpeg';
import logo from 'public/png/logo.png';
import FadeIn from 'react-fade-in';
import Font from '@/component/common/font';
import { motion, Variants } from 'framer-motion';
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

const mainStepImageData = [
  { id: 1, src: main_step_1 },
  { id: 2, src: main_step_2 },
  { id: 3, src: main_step_3 },
];

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

      <FadeIn>
        <div>
          <Font fontSize="2.5rem" margin="6rem 0 3rem 0">
            남스짐의 차별화된 트레이닝 방식
          </Font>

          {mainStepImageData.map((item, index) => {
            return (
              <CustomImageWrapper key={item.id}>
                <Image src={item.src} alt={`main${index}`} />
              </CustomImageWrapper>
            );
          })}
        </div>
      </FadeIn>
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  img {
    border-radius: 20px;
  }
`;

const CustomImageWrapper = styled(ImageWrapper)`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 1rem;
`;
