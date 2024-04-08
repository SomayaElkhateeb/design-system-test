import { useState } from 'react';

const useProductState = (initialProducts) => {
	const [products, setProducts] = useState(initialProducts);

	const publishProduct = (productId) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isPublished: true } : product,
		);
		setProducts(updatedProducts);
	};

	const unpublishProduct = (productId) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isPublished: false } : product,
		);
		setProducts(updatedProducts);
	};

	const replyToProduct = (productId) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isReplyed: true } : product,
		);
		setProducts(updatedProducts);
	};

	const deleteProduct = (productId) => {
		const updatedProducts = products.filter((product) => product.id !== productId);
		setProducts(updatedProducts);
	};

	const publishAllProducts = () => {
		const updatedProducts = products.map((product) => ({ ...product, isPublished: true }));
		setProducts(updatedProducts);
	};

    const publishedProducts = products.filter((product) => product.isPublished);
	const unpublishedProducts = products.filter((product) => !product.isPublished);

	return {
		products,
		publishProduct,
		unpublishProduct,
		replyToProduct,
		deleteProduct,
		publishAllProducts,
        publishedProducts,
        unpublishedProducts
	};
};

export default useProductState;
