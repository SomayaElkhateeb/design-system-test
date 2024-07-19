import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { addStuffInterface } from './HookForAddStuff';
import CustomTableBodyCheckbox from 'src/app/components/optimized/UiKits/CustomTableBodyCheckbox';
import { getPermissions } from 'src/app/store/slices/settingsPage/roles/rolesAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect } from 'react';

export default function Permissions({ formStore }: { formStore: UseFormReturn<addStuffInterface> }) {
	//  hooks
	const { t } = useTranslation();

	// redux
	const dispatch = useAppDispatch();
	const { permissions, isLoading, error } = useAppSelector((state) => state.rolesSettings);

	console.log('permissions', permissions);

	useEffect(() => {
		dispatch(getPermissions());
	}, [dispatch]);

	const handleStorePermissions = (option: string[]) => {
		formStore.setValue('storePermissions', option);
	};

	const handleAllStorePermissions = () => {
		formStore.setValue(
			'storePermissions',
			Object.keys(permissions).map((key) => permissions[key].key),
		);
	};

	return (
		<div className='global-cards gap-[1.2rem]'>
			<div className='flex justify-between items-center'>
				<h3 className='title'>{t('Permissions')}</h3>
				<Button onClick={() => handleAllStorePermissions()} variant='secondary'>
					{t('select all')}
				</Button>
			</div>

			<div className='grid md:grid-cols-2 md:w-3/4 gap-5 '>
				{Object.keys(permissions).map((key) => {
					const item = permissions[key];
					return (
						<div className='flex-row-global' key={item.id}>
							<CustomTableBodyCheckbox
								formStore={formStore}
								array={formStore.watch('storePermissions')}
								setArray={handleStorePermissions}
								id={item.key}
							/>
							<p className='text-title text-[.88rem]'>{item.name}</p>
						</div>
					);
				})}
			</div>

			{formStore.watch('storePermissions').length === 0 && formStore.formState.isSubmitted && (
				<p className='global_error'>{t('choose permission required')}</p>
			)}
		</div>
	);
}
