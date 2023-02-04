import {
  center6_1,
  center6_2,
  center6_3,
  center6_4,
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
      name: '정재호 트레이너',
      career: [
        '남스짐 6호점 점장',
        '전) 남스짐 2호점 팀장',
        '전) 글로리휘트니스 트레이너',
        'NPC 보디빌딩 3위',
        'NPC 피지크 3위',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '운동처방사 2급',
        'IKA 케틀벨 트레이닝 Lv.2',
        '저스트핏 EMS트레이닝 자격 수료',
        '불가리안백 마스터',
        '블랙롤 근막이완 자격증',
        'CES PERSONAL TRAINING',
      ],
      images: [trainer1_1],
    },
    {
      id: 2,
      name: '고명성 트레이너',
      career: [
        '남스짐 6호점 마스터 트레이너',
        '전) 나인짐 트레이너',
        '전) 아이엠 트레이너',
        'Mr.부천 피지크 2위',
        'NPC리저널 피지크 2위',
        'PCA 충청보디빌딩 -80kg 2위',
        'PCA 안산보디빌딩 -80kg 3위',
      ],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '운동처방사 3급',
        '기초, 기능해부학 과정 수료',
        '저스트핏 EMS트레이닝 자격 수료',
        '불가리안백 마스터',
        '블랙롤 근막이완 자격증',
        'CES PERSONAL TRAINING',
      ],
      images: [trainer2_1, trainer2_2],
    },
    {
      id: 3,
      name: '노원준 트레이너',
      career: ['남스짐 6호점 트레이너', '전) 에비뉴 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '운동처방사 2급',
        '남스짐 아카데미 교육 이수',
        'EMS 운동처방사 자격 수료',
        '불가리안백 교육 수료',
        '소도구 트레이닝 Lv.2',
      ],
      images: [trainer3_1, trainer3_2],
    },
    {
      id: 4,
      name: '전선화 트레이너',
      career: [
        '남스짐 6호점 트레이너',
        '전) 핏블리 모델4기',
        '전) 스포애니 고착점 FC',
        '전) 액트짐 트레이너',
      ],
      tags: [
        '영양사 국가고시 면허증',
        'FISAF 국제 퍼스널 트레이너 자격증',
        'IPF 파워리프팅 자격증',
        '메디컬 트레이닝 자격증',
        'TFT 교육 수료',
        '블랙롤 근막이완 자격증',
      ],
      images: [trainer4_1, trainer4_2],
    },
    {
      id: 5,
      name: '조정훈 트레이너',
      career: ['남스짐 6호점 트레이너'],
      tags: ['생활스포츠지도사 2급(보디빌딩)'],
      images: [trainer5_1, trainer5_2],
    },
    {
      id: 6,
      name: '안영준 트레이너',
      career: ['남스짐 6호점 트레이너', '전) 팀원짐 트레이너'],
      tags: [
        '생활스포츠지도사 2급(보디빌딩)',
        '남스짐 아카데미 교육 수료',
        '기초, 기능해부학 과정 수료',
        'TFT교육과정 수료',
        '블랙롤 근막이완 자격증',
      ],
      images: [trainer6_1, trainer6_2],
    },
  ],
  kakaoTalkUrl: 'https://pf.kakao.com/_xoSxjxoK',
  naverPlaceUrl:
    'https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90%20%EC%98%A5%EA%B8%B8%EC%A0%90/place/1762867363?c=14116952.5021869,4504480.5158603,15,0,0,0,dh&isCorrectAnswer=true',
};

export default center6;
