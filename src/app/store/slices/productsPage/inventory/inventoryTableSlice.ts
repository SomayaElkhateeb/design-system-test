import { createSlice } from '@reduxjs/toolkit';
import { getInventoryReducer } from './inventoryExtraReducers';
import { inventorySliceModel } from 'src/app/models/inventorySliceModel';

const initialState: inventorySliceModel = {
	inventory: [],
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

export default inventorySlice.reducer;
