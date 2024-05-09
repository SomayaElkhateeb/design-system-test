import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { Button, CheckBox } from 'src/app/components/optimized';

export default function Permissions() {
	const { t } = useTranslation();
	const permissionsData = [
		{ id: nanoid(), label: t('Home') },
		{ id: nanoid(), label: t('Orders') },
		{ id: nanoid(), label: t('Products') },
		{ id: nanoid(), label: t('Customers') },
		{ id: nanoid(), label: t('Marketing') },
		{ id: nanoid(), label: t('Apps and channels') },
		{ id: nanoid(), label: t('Orders') },
		{ id: nanoid(), label: t('Products') },
		{ id: nanoid(), label: t('Customers') },
		{ id: nanoid(), label: t('Marketing') },
	];

	return (
		<div className='serviceDetails-sharedClass p-5 '>
			<label>
				<div className='flex justify-between items-center'>
					<h3 className='text-title font-semibold'>{t('Permissions')}</h3>
					<Button variant='secondary'>{t('select all')}</Button>
				</div>

				<div className='grid grid-cols-2 w-3/4 gap-5 pt-3'>
					{permissionsData.map((item) => {
						return (
							<label key={item.id}>
								<CheckBox label={item.label} /> {/* ?? */}
							</label>
						);
					})}
				</div>
			</label>
		</div>
	);
}
