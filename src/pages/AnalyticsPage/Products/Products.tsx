

import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';
import AnalyticsTableActions from '../comp/AnalyticsTableActions';
import { ColumnChart } from 'src/app/components/optimized';
import useAnalyticsData from '../comp/useAnalyticsData';
// import ProductTable from './comp/ProductTable';
import data from '../comp/data.json';
import ProductsTable from './comp/ProductsTable';
import { useTranslation } from 'react-i18next';

const Products = () => {
	const { t } = useTranslation();

	const productsSortMenus = [
		{ text: t('Quantity Descending') },
		{ text: t('Quantity Ascending') },
		{ text: t('Price Low in first') },
		{ text: t('Price High in first') },
		{ text: t('Searches Descending') },
		{ text: t('Searches Ascending') },
		{ text: t('Views Descending') },
		{ text: t('Views Ascending') },
		{ text: t('Quantity sold Descending') },
		{ text: t('Quantity sold Ascending') },
		{ text: t('Returns Descending') },
		{ text: t('Returns Ascending') },
	];
	const productsSortFunctions: Record<string, (a: any, b: any) => number> = {
		[t('Quantity Descending')]: (a, b) => b.quantity - a.quantity,
		[t('Quantity Ascending')]: (a, b) => a.quantity - b.quantity,
		[t('Price Low in first')]: (a, b) => parseFloat(a.price) - parseFloat(b.price),
		[t('Price High in first')]: (a, b) => parseFloat(b.price) - parseFloat(a.price),
		[t('Searches Descending')]: (a, b) => b.searches - a.searches,
		[t('Searches Ascending')]: (a, b) => a.searches - b.searches,
		[t('Views Descending')]: (a, b) => b.views - a.views,
		[t('Views Ascending')]: (a, b) => a.views - b.views,
		[t('Quantity sold Descending')]: (a, b) => b.quantity_sold - a.quantity_sold,
		[t('Quantity sold Ascending')]: (a, b) => a.quantity_sold - b.quantity_sold,
		[t('Returns Descending')]: (a, b) => b.returns - a.returns,
		[t('Returns Ascending')]: (a, b) => a.returns - b.returns,
	};
	const {
		arrange,
		tableData,
		handleArrangeChange,
		handleComparisonChange,
		selectedComparisonOption,
	} = useAnalyticsData(data.productsAnalyticsTable, productsSortFunctions);
	return (
		<div className='p-5 grid gap-5'>
			<CompareBar
				selectedComparisonOption={selectedComparisonOption}
				handleComparisonChange={handleComparisonChange}
			/>
			<ColumnChart />
			<AnalyticsTableActions
				data={tableData}
				sortMenus={productsSortMenus}
				selectedOption={arrange}
				onSelectOption={handleArrangeChange}
				documentTitle='Products Table Data'
			/>
			<ProductsTable tableData={tableData} />
			{/* <ProductTable data={tableData} headers={productsTableHeaders} /> */}
		</div>
	);
};

export default Products;
