import {
  center5_1,
  center5_2,
  center5_3,
  center5_4,
  trainer1_1,
  trainer2_1,
  trainer2_2,
  trainer3_1,
  trainer3_2,
  trainer4_1,
  trainer4_2,
  trainer5_1,
  trainer5_2,
  trainer6_1,
  trainer6_2,
  trainer7_1,
} from '@/public/png/center/center5/index';

const center5 = {
  centerName: '5호점 시흥 능곡점',
  address: '경기 시흥시 승지로60번길 12 광장프라자 3층',
  phone: '0507-1428-7377',
  images: [center5_1, center5_2, center5_3, center5_4],
  operatingTime: `
평일 : 08:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
정기휴무 : 둘째주 넷째주 일요일 정기 휴무
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '박정명 트레이너',
      career: [
        '남스짐 5호점 팀장',
        '전) 남스짐 3호점 직원장',
        '전) 에비뉴짐 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'CES PERSONAL TRAINING',
        '블랙롤 근막이완 자격증',
        '스포츠마사지 교육 이수',
        '스포츠테이핑 교육 이수',
        'WNGP 스포츠모델 2위',
        'MUSA 스포츠모델 입상',
      ],
      images: [trainer1_1],
    },
    {
      id: 2,
      name: '강민혁 트레이너',
      career: [
        '남스짐 5호점 트레이너',
        '전) 바디홀릭 트레이너',
        '전) 남스짐 2호점 트레이너',
      ],
      tags: [
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
        '남스짐 아카데미 교육 수료',
        '소도구 트레이닝 교육 수료',
        'TFT 교육 수료',
        '스포츠마사지 교육 수료',
        '케틀벨 교육 수료',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '김혁진 트레이너',
      career: ['남스짐 5호점 트레이너'],
      tags: ['생활스포츠지도사 2급(보디빌딩)'],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '서정현 트레이너',
      career: ['남스짐 5호점 트레이너', '전) 퍼펙트바디짐 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'CES KOREA 대한교정운동전문가',
        '남스짐 아카데미 교육 수료',
        '스포츠마사지 교육 수료',
        '소도구 트레이닝 교육 수료',
        '블랙롤 교육 수료',
        '테이핑 교육 수료',
        'TFT 교육 수료',
      ],
      images: [trainer4_1, trainer4_2],
    },
    {
      id: 5,
      name: '최주영 트레이너',
      career: [
        '남스짐 5호점 트레이너',
        '전) 운동에반하다 트레이너',
        '전) 남스짐 4호점 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '남스짐 아카데미 교육 수료',
        '스포츠마사지 교육 수료',
        '자가근막이완 교육 수료',
        'TFT 교육 수료',
        '케틀벨 교육 수료',
      ],
      images: [trainer5_1, trainer5_2],
    },
    {
      id: 6,
      name: '홍찬미 트레이너',
      career: ['남스짐 5호점 트레이너', '전) 아트짐 휘트니스 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'FISAF 국제 트레이너 자격증',
        'CES PERSONAL TRAINING',
        '블랙롤 근막이완 이수',
      ],
      images: [trainer6_1, trainer6_2],
    },
    {
      id: 7,
      name: '김준형 트레이너',
      career: [
        '남스짐 5호점 트레이너',
        '전) 삼성디스플레이 탕정 트레이너',
        '전) 아베뉴짐 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '노인체육지도자 1급',
        '스포츠마사지 1급',
        '레크리에이션지도사 1급',
        '풋살심판 4급',
        '피사프자격 수료',
        '자가근막이완 자격 수료',
      ],
      images: [trainer7_1],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_HueSK',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EB%8A%A5%EA%B3%A1%EC%A0%90/place/1643426658?c=14115665.3483103,4490641.3637084,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center5;
