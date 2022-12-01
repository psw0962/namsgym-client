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
          active={tabState === '지점안내'}
          themeState={themeState}
          fontSize="1.6rem"
          pointer={true}
          onClick={e => setTabState(e.target.textContent)}
        >
          지점안내
        </CustomFont>

        <CustomFont
          active={tabState === '트레이너'}
          themeState={themeState}
          fontSize="1.6rem"
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
