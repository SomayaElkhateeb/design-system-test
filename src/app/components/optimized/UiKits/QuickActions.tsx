import { Switch } from '../../ui/switch';
import { useTranslation } from 'react-i18next';

export default function QuickActions() {
	const { t } = useTranslation();
	return (
		<div className='serviceDetails-sharedClass p-5 flex-col-top-section-pages'>
			<h3 className='title'>{t('Quick actions')}</h3>

			<div className='flex items-center gap-3'>
				<Switch />
				<p>{t('Activated')}</p>
			</div>
		</div>
	);
}
