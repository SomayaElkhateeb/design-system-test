import { createSlice } from '@reduxjs/toolkit';
import { getProductsTableReducer } from './productsTableExtraReducers';
import { Product } from 'src/app/interface/ProductInterface';

export interface ProductStatus {
	products: Product[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: ProductStatus = {
	products: [
		{
			id: '1',
			title: 'medo',
			category: '10',
			option: 12,
			img: '10',
			SKU: '225848779895',
			quantity: 10,
			price: 10,
		},
	],
	isLoading: false,
	error: null,
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getProductsTableReducer(builder);
	},
});

export const selectProducts = (state: { products: ProductStatus }) => state.products;

export default productSlice.reducer;
