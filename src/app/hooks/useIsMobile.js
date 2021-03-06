import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 1024;

export function useIsMobile() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  return width < DESKTOP_BREAKPOINT;
}
