import {
  center3_1,
  center3_2,
  center3_3,
  center3_4,
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
  trainer6_1,
  trainer6_2,
} from '@/public/png/center/center3/index';

const center3 = {
  centerName: '3호점 구로 오류점',
  address: '구로 오류로70 4층',
  phone: '02-2619-3337',
  images: [center3_1, center3_2, center3_3, center3_4],
  operatingTime: `
평일 : 09:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
정기휴무 : 매주 일요일
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '강승원 트레이너',
      career: ['남스짐 3호점 트레이너', '전) 운동에 반하다 트레이너'],
      tags: [
        '케틀벨 스윙 지도사 자격 수료',
        '소도구 트레이닝 지도사 수료',
        '청춘웨이트 경기지부 3기 수료',
        '근막이완 과정 수료',
      ],
      images: [trainer1_1, trainer1_2],
    },
    {
      id: 2,
      name: '김도연 트레이너',
      career: [
        '남스짐 3호점 트레이너',
        '전) 운동에 반하다 트레이너',
        '전) 에비뉴 피티전문 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '소도구 트레이닝 교육 수료',
        '운동처방사 재활전문 Lv.1',
        '남스짐 아카데미 2기 수료',
        '케틀벨 교육 수료',
        'TFT 교육 이수',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '김종석 트레이너',
      career: ['남스짐 3호점 트레이너'],
      tags: ['생활스포츠지도사 2급(보디빌딩)'],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '신수빈 트레이너',
      career: [
        '남스짐 3호점 트레이너',
        '전) 송도 애플짐 GX 트레이너',
        '전) 케렌시아 휘트니스 GX 트레이너',
        '전) 디앤비 휘트니스 GX 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '인천대학교 운동건강학부 학사',
        '대한적십자사 Lifeguard',
        '대한토탈휘트니스협회 GX coaching',
      ],
      images: [trainer4_1, trainer4_2],
    },
    {
      id: 5,
      name: '정현성 트레이너',
      career: ['남스짐 3호점 트레이너', '전) 아트짐 트레이너'],
      tags: [
        '남스짐 아카데미 2기 수료',
        '소도구 트레이닝 교육 수료',
        'TFT 교육 이수',
        '케틀벨 교육 수료',
      ],
      images: [trainer5_1, trainer5_2],
    },
    {
      id: 6,
      name: '홍민우 트레이너',
      career: [
        '남스짐 3호점 마스터 트레이너',
        '전) 에이팩 트레이너',
        '전) 피크짐 동대문점 트레이너',
        '전) 바디채널 독산점 트레이너',
        '20` PCA KOREA 보디빌딩 TOP2',
        '쥬비스 앳홈 컨설턴트',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '근막재활 & 교정 과정 수료',
        'FISAF 국제 트레이너 자격증',
        'TFT 트레이닝 교육 수료',
      ],
      images: [trainer6_1, trainer6_2],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_IxorFT',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EC%98%A4%EB%A5%98%EC%A0%90/place/1200580002?c=14118926.4639254,4507732.5902900,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center3;
