import { useTranslation } from 'react-i18next';
import { HeaderSettings, VerticalTabs } from 'src/app/components/optimized';
import SmsaAccount from '../Smsa/SmsaAccount';
import SetupInfo from '../SetupInfo';

export default function OpenSetup() {
	const { t } = useTranslation();
	const tabs = [
		{
			title: t('Basic setup'),
			content: <SmsaAccount />,
		},
		{
			title: t('Services setup'),
			content: <SetupInfo gap={false} rates={true} />,
		},
	];

	return (
		<div>
			<HeaderSettings title={t('Install SMSA')} />
			<div className='custom_container'>
				<VerticalTabs tabs={tabs} />
			</div>
		</div>
	);
}
