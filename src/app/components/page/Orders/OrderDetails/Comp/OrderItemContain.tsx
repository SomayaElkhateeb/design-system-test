import { Button } from 'src/app/components/optimized';
import RowOrderItems from './RowOrderItems';
import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';

export default function OrderItemContain() {
	//  hooks
	const { t } = useTranslation();
	const { language } = useLanguage();
	return (
		<div className='flex-col-global gap-2.5'>
			<RowOrderItems />
			<div className='px-3 flex-col-global gap-2.5'>
				<hr />
				<div className='flex-row-global justify-between '>
					<div className='subtitle flex-col-global gap-1'>
						<p>{t('Sub Total')}</p>
						<Button variant='link'>+ {t('Add Discount')}</Button>
						<Button variant='link'>{t('Edit Shipping')}</Button>
						<p>{t('Tax')}</p>
					</div>
					<div className='text-title text-sm flex-col-global gap-1'>
						<p>{language === 'ar' ? `450.00 ${t('SAR')}` : `${t('SAR')} 450.00`}</p>
						<p>% ------</p>
						<p>{language === 'ar' ? `450.00 ${t('SAR')}` : `${t('SAR')} 450.00`}</p>
						<p>{language === 'ar' ? `450.00 ${t('SAR')}` : `${t('SAR')} 450.00`}</p>
					</div>
				</div>
			</div>

			<div className='px-3 flex-col-global gap-2.5 pb-3'>
				<hr />
				<div className='flex-row-global justify-between '>
					<p className='subtitle uppercase'>{t('total')}</p>
					<p className='text-title text-sm'>
						{language === 'ar' ? `450.00 ${t('SAR')}` : `${t('SAR')} 450.00`}
					</p>
				</div>
			</div>
		</div>
	);
}
