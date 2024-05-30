import { useEffect, useState } from 'react';

type ScreenSize = 'mid' | 'full';
const screenSizeThreshold = 1400;

export function useHomePage() {
  const [screenSize, setScreenSize] = useState<ScreenSize>('full');
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width < screenSizeThreshold ? 'mid' : 'full');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return { screenSize, showLoading };
}
