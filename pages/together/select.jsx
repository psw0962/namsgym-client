import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Image from 'node_modules/next/image';
import Button from '@/component/common/button';
import programData from '@/constant/program';
import { useRecoilState } from 'recoil';
import { selectedProgramStateAtom } from 'atoms/index';
import ReactPaginate from 'react-paginate';
import useDebounce from '@/hooks/useDebounce';
import { check } from '@/public/svg';
import { db } from 'utils/firebase';

const SEARCHKEYWORDEXAMPLE = [
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
  '로잉/스키',
];

const Select = () => {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [programs, setPrograms] = useState(programData || []);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [searchFlag, setSearchFlag] = useState('number');
  const [selectedProgramState, setSelectedProgramState] = useRecoilState(
    selectedProgramStateAtom,
  );

  const debouncedSearchKeyWord = useDebounce(searchKeyWord);

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

  // firestore get 요청
  const getPrograms = async () => {
    const snapshot = await db?.collection('selected').get();
    const documents = snapshot?.docs[0].data().data;

    setSelectedProgramState(documents);
  };

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

  // 새로고침 및 최초 진입 시 프로그램 셋팅
  useEffect(() => {
    getPrograms();
  }, []);

  const onClickAddProgram = x => {
    const checkDuplication = selectedProgramState?.find(y => y.id === x.id);
    if (checkDuplication !== undefined) {
      return alert('같은 운동 종목은 선택할 수 없습니다.');
    }

    const newObject = {
      data: [
        ...selectedProgramState,
        {
          id: x?.id,
          name: x?.name,
          image: x?.image,
          isRow: x?.isRow,
        },
      ],
    };

    const docRef = db.collection('selected').doc('programs');
    const setNewObject = async () => {
      await docRef.set(newObject);
    };

    setNewObject();
    getPrograms();
  };

  const onClickDeleteProgram = async x => {
    const snapshot = await db?.collection('selected').get();
    const documents = snapshot?.docs[0].data().data;

    const deleteProgram = async () => {
      const updatedArray = documents.filter(item => item.id !== x.id);
      await db.collection('selected').doc('programs').update({
        data: updatedArray,
      });
    };

    deleteProgram();
    getPrograms();
  };

  const savePrograms = async () => {
    const save = async () => {
      await db.collection('current').doc('programs').update({
        data: selectedProgramState,
      });
    };

    save();
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

  const onClickSubmitPassword = password => {
    if (password === '890890') {
      return setCheckPassword(true);
    } else {
      return setCheckPassword(false);
    }
  };

  return (
    <>
      <CheckPasswordFrame active={checkPassword}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Font>비밀번호: </Font>

          <input
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                onClickSubmitPassword(password);
              }
            }}
          />

          <Button
            color="yellow"
            onClick={() => onClickSubmitPassword(password)}
          >
            submit
          </Button>
        </div>
      </CheckPasswordFrame>

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

            {SEARCHKEYWORDEXAMPLE.map((x, index) => {
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
                    active={selectedProgramState?.some(y => x.id === y.id)}
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

            {selectedProgramState?.length > 0 ? (
              <SelectedBox>
                {selectedProgramState?.map((x, index) => {
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

            <Font fontSize="2rem" color="red" margin="10rem 0 0 0">
              *저장하기 버튼을 누르면 현재 진행되고 있는 전 지점의 수업
              프로그램도 바뀝니다.(이 페이지에서 선택한 프로그램은 따로 저장하지
              않아도 저장됩니다.)
            </Font>

            <Font fontSize="2rem" color="red" margin="1rem 0 1rem 0">
              전 지점의 수업이 모두 종료된 후 저장하기 버튼을 눌러주세요.
            </Font>

            <ButtonWrapper>
              <Button
                fontSize="2.5rem"
                size="large"
                color="black"
                type="button"
                onClick={() => {
                  savePrograms();
                  alert('프로그램이 저장되었습니다.');
                }}
              >
                저장하기
              </Button>
            </ButtonWrapper>
          </>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default React.memo(Select);

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
  /* height: 28rem; */
  display: flex;
  justify-content: center;
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

const CheckPasswordFrame = styled.div`
  display: ${props => (props.active ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 200;
`;
