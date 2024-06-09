import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { Form } from 'src/app/components/ui/form';
import AccountDetailsForm from './AccountDetailsForm';
import ActivateConditions from './ActivateConditions';
import useBankTransfer from './useBankTransfer';
export default function ActivateBankTransfer() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [applyWith, setApplyWith] = useState('All');
	const { formStore, onSubmit } = useBankTransfer(applyWith);
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

	useEffect(() => {
		setApplyWith(formStore.watch('applyWith'));
	}, []);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<SubHeader title={t('Activate bank transfer')}>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						{t('Discard')}
					</Button>
					<Button variant='primary' onClick={onSubmit}>
						{t('Save Changes')}
					</Button>
				</SubHeader>
				<div className='grid gap-5 custom_container lg:grid-cols-3'>
					<div className='grid gap-5 lg:col-span-2 '>
						<AccountDetailsForm formStore={formStore} />
						<ActivateConditions formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
