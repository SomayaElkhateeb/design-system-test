import { useTranslation } from "react-i18next";
import { Button } from "src/app/components/optimized";
import { getImageUrl } from "src/app/utils";


export default function DookanPay() {
	const { t } = useTranslation();
	const supportedBanks = ['Riyadh', 'Al Ahly', 'The Saudi Investment', 'Al-Rajhi'];
	const supportedMethods = [
		{ fees: 'Free', badge: 'apple' },
		{ fees: '2.35%', badge: 'knet' },
		{ fees: '1.70%', badge: 'stcPay' },
		{ fees: '1.75%', badge: 'mada' },
	];
	return (
		<div className='grid place-items-start gap-4 p-5 cardDetails-sharedClass h-full'>
			<img
				src={getImageUrl(`badges/dookan-pay.svg`)}
				alt='PaymentProvider'
				className='h-[2.6rem] w-[9.75rem]'
			/>
			<h2 className='title'>{t('Accept payments using our plugin')}</h2>
			<p className='paragraph max-w-[34rem]'>
				{t('Accept payments on your store using the')} <strong>Dookan pay</strong> {t('plugin, it provide you with International and local payment methods')}
			</p>

			<section className='flex justify-between gap-7'>
				<div className='grid gap-2'>
					<h3 className='subtitle'>{t('Supported methods with fees')}</h3>
					<div className='flex flex-wrap gap-2'>
						{supportedMethods.map((item, index) => (
							<span key={index} className='flex items-center rounded bg-constrained w-fit'>
								<img src={getImageUrl(`companies/${item.badge}.svg`)} alt='PaymentProvider' />
								<span className='paragraph px-2'>{item.fees}</span>
							</span>
						))}
					</div>
				</div>
				<div className='grid gap-2'>
					<h3 className='subtitle'>{t('Supported banks')}</h3>
					<div className='flex flex-wrap gap-2'>
						{supportedBanks.map((item, index) => (
							<span key={index} className='rounded bg-constrained w-fit paragraph py-1 px-2'>
								{item}
							</span>
						))}
					</div>
				</div>
			</section>

			<Button variant='primary' text={t('Setup Dookan pay')} />
		</div>
	);
}
