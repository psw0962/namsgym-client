import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Button from '@/component/common/button';
import { useRouter } from 'node_modules/next/router';
import programData from '@/constant/program';
import { useRecoilState } from 'recoil';
import { timerMethodStateAtom } from 'atoms/index';

const basicTimer = `40초 운동 / 20초 휴식 / 3세트 후 1분 휴식: 1ROUND
총 4ROUND / 36set / 40분 타이머
`;

const TogetherHome = () => {
  const router = useRouter();
  const [programs, setPrograms] = useState(programData || []);
  const [selectedItem, setselectedItem] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);

  const audio = new Audio('/sounds/beep.mp3');

  useEffect(() => {
    if (searchKeyWord === '') {
      return setPrograms(programData);
    }

    const result = programData?.filter(x => x?.name?.includes(searchKeyWord));

    setPrograms(result);
  }, [searchKeyWord]);

  useEffect(() => {
    window.sessionStorage.setItem('program', JSON.stringify([]));
  }, []);

  const onClickAddProgram = x => {
    const checkDuplication = JSON.parse(
      window.sessionStorage.getItem('program'),
    ).find(y => y.id === x.id);

    if (checkDuplication !== undefined) {
      return alert('같은 운동 종목은 선택할 수 없습니다.');
    }

    window.sessionStorage.setItem(
      'program',
      JSON.stringify([
        ...JSON.parse(window.sessionStorage.getItem('program')),
        {
          id: x.id,
          name: x.name,
          image: x.image,
        },
      ]),
    );

    setselectedItem(JSON.parse(window.sessionStorage.getItem('program')));
  };

  const onClickDeleteProgram = x => {
    const currentProgram = JSON.parse(window.sessionStorage.getItem('program'));

    window.sessionStorage.setItem(
      'program',
      JSON.stringify(currentProgram?.filter(y => y.id !== x.id)),
    );

    setselectedItem(JSON.parse(window.sessionStorage.getItem('program')));
  };

  return (
    <>
      <Container>
        <ContainerWrapper>
          <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
            프로그램 선택하기
          </Font>

          <div
            style={{
              width: '50%',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: ' 4rem',
            }}
          >
            <Font fontSize="2rem" fontWeight="500">
              검색
            </Font>

            <input
              type="text"
              onChange={e => setSearchKeyWord(e.target.value)}
            />
          </div>

          <ProgramContainer>
            {programs?.map(x => {
              return (
                <CardWrapper key={x?.id}>
                  <ImageWrapper width={20} height={20}>
                    <Image
                      className="program"
                      src={x?.image}
                      alt={x?.name}
                      priority={true}
                      quality={80}
                      placeholder="blur"
                      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                      width={180}
                      height={200}
                    />
                  </ImageWrapper>

                  <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                    {x.name}
                  </Font>

                  <Button
                    size="small"
                    color="yellow"
                    type="button"
                    onClick={() => {
                      onClickAddProgram(x);
                    }}
                  >
                    추가하기
                  </Button>
                </CardWrapper>
              );
            })}
          </ProgramContainer>

          {selectedItem?.length > 0 && (
            <>
              <Line margin="40px 0" width="80%" />

              <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
                선택한 프로그램
              </Font>

              <SelectedBox>
                {selectedItem?.map(x => {
                  return (
                    <CardWrapper key={x?.id}>
                      <ImageWrapper width={20} height={20}>
                        <Image
                          className="program"
                          src={x?.image}
                          alt={x?.name}
                          priority={true}
                          quality={80}
                          placeholder="blur"
                          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                          width={180}
                          height={200}
                        />
                      </ImageWrapper>

                      <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                        {x.name}
                      </Font>

                      <Button
                        size="small"
                        color="black"
                        type="button"
                        onClick={() => {
                          onClickDeleteProgram(x);
                        }}
                      >
                        삭제하기
                      </Button>
                    </CardWrapper>
                  );
                })}
              </SelectedBox>

              <Line margin="40px 0" width="80%" />

              <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
                타이머 방식 선택하기
              </Font>

              <div>
                <TimerMethodBox>
                  <Font fontSize="2.5rem" fontWeight="500">
                    {timerMethod}
                  </Font>

                  <pre>{basicTimer}</pre>
                </TimerMethodBox>
              </div>

              <Line margin="40px 0" width="80%" />

              <ButtonWrapper>
                <Button
                  margin="10rem"
                  fontSize="2.5rem"
                  size="large"
                  color="black"
                  type="button"
                  onClick={() => {
                    router.push('/together/program');
                    audio.play();
                  }}
                >
                  프로그램 시작
                </Button>
              </ButtonWrapper>
            </>
          )}
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default TogetherHome;

const Container = styled.div`
  padding: 3rem;

  input {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }

  .program {
    border-radius: 20px !important;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgramContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const SelectedBox = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 80%;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
`;

const ButtonWrapper = styled.div`
  width: 50rem;
  height: 28rem;
  display: flex;
  justify-content: center;
`;

const TimerMethodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 2.5rem;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
