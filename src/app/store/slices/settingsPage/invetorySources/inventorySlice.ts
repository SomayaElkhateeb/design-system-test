import { createSlice } from '@reduxjs/toolkit';
import { InventoryReducer } from './inventoryExtraReducers';
import { inventorySliceModel } from 'src/app/models/inventorySliceModel';

const initialState: inventorySliceModel = {
	inventoryExport: [],
	inventoryList: [],
    inventoryShow: [],
	isLoadingAddOrUpdate: false,
	isLoadingDelete: false,
	isLoading: false,
	error: null,
};

const inventorySlice = createSlice({
	name: 'inventorySettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		InventoryReducer(builder);
	},
});

export default inventorySlice.reducer;
