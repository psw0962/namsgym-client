import { useState } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';
import ReviewTab from '@/component/review/review-tab';
import FadeIn from 'react-fade-in';

const Review = () => {
  const [tabState, setTabState] = useState('PT리뷰');

  return (
    <Frame>
      <Font fontSize="2rem" margin="0 0 6rem 0">
        리뷰
      </Font>

      <ReviewTab tabState={tabState} setTabState={setTabState} />

      <FadeIn></FadeIn>
    </Frame>
  );
};

export default Review;

const Frame = styled.div`
  /* display: flex; */
`;
