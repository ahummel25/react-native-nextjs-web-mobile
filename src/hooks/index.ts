import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export const useWindowDimensions = (): {
  width: number;
  height: number;
} => {
  const getWindowDimensions = (): { width: number; height: number } => {
    let width = 0;
    let height = 0;
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      width = innerWidth;
      height = innerHeight;
    }

    return {
      width,
      height
    };
  };
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  useEffect((): (() => void) | undefined => {
    if (Platform.OS !== 'web') {
      return;
    }
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};
