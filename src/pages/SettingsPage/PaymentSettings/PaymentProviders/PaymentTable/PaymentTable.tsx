import { useTranslation } from 'react-i18next';
import PaymentTableRows from './PaymentTableRows';
import { paymentProvidersData } from '../../../data';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

export default function PaymentTable() {
	const language = UseLanguage();
	const { t } = useTranslation();

	const paymentTableHeaders = [
		{ title: t('Provider') },
		{ title: t('Monthly fees') },
		{ title: t('Setup fees') },
		{ title: t('Credit transactions') },
		{ title: t('Methods transactions') },
		{ title: t('Banks') },
	];
	const rows = PaymentTableRows({ data: paymentProvidersData });
	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={paymentTableHeaders.map((h) => h)}
				rows={rows}
			/>
		</div>
	);
}
