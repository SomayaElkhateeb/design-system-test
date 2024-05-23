import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DownIcon } from 'src/app/utils/icons';
import { OrderStatus } from '../..';

export default function OrderNo() {
	const [showOrderStatus, setShowOrderStatus] = useState(false);
	const { t } = useTranslation();
	return (
		<div className='capitalize cardDetails-sharedClass p-5 grid grid-cols-6'>
			<div className='col-span-1 flex flex-col gap-2 relative after:absolute after:h-[100%] after:w-[1px] after:bg-constrained after:right-[1.2rem] after:top-0'>
				<p className='text-subtitle text-sm'>{t('order No')}.</p>
				<p className='title text-lg '>#8965742</p>
			</div>

			<div className='col-span-3 flex flex-col gap-2 text-subtitle text-sm'>
				<div className='flex gap-1.5'>
					<p>{t('payment status')}:</p>
					<button onClick={() => setShowOrderStatus(true)} className='flex text-warning capitalize'>
						{t('awaiting payment')} <DownIcon className='fill-warning' />
					</button>
				</div>

				<div className='flex gap-1.5'>
					<p>{t('order status')}:</p>
					<button onClick={() => setShowOrderStatus(true)} className='flex capitalize text-title'>
						{t('processing')} <DownIcon className='fill-hint' />
					</button>
				</div>
			</div>
			<div className='col-span-2 flex flex-col items-end justify-between gap-2'>
				<h2 className='title text-lg '>SAR 1000.00</h2>
				<p className='text-subtitle text-sm'>
					<span>15/10/2020</span> {t('at')} <span>12:05</span> AM
				</p>
			</div>

			{showOrderStatus && <OrderStatus onClose={() => setShowOrderStatus(false)} />}
		</div>
	);
}
