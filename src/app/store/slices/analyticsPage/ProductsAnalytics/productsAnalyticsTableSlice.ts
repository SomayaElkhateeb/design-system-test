import { createSlice } from '@reduxjs/toolkit';
import { getProductsAnalyticsTableReducer } from './productsAnalyticsTableExtraReducers';
import { AnaylticesProduct } from 'src/pages/AnalyticsPage/Products/Products';

export interface ProductAnalyticsStatus {
	productsAnalytics: AnaylticesProduct[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: ProductAnalyticsStatus = {
	productsAnalytics: [
		{
			id: '1',
			product_name: 'Canon EOS Rebel T7',
			category: 'cameras',
			quantity: 150,
			price: '549.00',
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
