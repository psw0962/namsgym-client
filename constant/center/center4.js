import {
  center4_1,
  center4_2,
  center4_3,
  center4_4,
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
} from '@/public/png/center/center4/index';

const center4 = {
  centerName: '4호점 구로 천왕점',
  address: '구로 천왕로 36 4층',
  phone: '0507-1405-3362',
  images: [center4_1, center4_2, center4_3, center4_4],
  operatingTime: `
평일 : 09:00 ~ 23:30
주말 및 공휴일 : 10:00 ~ 18:00
정기휴무 : 매주 일요일
공휴일 휴무 : 별도 공지
`,
  trainers: [
    {
      id: 1,
      name: '김영진 트레이너',
      career: [
        '남스짐 4호점 팀장',
        '전) 망고짐 거모점 트레이너',
        '전) 리얼짐 트레이너',
        '전) 망고짐 논현점 트레이너',
        '전) 남스짐 1호점 매니저',
        '전) 달콤한다이어트 헬스 팀장',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        'KFA 퍼스널 트레이너',
        'SFG 케틀벨 교육 수료',
        'SFG 불가리안백 교육 수료',
        '인천대학교 운동건강학부',
        '애니멀플로우 이제승 마스터 교육 수료',
      ],
      images: [trainer1_1, trainer1_2],
    },
    {
      id: 2,
      name: '문민지 트레이너',
      career: ['남스짐 4호점 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '남스짐 아카데미 교육 수료',
        '불가리안백 교육 수료',
        '소도구 트레이닝 교육 수료',
        '운동해부학 교육 수료',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '엄희준 트레이너',
      career: [
        '남스짐 4호점 트레이너',
        '유도 2단',
        '유도 삼보국가대표선발전 3위',
        'PCA 스포츠모델 3위',
      ],
      tags: [
        '남스짐 아카데미 교육 수료',
        '소도구 트레이닝 교육 수료',
        '기능해부학 교육 수료',
        '불가리안백 교육 수료',
        '스포츠마사지 교육 수료',
      ],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '오승균 트레이너',
      career: ['남스짐 4호점 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '남스짐 아카데미 교육 수료',
        '불가리안백 교육 수료',
        '소도구 트레이닝 교육 수료',
        '운동해부학 교육 수료',
      ],
      images: [trainer4_1, trainer4_2],
    },
    {
      id: 5,
      name: '차은정 트레이너',
      career: [
        '남스짐 4호점 트레이너',
        '전) 숨필라테스 강사',
        '전) 아벨필라테스 강사',
        '전) 애비뉴짐 트레이너',
      ],
      tags: [
        '매트/소도구 필라테스(매트, 폼롤러, 써클링, 미니볼, 보수, 짐볼, 밴드)',
        '대기구 필라테스(리포머, 캐딜락, 바렐, 체어, 스프링보드, 스파인코렉터, 아크바렐)',
        '불가리안백 교육 수료',
        '기능해부학 교육 수료',
        'MES 운동처방사 교육 수료',
        '재활 필라테스 교육 수료',
        '산전 필라테스 교육 수료',
      ],
      images: [trainer5_1, trainer5_2],
    },
    {
      id: 6,
      name: '신용재 트레이너',
      career: [
        '남스짐 4호점 점장',
        '전) 남스짐 2호점 트레이너',
        '21` WNPC성남 스포츠모델 입상',
      ],
      tags: [
        '명지대학교 체육학부 졸업',
        'NASM-CPT 미국 공인 퍼스널 트레이너 자격',
        '생활스포츠지도사 2급(보디빌딩)',
        '운동처방사 2급',
        '기초, 기능해부학 과정 수료',
        'MES 운동처방사 교육 수료',
        '소도구 트레이닝 Lv.2 수료',
      ],
      images: [trainer6_1],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_kxaRxkxb',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EC%B2%9C%EC%99%95%EC%A0%90/place/1017081459?c=14118762.3010719,4506348.9388933,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center4;
