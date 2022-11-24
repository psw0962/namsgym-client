import event_1 from 'public/png/event/event_1.jpeg';
import logo from 'public/png/logo.png';
import kakaotalk from 'public/png/kakaotalk.png';
import naverblog from 'public/png/naverblog.png';
import {
  main_1,
  main_2,
  main_3,
  main_step_1,
  main_step_2,
  main_step_3,
} from '@/public/png/main';

// 메인 캐러셀 이미지
export const eventSlickImages = [
  { id: 1, src: event_1, url: '/' },
  { id: 2, src: logo },
];

// 메인 소개 이미지
export const mainImages = [
  { id: 1, src: main_1 },
  { id: 2, src: main_2 },
  { id: 3, src: main_3 },
];

// 메인 카드 애니매이션 이미지
export const mainStepImages = [[main_step_1], [main_step_2], [main_step_3]];

// 메인 카드 애니매이션 옵션
export const cardVariants = {
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

// 메인 sns 버튼 로고 이미지
export const snsLogoImages = [
  {
    id: 1,
    src: kakaotalk,
    url: 'https://pf.kakao.com/_xoSxjxoK',
    alt: 'kakaotalk',
  },
  {
    id: 2,
    src: naverblog,
    url: 'https://blog.naver.com/namsgym',
    alt: 'naverblog',
  },
];
