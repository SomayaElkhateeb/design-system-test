import React, { createContext, useContext, useState } from 'react';
import { Product, Response, Review, products as initialProducts } from '../../_comp/data';

export interface ReviewsContext {
	products: Product[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	addResponseToReview: (productId: string, queryId: string, newResponse: Response) => void;
	deleteReviewResponse: (productId: string, queryId: string) => void;
	editReviewResponse: (productId: string, queryId: string, editedResponse: Response) => void;
	deleteReviewPresently: (productId: string, queryId: string) => void;
	setReviewUnpublished: (productId: string, queryId: string) => void;
	publishReview: (productId: string, queryId: string) => void;
	publishAllRepliedReview: () => void;
	// Properties for sorting
	sortReviews: (reviews: Review[], selectedOption: string) => Review[];
	sortMenus: { id: string; text: string }[];
	handleArrangeSelect: (optionId: string) => void;
	selectedOption: string;
}

// Create the Context with a default value
const ProductReviewsContext = createContext<ReviewsContext>({
	products: initialProducts,
	isOpen: false,
	setIsOpen: () => {},
	addResponseToReview: () => {},
	deleteReviewResponse: () => {},
	editReviewResponse: () => {},
	publishAllRepliedReview: () => {},
	publishReview: () => {},
	setReviewUnpublished: () => {},
	deleteReviewPresently: () => {},
	// Default values for sorting
	sortReviews: (reviews: Review[], selectedOption: string) => reviews,
	sortMenus: [],
	handleArrangeSelect: () => {},
	selectedOption: '',
});

export const ProductReviewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>(initialProducts);

	// State for managing sidebar open/close
	const [isOpen, setIsOpen] = useState(false);

	// Filter
	const [selectedOption, setSelectedOption] = useState<string>('date');
	const handleArrangeSelect = (optionId: string) => {
		setSelectedOption(optionId);
	};
	const sortMenus = [
		{ id: '1', text: 'Date published' },
		{ id: '2', text: 'Top reviews' },
		{ id: '3', text: 'Lowest reviews' },
	];

	const sortReviews = (reviews: Review[], selectedOption: string) => {
		switch (selectedOption) {
			case 'Date published':
				return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			case 'Top reviews':
				return reviews.sort((a, b) => b.rating - a.rating);
			case 'Lowest reviews':
				return reviews.sort((a, b) => a.rating - b.rating);
			default:
				return reviews;
		}
	};

	// Done
	const addResponseToReview = (productId: string, reviewId: string, newResponse: Response): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						reviews: product.reviews.map((review) => {
							if (review.id === reviewId) {
								return {
									...review,
									response: newResponse,
									isReplied: true,
								};
							}
							return review;
						}),
					};
				}
				return product;
			});
		});
	};

	// Done
	const deleteReviewResponse = (productId: string, reviewId: string): void => {
		const isConfirmed = window.confirm('Are you sure you want to delete?');
		if (isConfirmed) {
			setProducts((prevProducts) => {
				return prevProducts.map((product) => {
					if (product.id === productId) {
						const updatedReviews = product.reviews.map((review) => {
							if (review.id === reviewId) {
								if (review.response) {
									return {
										...review,
										response: null,
										isReplied: false,
									};
								}
							}
							return review;
						});
						return {
							...product,
							reviews: updatedReviews,
						};
					}
					return product;
				});
			});
		}
	};

	// Done
	const editReviewResponse = (productId: string, reviewId: string, editedResponse: Response): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				if (product.id === productId) {
					const updatedReview = product.reviews.map((review) => {
						if (review.id === reviewId) {
							return {
								...review,
								response: editedResponse,
							};
						}
						return review;
					});
					return {
						...product,
						reviews: updatedReview,
					};
				}
				return product;
			});
		});
	};

	// Done
	const publishReview = (productId: string, reviewId: string): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				if (product.id === productId) {
					return {
						...product,
						reviews: product.reviews.map((review) => {
							if (review.id === reviewId) {
								return {
									...review,
									isPublished: true, // Set isPublished to true for the specific review
								};
							}
							return review;
						}),
					};
				}
				return product;
			});
		});
	};

	// Done
	const publishAllRepliedReview = (): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				const allReplied = product.reviews.some((review) => review.isReplied);
				if (allReplied) {
					return {
						...product,
						reviews: product.reviews.map((review) => ({
							...review,
							isPublished: review.isReplied,
						})),
					};
				}
				return product;
			});
		});
	};

	// Done
	const setReviewUnpublished = (productId: string, reviewId: string): void => {
		const isConfirmed = window.confirm('Are you sure you want to mark this review as unpublished?');
		if (isConfirmed) {
			setProducts((prevProducts) => {
				return prevProducts.map((product) => {
					if (product.id === productId) {
						const updatedReviews = product.reviews.map((review) => {
							if (review.id === reviewId) {
								return {
									...review,
									isPublished: false,
								};
							}
							return review;
						});
						return {
							...product,
							reviews: updatedReviews,
						};
					}
					return product;
				});
			});
		}
	};

	// Done
	const deleteReviewPresently = (productId: string, reviewId: string): void => {
		const isConfirmed = window.confirm('Are you sure you want to delete?');
		if (isConfirmed) {
			setProducts((prevProducts) => {
				return prevProducts.map((product) => {
					if (product.id === productId) {
						const updatedReviews = product.reviews.filter((review) => review.id !== reviewId);
						return {
							...product,
							reviews: updatedReviews,
						};
					}
					return product;
				});
			});
		}
	};

	// Value to be provided by the context
	const value: ReviewsContext = {
		products,
		isOpen,
		setIsOpen,
		addResponseToReview,
		deleteReviewResponse,
		editReviewResponse,
		publishReview,
		publishAllRepliedReview,
		setReviewUnpublished,
		deleteReviewPresently,
		// Filter
		sortReviews,
		sortMenus,
		handleArrangeSelect,
		selectedOption,
	};

	// Provide the context value to the children components
	return <ProductReviewsContext.Provider value={value}>{children}</ProductReviewsContext.Provider>;
};

// Custom hook to consume the context
export const useProductReviewsContext = () => useContext(ProductReviewsContext);
