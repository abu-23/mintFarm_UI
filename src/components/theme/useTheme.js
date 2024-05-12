import { useEffect, useState } from 'react';
import * as themes from './schema.json';

// eslint-disable-next-line import/prefer-default-export
export const useTheme = () => {
  const themesData = themes;
  const [theme, setTheme] = useState(themesData?.data?.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setTheme(mode);
  };
  useEffect(() => {
    try {
      setThemeLoaded(true);
    } catch (error) {
      setThemeLoaded(false);
    }
  }, []);
  return { theme, themeLoaded, setMode };
};
