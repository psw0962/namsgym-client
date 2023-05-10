import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Image from 'node_modules/next/image';
import Button from '@/component/common/button';
import { useRouter } from 'node_modules/next/router';
import programData from '@/constant/program';
import { useRecoilState } from 'recoil';
import {
  timerMethodStateAtom,
  confirmMonitorCountStateAtom,
} from 'atoms/index';
import ReactPaginate from 'react-paginate';
import useDebounce from '@/hooks/useDebounce';
import { check } from '@/public/svg';

const searchKeyWordExample = [
  '웜업/스트레칭',
  '맨몸운동',
  '덤벨',
  '스텝박스',
  '슬램볼',
  '케틀벨',
  '밴드',
  '바벨',
  '배틀로프',
  '보수볼',
  '플레이트',
  '사다리',
  '파트너',
];

const basicTimer = `40초 운동 / 20초 휴식 X 12set = 1Round
총 3ROUND / 36set / 대휴식 2분 / 40분 타이머
`;

const customProgramData = () => {
  const result = [];

  programData?.forEach(x => {
    result.push({
      id: x.id,
      name: `[${x.id}]${x.name}`,
      image: x.image,
      isRow: x.isRow,
    });
  });

  return result;
};

const TogetherHome = () => {
  const router = useRouter();
  const [programs, setPrograms] = useState(programData || []);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [searchFlag, setSearchFlag] = useState('number');
  const [timerMethod, setTimerMethod] = useRecoilState(timerMethodStateAtom);
  const [confirmMonitorCount, setConfirmMonitorCount] = useRecoilState(
    confirmMonitorCountStateAtom,
  );

  const audio = new Audio('/sounds/beep.mp3');
  const debouncedSearchKeyWord = useDebounce(searchKeyWord);

  // 프로그램 검색
  useEffect(() => {
    if (debouncedSearchKeyWord === '') {
      return setPrograms(customProgramData());
    }

    const nameResult = customProgramData()?.filter(x => {
      return x.name.includes(debouncedSearchKeyWord);
    });

    const numberResult = customProgramData()?.filter(x => {
      return x.id.toString() === debouncedSearchKeyWord;
    });

    setPage(0);

    if (searchFlag === 'number') {
      return setPrograms(numberResult);
    }

    if (searchFlag === 'name') {
      return setPrograms(nameResult);
    }
  }, [debouncedSearchKeyWord]);

  // 새로고침 및 최초진입 시 프로그램 셋팅
  useEffect(() => {
    const arr = window.sessionStorage.getItem('program');

    if (arr?.length > 0) {
      return setSelectedItems(
        JSON.parse(window.sessionStorage.getItem('program')),
      );
    } else {
      return window.sessionStorage.setItem('program', JSON.stringify([]));
    }
  }, []);

  const onClickAddProgram = x => {
    const checkDuplication = JSON.parse(
      window.sessionStorage.getItem('program'),
    ).find(y => y.id === x.id);

    if (checkDuplication !== undefined) {
      return alert('같은 운동 종목은 선택할 수 없습니다.');
    }

    if (selectedItems.length > 8) {
      return alert('운동 종목은 최대 9개까지 선택할 수 있습니다.');
    }

    window.sessionStorage.setItem(
      'program',
      JSON.stringify([
        ...JSON.parse(window.sessionStorage.getItem('program')),
        {
          id: x.id,
          name: x.name,
          image: x.image,
          isRow: x.isRow,
        },
      ]),
    );

    setSelectedItems(JSON.parse(window.sessionStorage.getItem('program')));
  };

  const onClickDeleteProgram = x => {
    const currentProgram = JSON.parse(window.sessionStorage.getItem('program'));

    window.sessionStorage.setItem(
      'program',
      JSON.stringify(currentProgram?.filter(y => y.id !== x.id)),
    );

    setSelectedItems(JSON.parse(window.sessionStorage.getItem('program')));
  };

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(0);

  const endOffset = itemOffset + 4;
  const currentItems = programs?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(programs?.length / 4);

  const handlePageClick = event => {
    const newOffset = (event?.selected * 4) % programs?.length;
    setItemOffset(newOffset);
    setPage(event.selected);
  };

  return (
    <>
      <Container>
        <ContainerWrapper>
          <Font fontSize="4.5rem" fontWeight={500}>
            프로그램 선택하기
          </Font>

          <SearchFlagContainer>
            <SearchFlagWrapper>
              <input
                type="radio"
                id="number"
                name="search"
                value="number"
                checked={searchFlag === 'number'}
                onChange={e => {
                  setSearchFlag(e.target.value);
                  setSearchKeyWord('');
                }}
              />
              <SearchFlagLabel htmlFor="number">숫자로 찾기</SearchFlagLabel>
            </SearchFlagWrapper>

            <SearchFlagWrapper>
              <input
                type="radio"
                id="name"
                name="search"
                value="name"
                checked={searchFlag === 'name'}
                onChange={e => {
                  setSearchFlag(e.target.value);
                  setSearchKeyWord('');
                }}
              />
              <SearchFlagLabel htmlFor="name">이름으로 찾기</SearchFlagLabel>
            </SearchFlagWrapper>
          </SearchFlagContainer>

          <SearchInputWrapper>
            <div style={{ whiteSpace: 'nowrap' }}>
              <Font fontSize="2rem" fontWeight="500">
                검색
              </Font>
            </div>

            <input
              type="text"
              value={searchKeyWord}
              onChange={e => {
                setSearchKeyWord(e.target.value);
                setItemOffset(0);
              }}
            />

            <div style={{ width: '8rem' }}>
              <Button
                size="small"
                color="yellow"
                type="button"
                onClick={() => {
                  setSearchFlag('number');
                  setSearchKeyWord('');
                  setPage(0);
                  setItemOffset(0);
                }}
              >
                초기화
              </Button>
            </div>
          </SearchInputWrapper>

          <SearchKeyWordExampleWrapper>
            <Font fontSize="1.4rem">검색 키워드 :</Font>

            {searchKeyWordExample.map((x, index) => {
              return (
                <React.Fragment key={index}>
                  <Font
                    fontSize="1.4rem"
                    pointer={true}
                    textDecoration="underline"
                    onClick={() => {
                      setSearchKeyWord(x);
                      setSearchFlag('name');
                      setPage(0);
                      setItemOffset(0);
                    }}
                  >
                    {x}
                  </Font>
                </React.Fragment>
              );
            })}
          </SearchKeyWordExampleWrapper>

          {currentItems?.length === 0 && (
            <Font fontSize="1.6rem">검색 결과가 없습니다</Font>
          )}

          <ProgramContainer>
            {currentItems?.map(x => {
              return (
                <CardWrapper key={x?.id}>
                  <SelectedCheck
                    active={selectedItems.some(y => x.id === y.id)}
                  >
                    <Image src={check} alt="check" />
                  </SelectedCheck>

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

          <ReactPaginate
            containerClassName={'pagination-ul'}
            pageClassName={'pagination-li'}
            activeClassName={'currentPage'}
            previousClassName={'pageLabel-btn'}
            nextClassName={'pageLabel-btn'}
            nextLabel={null}
            previousLabel={null}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            forcePage={page}
          />

          <>
            <Line margin="40px 0" width="100%" />

            <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
              선택한 프로그램
            </Font>

            {selectedItems?.length > 0 ? (
              <SelectedBox>
                {selectedItems?.map((x, index) => {
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
                    </div>
                  );
                })}
              </SelectedBox>
            ) : (
              <NoContents>
                <Font fontSize="4rem">선택한 프로그램이 없습니다</Font>
              </NoContents>
            )}

            <Line margin="40px 0" width="100%" />

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

            <Line margin="40px 0" width="100%" />

            <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
              TV 개수 선택하기
            </Font>

            <SearchFlagContainer>
              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="single"
                  name="count"
                  value="single"
                  checked={confirmMonitorCount === 'single'}
                  onChange={e => {
                    setConfirmMonitorCount(e.target.value);
                  }}
                />
                <SearchFlagLabel htmlFor="single">1개</SearchFlagLabel>
              </SearchFlagWrapper>

              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="multi"
                  name="count"
                  value="multi"
                  checked={confirmMonitorCount === 'multi'}
                  onChange={e => {
                    setConfirmMonitorCount(e.target.value);
                  }}
                />
                <SearchFlagLabel htmlFor="multi">1개 이상</SearchFlagLabel>
              </SearchFlagWrapper>
            </SearchFlagContainer>

            <Line margin="40px 0" width="100%" />

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
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default React.memo(TogetherHome);

const Container = styled.div`
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

const ProgramContainer = styled.div`
  width: 80%;
  min-height: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 80%;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
`;

const SearchKeyWordExampleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 4rem 0;
`;

const SelectedCheck = styled.div`
  width: 100%;
  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: flex-end;
  position: absolute;
  top: 0;
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

const SearchInputWrapper = styled.div`
  width: 30%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
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
