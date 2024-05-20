import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import CustomerOrderNotifcation from 'src/app/components/page/SettingPage/E-mailNotification/CustomOrderNotification';

export default function EmailNotification() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages '>
			<HeaderSettings title={t('Notifications')} />
            <div className="grid gap-5 lg:grid-cols-3 custom_container">
            <CustomerOrderNotifcation/>
            
            </div>
            
		</div>
	);
}
