import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Button from '@/component/common/button';
import { useRouter } from 'node_modules/next/router';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom, currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';

const TogetherHome = () => {
  const router = useRouter();
  const [play, setPlay] = useLocalStorage('play', false);
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );
  const audio = new Audio('/sounds/beep.mp3');

  // 새로고침 및 최초진입 시 프로그램 셋팅!
  useEffect(() => {
    const getPrograms = async () => {
      const snapshot = await db?.collection('current').get();
      const documents = snapshot?.docs[0].data().data;

      setCurrentProgramState(documents);
    };

    getPrograms();
  }, []);

  useEffect(() => {
    if (play) {
      router.push('/together/program');
    }

    return () => {
      return setPlay(false);
    };
  }, [play]);

  return (
    <>
      <Container>
        <ContainerWrapper>
          <>
            <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
              선택한 프로그램
            </Font>

            {currentProgramState?.length > 0 ? (
              <SelectedBox>
                {currentProgramState?.map((x, index) => {
                  return (
                    <div key={x?.id}>
                      <Font fontSize="4rem">{index + 1}</Font>
                      <CardWrapper>
                        <video
                          src={x?.image}
                          poster="/png/logo.png"
                          width="200"
                          height="200"
                          loop={true}
                          autoPlay={true}
                          muted={true}
                          preload="auto"
                        ></video>

                        <Font
                          fontSize="2.5rem"
                          fontWeight="500"
                          margin="20px 0"
                        >
                          {x.name}
                        </Font>
                      </CardWrapper>
                    </div>
                  );
                })}
              </SelectedBox>
            ) : (
              <NoContents>
                <Font fontSize="4rem">선택한 프로그램이 없습니다</Font>
              </NoContents>
            )}

            {/* <Line margin="40px 0" width="100%" /> */}

            {/* <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
              타이머 방식 선택하기
            </Font>

            <SearchFlagContainer>
              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="basic"
                  name="timer"
                  value="basic"
                  checked={timerMethod === 'basic'}
                  onChange={e => {
                    setTimerMethod(e.target.value);
                  }}
                />

                <SearchFlagLabel htmlFor="basic">{`[능곡/옥길] 기본`}</SearchFlagLabel>
              </SearchFlagWrapper>
            </SearchFlagContainer> */}

            {/* <Line margin="40px 0" width="100%" /> */}

            <ButtonWrapper>
              <Button
                margin="10rem"
                fontSize="2.5rem"
                size="large"
                color="black"
                type="button"
                onClick={() => {
                  router.push('/together/program');
                  setPlay(true);
                  audio.play();
                }}
              >
                프로그램 시작
              </Button>
            </ButtonWrapper>
          </>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default React.memo(TogetherHome);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }

  .program {
    border-radius: 20px !important;
  }

  // pagination
  .pagination-ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      cursor: pointer;
      font-size: 2rem;
    }
  }

  .pagination-li {
    font-size: 2rem;
  }

  .currentPage {
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 10px;
  }

  .pageLabel-btn {
    font-size: 2rem;
  }
`;

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const SelectedBox = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 80%;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
  margin-top: 10rem;
`;

const ButtonWrapper = styled.div`
  width: 50rem;
  height: 28rem;
  display: flex;
  justify-content: center;
`;

const SearchFlagContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 6rem 0 2rem 0;
`;

const SearchFlagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  white-space: nowrap;
`;

const SearchFlagLabel = styled.label`
  font-size: 2rem;
`;

const NoContents = styled.div`
  width: 80%;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
`;
