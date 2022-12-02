import { useState, useRef } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ReviewTab from '@/component/review/review-tab';
import FadeIn from 'react-fade-in';
import ReviewCard from '@/component/review/review-card';
import Button from '@/component/common/button';

const Review = () => {
  const [tabState, setTabState] = useState('전체');
  const inputRef = useRef('');

  return (
    <Frame>
      <Font fontSize="2rem" margin="0 0 6rem 0">
        리뷰
      </Font>

      <SearchWrapper>
        <input
          type="text"
          ref={inputRef}
          placeholder="트레이너 또는 지점을 입력해주세요."
          onKeyUp={e => {
            if (e.key === 'Enter') {
              return;
            }
          }}
        />

        <Button color="yellow">검색</Button>
      </SearchWrapper>

      <ReviewTab tabState={tabState} setTabState={setTabState} />

      <FadeIn>
        <CardFrame>
          <ReviewCard></ReviewCard>
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
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

  input {
    width: 20rem;
    ::placeholder {
      font-size: 1.3rem;
    }
  }
`;
