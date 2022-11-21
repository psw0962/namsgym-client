import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeStateAtom } from 'atoms';

const useThemeState = () => {
  const [themeState, setThemeState] = useRecoilState(themeStateAtom);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');

    if(theme) setThemeState(theme);
    if(!theme) setThemeState('light');
  }, [themeState])

  return { themeState };
}

export default useThemeState;