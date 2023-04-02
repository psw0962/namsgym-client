import { useRouter } from 'node_modules/next/router';
import TogetherHome from './home';
import Program from './program';
import Complete from './complete';

const Together = () => {
  const router = useRouter();

  return (
    <>
      {router?.pathname === '/together' && <TogetherHome />}
      {router?.pathname === '/together/program' && <Program />}
      {router?.pathname === '/together/complete' && <Complete />}
    </>
  );
};

export default Together;
