import { atom } from 'recoil';

export const themeStateAtom = atom({
  key: 'themeState',
  default: '',
});

export const reviewFilterStateAtom = atom({
  key: 'reviewFilterState',
  default: {
    tabState: '전체',
    keyWord: '',
  },
});

export const isOpenSnsFrameStateAtom = atom({
  key: 'isOpenSnsFrameState',
  default: true,
});

export const centerTabStateAtom = atom({
  key: 'centerTabState',
  default: '지점 안내',
});
