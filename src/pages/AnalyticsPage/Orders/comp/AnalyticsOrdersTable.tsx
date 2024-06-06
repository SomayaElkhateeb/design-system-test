import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { AnalyticsOrder } from '../AnalyticsOrders';

export default function AnalyticsOrdersTable({ tableData }: { tableData: AnalyticsOrder[] }) {
	const language = UseLanguage();

	const { t } = useTranslation();

	const ordersTableHeaders = [
		{ title: t('day') },
		{ title: t('orders') },
		{ title: t('average units ordered') },
		{ title: t('average order value') },
		{ title: t('delivered') },
		{ title: t('returned quantity') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={ordersTableHeaders.map((h) => h)}
				rows={tableData?.map((e) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell>{e.day}</GlobalTableCell>,
							<GlobalTableCell>{e.orders}</GlobalTableCell>,
							<GlobalTableCell>{e.average_units_ordered}</GlobalTableCell>,
							<GlobalTableCell>{e.average_order_value}</GlobalTableCell>,
							<GlobalTableCell>{e.delivered}</GlobalTableCell>,
							<GlobalTableCell>{e.returned_quantity}</GlobalTableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
