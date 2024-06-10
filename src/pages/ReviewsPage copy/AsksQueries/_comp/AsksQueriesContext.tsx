import { createContext, useContext, useState } from 'react';
import { AskQuery, Product, Response, products as initialProducts } from '../../_comp/data';

// Define interfaces for context value and state variables
export interface ContextValue {
	products: Product[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	addAskQueryResponse: (productId: string, queryId: string, newResponse: Response) => void;
	deleteAskQueryResponse: (productId: string, queryId: string) => void;
	editAskQueryResponse: (productId: string, queryId: string, editedResponse: Response) => void;
	deleteAskQuery: (productId: string, queryId: string) => void;
	// Properties for sorting
	sortQueries: (queries: AskQuery[], selectedOption: string) => AskQuery[];
	sortMenus: { id: string; text: string }[];
	handleArrangeSelect: (optionId: string) => void;
	selectedOption: string;
}

// Create the Context with a default value
const AsksQueriesContext = createContext<ContextValue>({
	products: initialProducts,
	isOpen: false,
	setIsOpen: () => {},
	addAskQueryResponse: () => {},
	deleteAskQueryResponse: () => {},
	editAskQueryResponse: () => {},
	deleteAskQuery: () => {},
	// Default values for sorting
	sortQueries: (queries: AskQuery[], selectedOption: string) => queries,
	sortMenus: [],
	handleArrangeSelect: () => {},
	selectedOption: '',
});

// Context Provider Component
const AsksQueriesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [products, setProducts] = useState<Product[]>(initialProducts);

	const [isOpen, setIsOpen] = useState(false);
	// Filter
	const [selectedOption, setSelectedOption] = useState<string>('date');
	const handleArrangeSelect = (optionId: string) => {
		setSelectedOption(optionId);
	};
	const sortMenus = [
		{ id: '1', text: 'Date published' },
		{ id: '2', text: 'Top queries' },
		{ id: '3', text: 'Lowest queries' },
	];

	const sortQueries = (queries: AskQuery[], selectedOption: string) => {
		switch (selectedOption) {
			case 'Date published':
				return queries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			case 'Date replied':
				return queries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			default:
				return queries;
		}
	};

	const addAskQueryResponse = (productId: string, queryId: string, newResponse: Response): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				if (product.id === productId) {
					const updatedAskQueries = product.ask_queries.map((query) => {
						console.log('addAskQueryResponse', newResponse);

						if (query.id === queryId) {
							return {
								...query,
								response: newResponse,
								isResponded: true,
							};
						}
						return query;
					});
					return {
						...product,
						ask_queries: updatedAskQueries,
					};
				}
				return product;
			});
		});
	};

	const deleteAskQueryResponse = (productId: string, queryId: string): void => {
		// Confirmation dialog before deleting
		const isConfirmed = window.confirm('Are you sure you want to delete?');
		if (isConfirmed) {
			setProducts((prevProducts) => {
				return prevProducts.map((product) => {
					if (product.id === productId) {
						const updatedAskQueries = product.ask_queries.map((query) => {
							if (query.id === queryId) {
								return {
									...query,
									response: null,
									isResponded: false,
								};
							}
							return query;
						});
						return {
							...product,
							ask_queries: updatedAskQueries,
						};
					}
					return product;
				});
			});
		}
	};

	const editAskQueryResponse = (productId: string, queryId: string, editedResponse: Response): void => {
		setProducts((prevProducts) => {
			return prevProducts.map((product) => {
				if (product.id === productId) {
					const updatedAskQueries = product.ask_queries.map((query) => {
						if (query.id === queryId) {
							console.log('editedResponse', editedResponse);

							return {
								...query,
								response: editedResponse,
							};
						}
						return query;
					});
					return {
						...product,
						ask_queries: updatedAskQueries,
					};
				}
				return product;
			});
		});
	};

	const deleteAskQuery = (productId: string, queryId: string): void => {
		// Show a confirmation dialog before deleting
		const isConfirmed = window.confirm('Are you sure you want to delete this question?');
		if (isConfirmed) {
			// Update the products state by removing the ask_query
			const updatedProducts = products.map((product) => {
				if (product.id === productId) {
					const updatedAskQueries = product.ask_queries.filter((query) => query.id !== queryId);
					return { ...product, ask_queries: updatedAskQueries };
				}
				return product;
			});
			setProducts(updatedProducts);
		}
	};

	return (
		// Provide the Context
		<AsksQueriesContext.Provider
			value={{
				products,
				isOpen,
				deleteAskQueryResponse,
				addAskQueryResponse,
				editAskQueryResponse,
				deleteAskQuery,
				setIsOpen,
				// Filter
				sortQueries,
				sortMenus,
				handleArrangeSelect,
				selectedOption,
			}}
		>
			{children}
		</AsksQueriesContext.Provider>
	);
};

// Custom Hook to use the Context
const useAsksQueriesContext = () => useContext(AsksQueriesContext);

export { AsksQueriesProvider, useAsksQueriesContext };
