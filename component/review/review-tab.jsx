import styled from 'styled-components';
import Font from '@/component/common/font';
import useThemeState from '@/hooks/useThemeState';
import Line from '@/component/common/line';

const ReviewTab = ({ tabState, setTabState }) => {
  const { themeState } = useThemeState();

  return (
    <Frame>
      <div className="menu-wrapper">
        <CustomFont
          active={tabState === '전체'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          전체
        </CustomFont>

        <CustomFont
          active={tabState === 'PT리뷰'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          PT리뷰
        </CustomFont>

        <CustomFont
          active={tabState === 'Before&After'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          Before&After
        </CustomFont>

        <CustomFont
          active={tabState === '바디프로필'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          바디프로필
        </CustomFont>

        <CustomFont
          active={tabState === '바디챌린지'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          바디챌린지
        </CustomFont>
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
    gap: 2rem;
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
