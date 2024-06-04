import { useMediaQuery } from 'react-responsive';

type Breakpoints = {
  isSmall: boolean;
	isLarge: boolean;
	isMedium: boolean;
	isExtraSmall: boolean;
	isExtraLarge: boolean;
};

const useResponsive = (): Breakpoints => {
	const isExtraSmall = useMediaQuery({ query: '(max-width: 576px)' });
	const isSmall = useMediaQuery({ query: '(min-width: 577px) and (max-width: 768px)' });
	const isMedium = useMediaQuery({ query: '(min-width: 769px) and (max-width: 992px)' });
	const isLarge = useMediaQuery({ query: '(min-width: 993px) and (max-width: 1200px)' });
	const isExtraLarge = useMediaQuery({ query: '(min-width: 1201px)' });

	return { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge };
};

export default useResponsive;
