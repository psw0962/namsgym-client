import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ReviewTab from '@/component/review/review-tab';
import FadeIn from 'react-fade-in';
import ReviewCard from '@/component/review/review-card';
import { reviewData } from '@/constant/review';
import { useRecoilState } from 'recoil';
import { reviewSearchKeyWordStateAtom } from 'atoms';
import { search } from '@/public/svg';
import Image from 'next/image';
import useDebounce from '@/hooks/useDebounce';
import Button from '@/component/common/button';
import useThemeState from '@/hooks/useThemeState';

const Review = () => {
  const [tabState, setTabState] = useState('전체');
  const [reviewSearchKeyWordState, setReviewSearchKeyWordState] =
    useRecoilState(reviewSearchKeyWordStateAtom);
  const [reviews, setReviews] = useState(reviewData || []);
  const debouncedSearch = useDebounce(reviewSearchKeyWordState, 500);
  const { themeState } = useThemeState();

  useEffect(() => {
    // 검색어X, 탭X
    if (debouncedSearch === '' && tabState === '전체') {
      setReviews(reviewData);
      return;
    }

    // 검색어O, 탭O
    if (debouncedSearch !== '' && tabState !== '전체') {
      const replaceSearchKeyWord = debouncedSearch.replace(/ /gi, '');
      const result = reviewData
        ?.filter(x => x.tag === tabState)
        ?.filter(k => k.searchKey.includes(replaceSearchKeyWord));

      setReviews(result);
      return;
    }

    // 검색어X, 탭O
    if (debouncedSearch === '' && tabState !== '전체') {
      const result = reviewData?.filter(x => x.tag === tabState);

      setReviews(result);
      return;
    }

    // 검색어O, 탭X
    if (debouncedSearch !== '' && tabState === '전체') {
      const replaceSearchKeyWord = debouncedSearch.replace(/ /gi, '');
      const result = reviewData?.filter(y =>
        y.searchKey.includes(replaceSearchKeyWord),
      );

      setReviews(result);
      return;
    }
  }, [debouncedSearch, tabState]);

  // 검색어 초기화
  useEffect(() => {
    return () => {
      return setReviewSearchKeyWordState('');
    };
  }, []);

  return (
    <Frame>
      <Font fontSize="2rem" margin="0 0 5rem 0">
        리뷰
      </Font>

      <CustomAtag
        themeState={themeState}
        href="https://map.naver.com/v5/search/%EB%82%A8%EC%8A%A4%EC%A7%90?c=14117419.4846567,4504480.5158603,15,0,0,0,dh"
        target="_blank"
        rel="noreferrer"
      >
        {`많은 고객님들이 인증한 리얼한 네이버 리뷰 확인하기 >`}
      </CustomAtag>

      <SearchWrapper>
        <input
          type="text"
          placeholder="트레이너 이름 또는 지점명으로 검색"
          value={reviewSearchKeyWordState}
          onChange={e => setReviewSearchKeyWordState(e.target.value)}
        />

        <Image src={search} alt="search" />

        <Button
          color="yellow"
          onClick={() => {
            setTabState('전체');
            setReviewSearchKeyWordState('');
          }}
        >
          초기화
        </Button>
      </SearchWrapper>

      <ReviewTab tabState={tabState} setTabState={setTabState} />

      <FadeIn>
        {reviews?.length === 0 && <NoContent>검색결과가 없습니다.</NoContent>}

        <CardFrame>
          {reviews?.map(item => {
            return <ReviewCard key={item.id} data={item} />;
          })}
        </CardFrame>
      </FadeIn>
    </Frame>
  );
};

export default Review;

const Frame = styled.div``;

const CardFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  margin: 3rem 0;

  input {
    width: 20rem;
    padding: 0.5rem 0 0.5rem 3rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }

  img {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 3px;
    left: 4px;
  }
`;

const NoContent = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 25px;
  font-size: 1.6rem;
`;

const CustomAtag = styled.a`
  font-size: 1.6rem;
  margin-bottom: 4rem;
  padding: 1rem;
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
