import { UnSeeIcon, ViewIcon } from "src/app/utils/icons";

import useLanguageDirection from "src/app/utils/hooks/useLangDirection";

export default function PasswordToggleIcon({
	toggle,
	isVisible,
}: {
	toggle: () => void;
	isVisible: boolean;
}) {
	const { currentLanguage } = useLanguageDirection();

	return (
		<button
			type='button'
			className={`absolute top-1/2 -translate-y-1/2 ${
				currentLanguage === 'ar' ? 'left-3' : 'right-3'
			}`}
			onClick={toggle}
		>
			{isVisible ? <ViewIcon className='fill-pri-dark' /> : <UnSeeIcon className='fill-pri-dark' />}
		</button>
	);
}