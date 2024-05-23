import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { EditIcon } from 'src/app/utils/icons';
import { OrderItemContain, OrderItemForm } from '../..';

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
