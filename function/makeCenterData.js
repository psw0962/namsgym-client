import center1 from '@/constant/center/center1';

const makeCenterData = (pathName, setData) => {
  switch (pathName) {
    case '1':
      return setData(center1);

    default:
      return;
  }
};

export default makeCenterData;
