import { Outlet } from 'react-router-dom';
import { HorizontalTabsLink } from 'src/app/components/optimized';

const ProductsLayout = () => {
	const tabs = [
		{
			name: 'All Products',
			path: 'all_products',
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
	];
  return (
    <div>
      <div className="sticky top-[70px] z-10">
        <HorizontalTabsLink tabs={tabs} path="/products" />
      </div>
      <Outlet />
    </div>
  );

};

export default ProductsLayout;
