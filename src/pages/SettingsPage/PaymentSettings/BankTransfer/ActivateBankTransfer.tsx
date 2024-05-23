import { useNavigate } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { HeaderSettings } from 'src/app/components/optimized';
import AccountDetailsForm from './AccountDetailsForm';
import ActivateConditions from './ActivateConditions';
import { Form } from 'src/app/components/ui/form';
import useBankTransfer from './useBankTransfer';
export default function ActivateBankTransfer() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { formStore, onSubmit } = useBankTransfer();
	const data = [
		{
			id: 1,
			title: t('Assign as main location'),
		},
		{
			id: 2,
			title: t('Show on footer'),
		},
		{
			id: 3,
			title: t('Available for pickup'),
		},
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Activate bank transfer')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='grid gap-5 custom_container grid-cols-3'>
					<div className='grid gap-5 col-span-2 lg:col-span-2'>
						<AccountDetailsForm formStore={formStore} />
						<ActivateConditions formStore={formStore} />
					</div>
					<div className='col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
