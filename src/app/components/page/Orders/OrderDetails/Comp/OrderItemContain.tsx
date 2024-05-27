import { Button } from 'src/app/components/optimized';
import RowOrderItems from './RowOrderItems';
import { useTranslation } from 'react-i18next';

export default function OrderItemContain() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages gap-2.5'>
			<RowOrderItems />
			<div className='px-3 flex-col-top-section-pages gap-2.5'>
				<hr />
				<div className='flex-row-global justify-between '>
					<div className='subtitle flex-col-top-section-pages gap-1'>
						<p>{t('Sub Total')}</p>
						<Button variant='link'>+ {t('Add Discount')}</Button>
						<Button variant='link'>{t('Edit Shipping')}</Button>
						<p>{t('Tax')}</p>
					</div>
					<div className='text-title text-sm flex-col-top-section-pages gap-1'>
						<p>SAR 450.00</p>
						<p>% ------</p>
						<p>SAR 450.00</p>
						<p>SAR 450.00</p>
					</div>
				</div>
			</div>

			<div className='px-3 flex-col-top-section-pages gap-2.5 pb-3'>
				<hr />
				<div className='flex-row-global justify-between '>
					<p className='subtitle uppercase'>{t('total')}</p>
					<p className='text-title text-sm'>SAR 450.00</p>
				</div>
			</div>
		</div>
	);
}
