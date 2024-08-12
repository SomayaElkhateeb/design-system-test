import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const ProductsLayout = () => {
	const tabs = [
		{
			name: 'All Products',
			path: 'AllProducts',
		},
		{
			name: 'Categories',
			path: 'categories',
		},
		{
			name: 'Brands',
			path: 'brands',
		},
		{
			name: 'Inventory',
			path: 'inventory',
		},
		{
			name: 'Attributes',
			path: 'attributes',
		},
	];
	return (
		<div className='flex-col-global'>
			<div className='Sticky_header'>
				<HorizontalTabsLink tabs={tabs} path='/products' />
			</div>
			<Outlet />
		</div>
	);
};

export default ProductsLayout;
