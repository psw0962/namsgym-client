import { useRouter } from 'node_modules/next/router';
import TogetherHome from './home';
import Program from './program';

const Together = () => {
  const router = useRouter();

  return (
    <>
      {router?.pathname === '/together' && <TogetherHome />}
      {router?.pathname === '/together/program' && <Program />}
    </>
  );
};

export default Together;
