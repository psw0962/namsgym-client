import styled from 'styled-components';
import Font from 'component/common/font';
import Button from 'component/common/button';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  return (
    <Frame>
      <Font fontSize="2rem">해당 페이지를 찾지 못했습니다.</Font>

      <Font
        fontSize="1.6rem"
        margin="1.5rem 0 0 0"
        textAlign="center"
        lineHeight="3rem"
      >
        주소가 잘못 되었거나
        <br /> 더이상 제공되지 않는 페이지입니다.
      </Font>

      <ButtonWrapper>
        <Button
          size="large"
          color="yellow"
          type="button"
          onClick={() => router.push('/')}
        >
          메인 홈으로 이동
        </Button>

        <Button
          size="large"
          color="black"
          type="button"
          onClick={() => router.back()}
        >
          이전 화면으로 이동
        </Button>

        {/* <Button
          size="large"
          color="black"
          type="button"
          onClick={() => router.back()}
        >
          이전 화면으로 이동
        </Button> */}
      </ButtonWrapper>
    </Frame>
  );
};

export default Custom404;

const Frame = styled.div`
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 4rem;
`;
