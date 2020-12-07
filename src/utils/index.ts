import { FC, useEffect } from 'react';
import { useFonts } from '@expo-google-fonts/roboto';

import { LoadFontProps } from '../interfaces';

export const LoadFont: FC<LoadFontProps> = ({
  fontsToLoad,
  setFontLoaded
}): null => {
  const [fontLoaded] = useFonts(fontsToLoad);

  useEffect(() => {
    setFontLoaded(fontLoaded);
  }, [fontLoaded, setFontLoaded]);

  return null;
};
