import { useTranslation } from 'react-i18next';

export default function TaxRates() {
  const { t } = useTranslation();

	return (
		<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages'>
			<h2 className='title'>{t('Tax rates')}</h2>
		</div>
	);
}
