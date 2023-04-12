import styled from 'styled-components';
import Font from '@/component/common/font';

const Complete = () => {
  return (
    <Frame>
      <Font fontSize="5rem">
        🥳 운동 프로그램이 종료되었습니다. 수고하셨습니다! 🎉
      </Font>

      <Font fontSize="5rem">
        오늘도 스스로를 위해 땀 흘린 당신에게 박수를 보냅니다 👏
      </Font>

      <Font fontSize="5rem">{`Let's Go Together!!👍`}</Font>
    </Frame>
  );
};

export default Complete;

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
