import {
  center2_1,
  center2_2,
  center2_3,
  center2_4,
  trainer1_1,
  trainer1_2,
  trainer2_1,
  trainer2_2,
  trainer3_1,
  trainer3_2,
  trainer4_1,
  trainer4_2,
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
      name: '박한영 트레이너',
      career: [
        '남스짐 2호점 트레이너',
        '전) 바디스타 휘트니스 트레이너',
        '전) 새마을휘트니스 트레이너',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '원광대학교 체육교육학과 졸업',
        '유아체육지도자 1급',
        '정교사 2급',
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
      ],
      images: [trainer1_1, trainer1_2],
    },
    {
      id: 2,
      name: '오연수 트레이너',
      career: ['남스짐 2호점 트레이너', '전) 커브스 여성전문 트레이너'],
      tags: [
        '저항운동 Lv.2 자격 수료',
        '스포츠마사지 2급',
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
        '소도구 트레이닝 Lv.2 자격 수료',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '이선명 트레이너',
      career: [
        '남스짐 2호점 마스터 트레이너',
        '전) 자이커뮤니티센터 트레이너',
        '20` PCA KOREA 피지크 입상',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
        'EMS트레이닝 자격 수료',
        '불가리안백 교육 수료',
      ],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '조은지 트레이너',
      career: ['남스짐 2호점 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
      ],
      images: [trainer4_1, trainer4_2],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_MIqhj',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EB%B2%94%EB%B0%95%EC%A0%90/place/1876092791?c=14116952.5021869,4504480.5158603,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center2;
