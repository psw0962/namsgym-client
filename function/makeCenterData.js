import center1 from '@/constant/center/center1';
import center2 from '@/constant/center/center2';
import center3 from '@/constant/center/center3';
import center4 from '@/constant/center/center4';
import center5 from '@/constant/center/center5';
import center6 from '@/constant/center/center6';
import center7 from '@/constant/center/center7';
import center8 from '@/constant/center/center8';
import center9 from '@/constant/center/center9';
import center10 from '@/constant/center/center10';

const makeCenterData = (pathName, setData) => {
  switch (pathName) {
    case '1':
      return setData(center1);

    case '2':
      return setData(center2);

    case '3':
      return setData(center3);

    case '4':
      return setData(center4);

    case '5':
      return setData(center5);

    case '6':
      return setData(center6);

    case '7':
      return setData(center7);

    case '8':
      return setData(center8);

    case '9':
      return setData(center9);

    case '10':
      return setData(center10);

    default:
      return;
  }
};

export default makeCenterData;
