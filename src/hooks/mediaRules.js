import { useMediaQuery } from 'react-responsive';

export const useMediaRules = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOnly = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) ',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return { isMobile, isTabletOnly, isTablet, isDesktop, isRetina };
};
