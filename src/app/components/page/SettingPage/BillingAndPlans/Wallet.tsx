import { useTranslation } from 'react-i18next';
import { ClockIcon } from 'src/app/utils/icons';
export default function Wallet() {
	const { t } = useTranslation();
	return (
		<div className='cardDetails-sharedClass p-5 flex flex-col gap-3'>
			<h3 className='text-title font-semibold text-lg'>{t('Wallet')}</h3>
			<h2 className='text-title text-4xl'>{t('SAR')} 200</h2>
			<div className='flex items-center gap-2'>
				<ClockIcon />
				<p className='text-sm'>{t('Deposited in')}: 5 Oct 2022</p>
			</div>
		</div>
	);
}
