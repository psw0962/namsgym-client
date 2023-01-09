import styled from 'styled-components';
import Font from '@/component/common/font';
import useThemeState from '@/hooks/useThemeState';
import Line from '@/component/common/line';

const CenterTab = ({ tabState, setTabState }) => {
  const { themeState } = useThemeState();

  return (
    <Frame>
      <div className="menu-wrapper">
        <CustomFont
          active={tabState === '지점 안내'}
          themeState={themeState}
          fontSize="2rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          지점 안내
        </CustomFont>

        <CustomFont
          active={tabState === '트레이너'}
          themeState={themeState}
          fontSize="2rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          트레이너
        </CustomFont>
      </div>

      <CustomLine themeState={themeState} />
    </Frame>
  );
};

export default CenterTab;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  .menu-wrapper {
    display: flex;
  }
`;

const CustomFont = styled(Font)`
  border-radius: 5px;
  padding: 1rem;

  border: ${props =>
    props.active && props.themeState === 'dark'
      ? '1px solid #fff'
      : props.active && props.themeState === 'light'
      ? '1px solid #000'
      : 'none'};

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
