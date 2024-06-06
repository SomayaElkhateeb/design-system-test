import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { getImageUrl } from 'src/app/utils';
import { AnalyticsProduct } from '../AnalyticsProducts';

export default function ProductsTable({
	productsAnalytics,
	isLoading,
}: {
	productsAnalytics: AnalyticsProduct[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();

	const { t } = useTranslation();

	const productsTableHeaders = [
		{ title: t('product & category') },
		{ title: t('quantity') },
		{ title: t('Price') },
		{ title: t('searches') },
		{ title: t('views') },
		{ title: t('quantity sold') },
		{ title: t('returns') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				isLoading={isLoading}
				language={language}
				color='#55607A'
				headers={productsTableHeaders.map((h) => h)}
				rows={productsAnalytics?.map((e) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell
								sx={{
									fontSize: '13px',
									fontWeight: 400,
								}}
							>
								<div className='flex flex-1 gap-3'>
									<div className='overflow-hidden border rounded-lg size-10 border-light-2'>
										<img
											src={getImageUrl(e.imageUrl)}
											alt={e.product_name}
											className='object-cover size-full'
										/>
									</div>
									<div className='flex flex-col justify-around'>
										<h2 className='title'>{e.product_name}</h2>
										<p className='paragraph text-subtitle'>{e.category}</p>
									</div>
								</div>
							</GlobalTableCell>,

							<GlobalTableCell>{e.quantity}</GlobalTableCell>,
							<GlobalTableCell>{e.price}</GlobalTableCell>,
							<GlobalTableCell>{e.searches}</GlobalTableCell>,

							<GlobalTableCell>{e.views}</GlobalTableCell>,
							<GlobalTableCell>{e.quantity_sold}</GlobalTableCell>,
							<GlobalTableCell>{e.returns}</GlobalTableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
