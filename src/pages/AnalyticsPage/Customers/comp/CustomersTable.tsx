import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable, {
	GlobalTableCell,
} from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { AnalyticsCustomer } from '../AnalyticsCustomers';

export default function CustomersTable({
	customersAnalytics,
	isLoading,
}: {
	customersAnalytics: AnalyticsCustomer[];
	isLoading: boolean;
}) {
	const language = UseLanguage();

	const { t } = useTranslation();

	const customersTableHeaders = [
		{ title: t('day') },
		{ title: t('new customers') },
		{ title: t('purchasing customers') },
		{ title: t('customer groups') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				// isLoading={isLoading}
				language={language}
				color='#55607A'
				headers={customersTableHeaders.map((h) => h)}
				rows={tableData?.map((e) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell>{e.day}</GlobalTableCell>,
							<GlobalTableCell>{e.new_customers}</GlobalTableCell>,
							<GlobalTableCell>{e.purchasing_customers}</GlobalTableCell>,
							<GlobalTableCell>{e.customer_groups}</GlobalTableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
