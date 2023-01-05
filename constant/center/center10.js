import {
  center10_1,
  center10_2,
  center10_3,
  center10_4,
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
} from '@/public/png/center/center10/index';

const center10 = {
  centerName: '10호점 시흥 월곶점',
  address: '경기 시흥시 월곶중앙로 49 2층',
  phone: '0507-1362-0776',
  images: [center10_1, center10_2, center10_3, center10_4],
  operatingTime: `
평일 : 07:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '이재정 트레이너',
      career: [
        '남스짐 10호점 팀장',
        '전) 남스짐 1호점 직원장',
        '전) 쓰리짐 팀장',
        '전) 메이드핏 휘트니스 트레이너',
        '22` MUSA 클래식 보디빌딩 1위',
        '21` MUSA 클래식 보디빌딩 2위',
        '20` PCA KOREA 보디빌딩 2위',
        '19` 미스터 수원 은메달',
        '19` 미스터 화성 은메달',
        '18` 미스터 인천 동메달',
        '17` 미스터 시흥 동메달',
      ],
      tags: ['생활스포츠지도사 2급(보디빌딩)'],
      images: [trainer1_1, trainer1_2],
    },
    {
      id: 2,
      name: '황재민 트레이너',
      career: ['남스짐 10호점 점장', '전) 남스짐 1호점 직원장'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '명지대학교 체육학부 졸업',
        'FISAF KOREA PERSONAL TRAINING',
        'FISAF KOREA MEDICAL TRAINING',
        'CES KOREA 대한교정운동전문가',
        'AKF KETTLEBELL LEVEL 1,2,3',
        'KT TAPE 자격증',
        '국대교정 골프케어 교육 수료',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '윤재욱 트레이너',
      career: ['남스짐 10호점 트레이너', '전) 프렌드짐 트레이너'],
      tags: [
        'IGA 국제그룹 트레이닝 지도자',
        '교정운동학 수료(더건강한PT)',
        '남스짐 아카데미 수료',
      ],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '박상은 트레이너',
      career: ['남스짐 10호점 트레이너', '전) 에비뉴 PT센터 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'FISAF KOREA MEDICAL TRAINING',
        '남스짐 아카데미 교육 수료',
        '청춘 웨이트 교육 수료',
      ],
      images: [trainer4_1, trainer4_2],
    },
    {
      id: 5,
      name: '이다정 트레이너',
      career: ['남스짐 10호점 트레이너', '전) SNPE 2급 지도자 과정 강사'],
      tags: [
        'CES KOREA 퍼스널 트레이너 자격증',
        'CES KOREA 블랙롤 근막이완 자격증',
        'CES KOREA 심박수 훈련 전문가 과정 자격증',
        'SNPE 바른자세척추운동 2급 지도사 자격증',
        'SNPE special training course 수료',
        '청춘 웨이트 교육 수료',
      ],
      images: [trainer5_1, trainer5_2],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_xdvxklxj',
  naverPlaceUrl:
    'https://map.naver.com/v5/entry/place/1566486851?c=14108106.6830268,4493353.4581360,15.96,0,0,0,dh&isCorrectAnswer=true',
};

export default center10;
