import { createSlice } from '@reduxjs/toolkit';
import { getInventoryReducer } from './inventoryExtraReducers';
import { Product } from 'src/pages/ProductsPage/tabs/AllProducts/AllProducts';

export interface inventoryStatus {
	inventory: Product[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: inventoryStatus = {
	inventory: [
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

const inventorySlice = createSlice({
	name: 'inventory',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getInventoryReducer(builder);
	},
});

export const selectInventory = (state: { inventory: inventoryStatus }) => state.inventory;

export default inventorySlice.reducer;
