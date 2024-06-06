import { getImageUrl } from "src/app/utils";
import { useTranslation } from 'react-i18next';

const AuthHeader = () => {
	const { t } = useTranslation();

	return (
		<div className='flex justify-between items-center w-4/5'>
			<img src={getImageUrl('brand/en-light.svg')} alt='Brand' />
			<button className='text-xl font-semibold'>{t('العربية')}</button>
		</div>
	);
};

export default AuthHeader;
