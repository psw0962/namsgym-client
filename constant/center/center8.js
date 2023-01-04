import {
  center8_1,
  center8_2,
  center8_3,
  center8_4,
  trainer1_1,
  trainer2_1,
  trainer3_1,
  trainer4_1,
  trainer5_1,
  trainer6_1,
  trainer7_1,
} from '@/public/png/center/center8/index';

const center8 = {
  centerName: '8호점 군포 산본점',
  address: '경기 군포시 고산로 691 도율빌딩 5층',
  phone: '0507-1390-3375',
  images: [center8_1, center8_2, center8_3, center8_4],
  operatingTime: `
평일 : 06:00 ~ 24:00
주말 및 공휴일 : 10:00 ~ 18:00
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
    {
      id: 2,
      name: '손석환 트레이너',
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
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
        '생활스포츠지도사 2급(보디빌딩)',
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
        '생활스포츠지도사 2급(보디빌딩)',
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
        '생활스포츠지도사 2급(보디빌딩)',
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
        '생활스포츠지도사 2급(보디빌딩)',
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
        '생활스포츠지도사 2급(보디빌딩)',
        'Functional Taping 자격증',
        '케틀벨&TRX 교육 이수',
        '글라스톤 교육 이수',
        '스포츠 마사지 교육 이수',
        '소도구 트레이닝 교육 이수',
      ],
      images: [trainer7_1],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_STxcrb',
  naverPlaceUrl:
    'https://map.naver.com/v5/entry/place/1136567577?c=14129897.3264950,4491016.1690441,15.96,0,0,0,dh&isCorrectAnswer=true',
};

export default center8;
