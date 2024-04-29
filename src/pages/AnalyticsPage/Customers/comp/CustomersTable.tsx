import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { AnaylticesCustomer } from '../Customers';

export default function CustomersTable({ tableData }: { tableData: AnaylticesCustomer[] }) {
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