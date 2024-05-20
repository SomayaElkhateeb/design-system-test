import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import SetupInfo from '../SetupInfo';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';

export default function DeliverYourself() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const data = [{ id: 1, title: t('Enabled') }];

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				title={t('deliver yourself')}
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
