import { useState } from 'react';

export interface Product {
	id: string;
	reviewer: string;
	date: string;
	content: string;
	rating: number;
	numReviews: number;
	product: string;
	image: string;
	isPublished: boolean;
	isReplyed: boolean;
}

interface UseProductStateReturn {
	products: Product[];
	publishProduct: (productId: string) => void;
	unpublishProduct: (productId: string) => void;
	replyToProduct: (productId: string) => void;
	markAsNotReplied: (productId: string) => void;
	deleteProduct: (productId: string) => void;
	publishAllProducts: () => void;
	selectedOption: string;
	filteredPublishedProducts: Product[];
	filteredUnpublishedProducts: Product[];
	handleArrangeSelect: (optionId: string) => void;
	publishedProducts: Product[];
	unpublishedProducts: Product[];
}

const useProductState = (initialProducts: Product[]): UseProductStateReturn => {
	const [products, setProducts] = useState<Product[]>(initialProducts);
	const [selectedOption, setSelectedOption] = useState<string>('date');

	const publishProduct = (productId: string) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isPublished: true } : product,
		);
		setProducts(updatedProducts);
	};

	const unpublishProduct = (productId: string) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isPublished: false } : product,
		);
		setProducts(updatedProducts);
	};

	const replyToProduct = (productId: string) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isReplyed: true } : product,
		);
		setProducts(updatedProducts);
	};

	const markAsNotReplied = (productId: string) => {
		const updatedProducts = products.map((product) =>
			product.id === productId ? { ...product, isReplyed: false } : product,
		);
		setProducts(updatedProducts);
	};

	const deleteProduct = (productId: string) => {
		const updatedProducts = products.filter((product) => product.id !== productId);
		setProducts(updatedProducts);
	};

	const publishAllProducts = () => {
		const updatedProducts = products.map((product) => ({ ...product, isPublished: true }));
		setProducts(updatedProducts);
	};

	// =================================================================
	const publishedProducts = products.filter((product) => product.isPublished);
	const unpublishedProducts = products.filter((product) => !product.isPublished);

	const handleArrangeSelect = (optionId: string) => {
		setSelectedOption(optionId);
	};

	const sortProducts = (products: Product[], selectedOption: string) => {
		switch (selectedOption) {
			case 'Date published':
				return products.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			case 'Top reviews':
				return products.sort((a, b) => b.rating - a.rating);
			case 'Lowest reviews':
				return products.sort((a, b) => a.rating - b.rating);
			default:
				return products;
		}
	};

	const filteredPublishedProducts = sortProducts(publishedProducts, selectedOption);
	const filteredUnpublishedProducts = sortProducts(unpublishedProducts, selectedOption);

	return {
		products,
		publishProduct,
		unpublishProduct,
		replyToProduct,
		markAsNotReplied,
		deleteProduct,
		publishAllProducts,
		selectedOption,
		filteredPublishedProducts,
		filteredUnpublishedProducts,
		publishedProducts,
		unpublishedProducts,
		handleArrangeSelect,
	};
};

export default useProductState;
