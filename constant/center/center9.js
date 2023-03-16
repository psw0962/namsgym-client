import {
  center9_1,
  center9_2,
  center9_3,
  center9_4,
  trainer1_1,
  trainer1_2,
  trainer2_1,
  trainer2_2,
  trainer3_1,
  trainer3_2,
  trainer4_1,
  trainer4_2,
  trainer5_1,
  trainer5_2,
} from '@/public/png/center/center9/index';

const center9 = {
  centerName: '9호점 시흥 은행점',
  address: '경기도 시흥시 대은로 80 5층',
  phone: '0507-1394-7377',
  images: [center9_1, center9_2, center9_3, center9_4],
  operatingTime: `
평일 : 06:00 ~ 24:00
주말 및 공휴일 : 10:00 ~ 18:00
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '김철기 트레이너',
      career: [
        '남스짐 9호점 매니저',
        '전) 남스짐 3호점 팀장',
        '전) 남스짐 2호점 트레이너',
        '20` PCA KOREA 스포츠모델 TOP3',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'CES KOREA 대한교정운동전문가',
        'TFT 트레이닝 교육 수료',
        '케틀벨&메디신볼&보수볼 교육 이수',
        '스포츠마사지&테이핑 교육 이수',
        '골반불균형 교정 및 시퀀스 운동(바디메카닉) 교육 이수',
      ],
      images: [trainer1_1, trainer1_2],
    },
    {
      id: 2,
      name: '김현미 트레이너',
      career: ['남스짐 9호점 트레이너', '전) 남스짐 3호점 트레이너'],
      tags: [
        'FISAF 메디컬 트레이닝',
        'CES KOREA 대한교정운동전문가',
        '케틀벨 스윙 지도사 자격증',
        '소도구 트레이닝 지도사 자격증',
        '근막이완 교육 이수',
        '메디신볼 교육 이수',
        '테이핑 교육 이수',
      ],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 3,
      name: '한재훈 트레이너',
      career: [
        '남스짐 9호점 트레이너',
        '전) 남스짐 5호점 팀장',
        '전) 남스짐 3호점 트레이너',
        '전) 운동에반하다 트레이너',
      ],
      tags: [
        'FISAF 메디컬 트레이닝',
        '소도구 트레이닝 교육 이수',
        '스포츠마사지&근막이완&테이핑 교육 이수',
        '태권도 4단',
        '합기도 3단',
      ],
      images: [trainer5_1, trainer5_2],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_xaBxikb',
  naverPlaceUrl:
    'https://map.naver.com/v5/entry/place/1890409909?c=14114543.1091927,4501213.8303306,15.96,0,0,0,dh&isCorrectAnswer=true',
};

export default center9;
