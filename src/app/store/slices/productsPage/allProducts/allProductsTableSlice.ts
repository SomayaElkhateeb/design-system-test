import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'src/app/interface/ProductInterface';
import { getAllProductsReducer } from './allProductsExtraReducers';

export interface AllProductsStatus {
	allProducts: Product[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: AllProductsStatus = {
	allProducts: [
		{
			id: '1',
			name: 'mohamed Mostafa',
			category: 'blanket',
			SKU: 'mansoura',
			option: 10,
			quantity: 10,
			price: 1000,
			imageUrl: 'images/product.png',
		},
		{
			id: '2',
			name: 'mohamed Mostafa',
			category: 'blanket',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			imageUrl: 'images/product.png',
		},
	],
	isLoading: false,
	error: null,
};

const allProductsSlice = createSlice({
	name: 'allProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllProductsReducer(builder);
	},
});

export const selectAllProducts = (state: { allProducts: AllProductsStatus }) => state.allProducts;

export default allProductsSlice.reducer;
