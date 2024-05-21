import { useTranslation } from 'react-i18next';
import Rates from 'src/app/components/page/SettingPage/Shipping/OpenSetup/Comp/Rates';

export default function TaxRates() {
	const { t } = useTranslation();

	return (
		// <div className='cardDetails-sharedClass p-5 flex-col-top-section-pages'>
			<>
				{/* <h2 className='title'>{t('Tax rates')}</h2> */}
				<Rates addStyle={true} />
			</>
		// </div>
	);
}
