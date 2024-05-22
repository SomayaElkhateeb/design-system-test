import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { EditIcon } from 'src/app/utils/icons';
import { OrderItemForm, RowOrderItems } from '../..';

export default function OrderItems() {
	const { t } = useTranslation();
	const [edit, setEdit] = useState(false);
	return (
		<div className='cardDetails-sharedClass'>
			<div className={`flex items-center justify-between p-3 ${edit && 'pb-0'}`}>
				<h2 className='title capitalize'>{t('Order items')} (1)</h2>

				{edit ? (
					''
				) : (
					<Button LeftIcon={EditIcon} variant='tertiary' onClick={() => setEdit(true)}>
						{t('edit')}
					</Button>
				)}
			</div>

			{edit ? <OrderItemForm onClose={() => setEdit(false)} /> : <OrderItemContain />}
		</div>
	);
}

function OrderItemContain() {
	return (
		<div>
			<RowOrderItems />
			<div className='p-3'>
				<hr />
				<div className='flex justify-between items-center pt-3'>
					<div className='text-subtitle text-sm flex flex-col gap-1'>
						<p>Sub Total</p>
						<Button variant='link'>+ Add Discount</Button>
						<Button variant='link'>Edit Shipping</Button>
						<p>Tax</p>
					</div>
					<div className='text-title text-sm flex flex-col gap-1'>
						<p>SAR 450.00</p>
						<p>% ------</p>
						<p>SAR 450.00</p>
						<p>SAR 450.00</p>
					</div>
				</div>
			</div>

			<div className='p-3 pt-0'>
				<hr />
				<div className='flex items-center justify-between pt-3'>
					<p className='text-subtitle text-sm uppercase'>total</p>
					<p className='text-title text-sm'>SAR 450.00</p>
				</div>
			</div>
		</div>
	);
}
