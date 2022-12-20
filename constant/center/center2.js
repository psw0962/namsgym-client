import {
  center2_1,
  center2_2,
  center2_3,
  center2_4,
  trainer1_1,
  trainer2_1,
  trainer3_1,
  trainer4_1,
  trainer5_1,
  trainer6_1,
  trainer7_1,
} from '@/public/png/center/center2/index';

const center2 = {
  centerName: '2호점 부천 범박점',
  address: '경기 부천시 범안로 117 2층',
  phone: '0507-1392-3375',
  images: [center2_1, center2_2, center2_3, center2_4],
  operatingTime: `
평일 : 09:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
정기휴무 : 매주 일요일
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '김현정 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        'BLACK ROLL 자격증',
        'TFT 자격증',
        '소도구 트레이닝 교육 이수',
        'FISAF KOREA 자격증',
        'Functional Taping 자격증',
      ],
      images: [trainer1_1],
    },
    {
      id: 2,
      name: '손석환 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
        'FISAF KOREA 자격증',
        'Functional Taping 자격증',
      ],
      images: [trainer2_1],
    },
    {
      id: 3,
      name: '김지훈 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        'FISAF KOREA PERSONAL TRAINING',
        'FISAF KOREA MEDICAL TRAINING',
        'CES KOREA 대한교정운동전문가',
        'KT TAPE 자격',
        'AKF KETTLEBELL LEVEL 1,2,3',
        'NASM CPT',
        'WNGP 보디빌딩 동메달',
        '글라스톤 교육 이수',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
      ],
      images: [trainer3_1],
    },
    {
      id: 4,
      name: '황재민 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        '명지대학교 체육학부 졸업',
        'FISAF KOREA PERSONAL TRAINING',
        'FISAF KOREA MEDICAL TRAINING',
        'CES KOREA 교정운동학',
        'KT TAPE 자격',
        'AKF KETTLEBELL LEVEL 1,2,3',
        'WNGP 주최 대회 스포츠모델 TOP 6',
        '글라스톤 교육 이수',
      ],
      images: [trainer4_1],
    },
    {
      id: 5,
      name: '박지희 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        '관동대학교 사회체육학과 졸업',
        'CES PERSONAL TRAINING',
        'NASM CPT',
        '유아체육지도자',
        '운동처방사',
        'KT TAPE 자격',
        '글라스톤 교육 이수',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
      ],
      images: [trainer5_1],
    },
    {
      id: 6,
      name: '황태현 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        'CES PERSONAL TRAINING',
        'Functional Taping 자격증',
        'NASM CPT',
        '글라스톤 교육 이수',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
      ],
      images: [trainer6_1],
    },
    {
      id: 7,
      name: '이재정 트레이너',
      tags: [
        '생활체육지도자 2급(보디빌딩)',
        'Functional Taping 자격증',
        '케틀벨&TRX 교육 이수',
        '글라스톤 교육 이수',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
      ],
      images: [trainer7_1],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_MIqhj',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EB%B2%94%EB%B0%95%EC%A0%90/place/1876092791?c=14116952.5021869,4504480.5158603,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center2;
