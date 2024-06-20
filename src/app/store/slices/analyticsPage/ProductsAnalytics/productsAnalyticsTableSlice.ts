import { createSlice } from '@reduxjs/toolkit';
import { getProductsAnalyticsTableReducer } from './productsAnalyticsTableExtraReducers';
import { AnalyticsProduct } from 'src/pages/AnalyticsPage/tabs/Products/AnalyticsProducts';

export interface ProductAnalyticsStatus {
	productsAnalytics: AnalyticsProduct[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: ProductAnalyticsStatus = {
	productsAnalytics: [
		{
			id: '1',
			product_name: 'Canon EOS Rebel',
			category: 'cameras',
			quantity: 150,
			price: 549.0,
			searches: 850,
			views: 750,
			quantity_sold: 300,
			returns: 50,
			imageUrl: 'images/Vector.svg',
		},
	],
	isLoading: false,
	error: null,
};

const productAnalyticsSlice = createSlice({
	name: 'productsAnalytics',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getProductsAnalyticsTableReducer(builder);
	},
});

export const selectProductsAnalytics = (state: { productsAnalytics: ProductAnalyticsStatus }) =>
	state.productsAnalytics;

export default productAnalyticsSlice.reducer;
