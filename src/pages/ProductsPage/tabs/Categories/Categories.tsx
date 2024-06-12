import { nanoid } from 'nanoid';
import { AnalyticsIcon, CopyIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { brands } from 'src/pages/ProductsPage/tabs/Barnds/_comp/BrandsTable';
import TopSectionCategoriesTable from './_comp/TopSectionCategoriesTable';
import { CategoryTable } from '../../addNewProduct/_comp/CategoryTable';
// export default function Categories() {
// 	const settingMenus = [
// 		{ id: nanoid(), text: 'Copy brand link', icon: <CopyIcon className='fill-subtitle' /> },
// 		{ id: nanoid(), text: 'brand report', icon: <AnalyticsIcon className='fill-subtitle' /> },
// 		{ id: nanoid(), text: 'brand products', icon: <OrdersIcon className='fill-subtitle' /> },
// 	]
export default function Categories() {
	return (
		<div className='custom_container'>
			<div className='flex-col-top-section-pages'>
				{/*  top section */}
				<TopSectionCategoriesTable />

				{/* table */}
				<CategoryTable />
			</div>
		</div>
	);
}
