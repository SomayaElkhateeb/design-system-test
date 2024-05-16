import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

export default function ManualPayment() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<div className='grid p-5 cardDetails-sharedClass h-full divide-y'>
			<div className='pb-4 max-w-[34rem]'>
				<h2 className='title mb-2'>{t('Other methods')}</h2>
				<p className='paragraph'>
					{t(
						'Payments that are processed outside your online store. When a customer makes a manual payment, you need to approve their order before fulfilling.',
					)}
				</p>
			</div>
			<div className='flex justify-between items-center py-4'>
				<h3 className='paragraph font-semibold'>{t('Cash on delivery')} (COD)</h3>
				<Button variant='secondary' text={t('Activate')} />
			</div>
			<div className='flex justify-between items-center py-4'>
				<h3 className='paragraph font-semibold'>{t('Bank Transfer')}</h3>
				<Button
					variant='secondary'
					text={t('Activate')}
					onClick={() => navigate('activate-bank-transfer')}
				/>
			</div>
			<div className='flex justify-between items-center pt-4'>
				<h3 className='paragraph font-semibold'>{t('Cash on pickup')}</h3>
				<Button variant='secondary' text={t('Activate')} />
			</div>
		</div>
	);
}
