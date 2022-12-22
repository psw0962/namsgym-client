import React, { useRef } from 'react';
import styled from 'styled-components';
import Font from '@/component/common/font';
import useThemeState from '@/hooks/useThemeState';
import Line from '@/component/common/line';
import { useDraggable } from 'react-use-draggable-scroll';

const reviewTabs = [
  { id: 1, tabName: '전체' },
  { id: 2, tabName: '바디프로필' },
  { id: 3, tabName: '바디챌린지' },
  { id: 4, tabName: '환급 이벤트' },
  { id: 5, tabName: 'Before&After' },
  { id: 6, tabName: 'PT리뷰' },
];

const ReviewTab = ({ tabState, setTabState }) => {
  const { themeState } = useThemeState();
  const scrollRef = useRef();
  const { events: scrollWrapperEvents } = useDraggable(scrollRef, {
    isMounted: true,
    safeDisplacement: 11,
  });

  return (
    <Frame>
      <div className="menu-wrapper" ref={scrollRef} {...scrollWrapperEvents}>
        {reviewTabs.map(tab => {
          return (
            <CustomFont
              key={tab.id}
              active={tabState === `${tab.tabName}`}
              themeState={themeState}
              fontSize="1.6rem"
              pointer={true}
              onClick={e => {
                setTabState(prev => {
                  return {
                    ...prev,
                    tabState: e.target.textContent,
                  };
                });
              }}
            >
              {tab.tabName}
            </CustomFont>
          );
        })}
      </div>

      <CustomLine themeState={themeState} />
    </Frame>
  );
};

export default ReviewTab;

const Frame = styled.div`
  display: flex;
  flex-direction: column;

  .menu-wrapper {
    display: flex;
    gap: 1.5rem;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CustomFont = styled(Font)`
  color: ${props =>
    props.active && props.themeState === 'dark'
      ? '#fff'
      : props.active && props.themeState === 'light'
      ? '#000'
      : '#acacac'};
`;

const CustomLine = styled(Line)`
  border: ${props =>
    props.themeState === 'dark' ? '1px solid #fff' : '1px solid #000'};
`;
