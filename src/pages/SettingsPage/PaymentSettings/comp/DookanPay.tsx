import { useTranslation } from 'react-i18next';

import { BankBadge, TransactionsBadge } from './PaymentBadge';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import RenderItems from './RenderItems';

export default function DookanPay() {
	const { t } = useTranslation();
	const supportedBanks = ['Riyadh', 'Al Ahly', 'The Saudi Investment', 'Al-Rajhi'];
	const supportedMethods = [
		{
			method: 'apple',
			fee: {
				flatFee: '',
				percentageFee: '',
			},
		},
		{
			method: 'knet',
			fee: {
				flatFee: '',
				percentageFee: '1.7',
			},
		},
		{
			method: 'stcPay',
			fee: {
				flatFee: '',
				percentageFee: 1.7,
			},
		},
		{
			method: 'mada',
			fee: {
				flatFee: '',
				percentageFee: 1.75,
			},
		},
	];
	return (
		<div className='grid place-items-start h-full gap-4 p-5 cardDetails-sharedClass '>
			<img
				src={getImageUrl(`badges/dookan-pay.svg`)}
				alt='PaymentProvider'
				className='h-[2.6rem] w-[9.75rem]'
			/>
			<h2 className='title'>{t('Accept payments using our plugin')}</h2>
			<p className='paragraph'>
				{t('Accept payments on your store using the')} <strong>Dookan pay</strong>{' '}
				{t('plugin, it provide you with International and local payment methods')}
			</p>
			<section className='flex justify-between gap-7 w-full'>
				<RenderItems
					items={supportedMethods}
					RenderItem={TransactionsBadge}
					title='Supported methods with fees'
					limit={supportedMethods.length}
				/>
				<RenderItems
					items={supportedBanks}
					RenderItem={BankBadge}
					title='Supported banks'
					limit={supportedBanks.length}
				/>
			</section>
			<Button variant='primary' text={t('Setup Dookan pay')} />
		</div>
	);
}
