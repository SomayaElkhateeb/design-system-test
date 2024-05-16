import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { addStuffInterface } from './AddStuff';
import { useEffect, useState } from 'react';
import CustomTableBodyCheckbox from '../../../Customers/CustomTableBodyChckbox';

export default function Permissions({
	formStore,
}: {
	formStore: UseFormReturn<addStuffInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	const permissionsData = [
		{ id: '1', label: t('Home') },
		{ id: '2', label: t('Orders') },
		{ id: '3', label: t('Products') },
		{ id: '4', label: t('Customers') },
		{ id: '5', label: t('Marketing') },
		{ id: '6', label: t('Apps and channels') },
		{ id: '7', label: t('Orders') },
		{ id: '8', label: t('Products') },
		{ id: '9', label: t('Customers') },
		{ id: '10', label: t('Marketing') },
	];
	// //////////////////////////////////////////
	const handleStorePermissions = (option: string[]) => {
		formStore.setValue('storePermissions', option);
	};
	// ///////////////////////////////////////////
	const handleAllStorePermissions = () => {
		formStore.setValue(
			'storePermissions',
			permissionsData?.map((e) => e.id),
		);
	};

	return (
		<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages'>
			<div className='flex justify-between items-center'>
				<h3 className='title'>{t('Permissions')}</h3>
				<Button onClick={() => handleAllStorePermissions()} variant='secondary'>
					{t('select all')}
				</Button>
			</div>

			<div className='grid md:grid-cols-2 md:w-3/4 gap-5 '>
				{permissionsData.map((item) => {
					return (
						<div className='flex-row-global' key={item.id}>
							<CustomTableBodyCheckbox
								formStore={formStore}
								array={formStore.watch('storePermissions')}
								setArray={handleStorePermissions}
								id={item.id}
							/>
							<p className='text-title text-[.88rem]'>{item.label}</p>
						</div>
					);
				})}
			</div>

			{formStore.watch('storePermissions').length === 0 && formStore.formState.isSubmitted && (
				<p className='global_error'>{'choose permission required'}</p>
			)}
		</div>
	);
}
