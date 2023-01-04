import {
  center6_1,
  center6_2,
  center6_3,
  center6_4,
  trainer1_1,
} from '@/public/png/center/center6/index';

const center6 = {
  centerName: '6호점 부천 옥길점',
  address: '부천 옥길동 745-5 퀸즈파크 C동 8층',
  phone: '0507-1427-3375',
  images: [center6_1, center6_2, center6_3, center6_4],
  operatingTime: `
평일 : 09:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
정기휴무 : 매주 일요일
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '김현중 트레이너',
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'BLACK ROLL 자격증',
        'TFT 자격증',
        '소도구 트레이닝 교육 이수',
        'FISAF KOREA 자격증',
        'Functional Taping 자격증',
      ],
      images: [trainer1_1],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_xoSxjxoK',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EC%98%A5%EA%B8%B8%EC%A0%90/place/1762867363?c=14116952.5021869,4504480.5158603,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center6;
