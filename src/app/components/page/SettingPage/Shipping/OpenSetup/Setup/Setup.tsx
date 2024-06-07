import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import SetupInfo from '../SetupInfo';

export default function Setup() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const data = [{ id: 1, title: t('Enabled') }];

	return (
		<div>
			<SubHeader title={t('SMSA')}>
				<Button variant='secondary' onClick={() => navigate(-1)}>
					{t('Discard')}
				</Button>
				<Button variant='primary' onClick={() => {}}>
					{t('Save Changes')}
				</Button>
			</SubHeader>
			<div className='grid gap-5 lg:grid-cols-3 custom_container py-5'>
				<div className='flex-col-top-section-pages lg:col-span-2'>
					<SetupInfo gap={true} rates={true} />
				</div>
				<div className='col-span-1'>
					<QuickActions data={data} />
				</div>
			</div>
		</div>
	);
}
