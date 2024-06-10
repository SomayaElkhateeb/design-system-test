import { EditIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';

interface Props {
	onClick: () => void;
}
export default function EditButtonMobile({ onClick }: Props) {
	const { t } = useTranslation();
	const handleClick = () => {
		onClick();
	};
	return (
		<button onClick={handleClick} className='flex justify-center items-center gap-2 w-24 h-12 bg-white rounded border border-light-2 bottom-4 right-2/4 absolute translate-x-1/2 shadow'>
			<EditIcon className='fill-pri-dark' />
			<p className='title'>{t('Edit')}</p>
		</button>
	);
}
// Usage Example
// const { xs } = useResponsive();
// {xs && <EditButtonMobile onClick={} />}
// or
// {xs && <EditButtonMobile path='' />}