import { useRouter } from 'node_modules/next/router';
import TogetherHome from './home';
import Program from './program';
import Complete from './complete';
import Select from './select';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Together = () => {
  const router = useRouter();

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {router?.pathname === '/together/select' && <Select />}
        {router?.pathname === '/together' && <TogetherHome />}
        {router?.pathname === '/together/program' && <Program />}
        {router?.pathname === '/together/complete' && <Complete />}
      </DndProvider>
    </>
  );
};

export default Together;
