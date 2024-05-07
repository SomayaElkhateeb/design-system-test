import ProductsLayout from 'src/app/components/page/Products/ProductsLayout';
import ProductsPageGuard from 'src/app/components/page/Products/ProductsPageGuard';

const ProductsPage = () => {
	return (
		<ProductsPageGuard>
			<ProductsLayout />
		</ProductsPageGuard>
	);
};

export default ProductsPage;
