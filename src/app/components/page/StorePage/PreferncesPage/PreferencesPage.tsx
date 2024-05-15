import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';

export default function PreferencesPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex-col-top-section-pages gap-[2rem]'>
			<HeaderSettings
				submit
				variant='settingTwoBtns'
				title={t('Store preferences')}
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
		</div>
	);
}
