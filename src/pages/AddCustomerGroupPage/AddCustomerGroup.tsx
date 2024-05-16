import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';

export default function AddCustomerGroup() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings
				submit
				variant='settingTwoBtns'
				title={t('Add New Group')}
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
			<div className='grid gap-5 lg:grid-cols-3 container mx-auto'>
				<div className='flex-col-top-section-pages lg:col-span-2'></div>
			</div>
		</div>
	);
}
