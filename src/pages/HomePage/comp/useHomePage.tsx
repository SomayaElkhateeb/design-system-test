import { useEffect, useState } from 'react';

type ScreenSize = 'mini' | 'mid' | 'full';
const screenSizeThreshold = 1400;
const smScreenSizeThreshold = 750;

export function useHomePage() {
	const [screenSize, setScreenSize] = useState<ScreenSize>('full');
	const [showLoading, setShowLoading] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < smScreenSizeThreshold) {
				setScreenSize('mini');
			} else if (width < screenSizeThreshold) {
				setScreenSize('mid');
			} else {
				setScreenSize('full');
			}
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
