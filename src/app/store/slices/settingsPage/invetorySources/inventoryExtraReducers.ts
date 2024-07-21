import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { inventorySliceModel } from 'src/app/models/inventorySliceModel';
import { deleteInventory, getInventoryExport, getInventoryList, getInventoryShow, postInventory, postInventoryImport, putInventory } from './inventoryAsyncThunks';

export const InventoryReducer = (builder: ActionReducerMapBuilder<inventorySliceModel>) => {
	builder
		// get inventory (Export)
		.addCase(getInventoryExport.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getInventoryExport.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.inventoryExport = payload.data;
		})
		.addCase(getInventoryExport.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// post Inventory Import
		.addCase(postInventoryImport.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postInventoryImport.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postInventoryImport.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
		/////////////////////////////////////////////
		// get inventory (List)
		.addCase(getInventoryList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getInventoryList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.inventoryList = payload.data;
		})
		.addCase(getInventoryList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// get inventory (show)
		.addCase(getInventoryShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getInventoryShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.inventoryShow = payload.data; // todo
		})
		.addCase(getInventoryShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		// create inventory
		.addCase(postInventory.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postInventory.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postInventory.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		/// update inventory
		.addCase(putInventory.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putInventory.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
			const index = state.inventoryList.findIndex(item => item.id === payload.data.id);
			if (index !== -1) {
				state.inventoryList[index] = payload.data;
			}
		})
		.addCase(putInventory.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
			state.error = action.payload;
		})

		// delete Inventory
		.addCase(deleteInventory.pending, (state) => {
			state.isLoadingDelete = true;
		})
		.addCase(deleteInventory.fulfilled, (state, { payload }) => {
			state.isLoadingDelete = false;
			state.inventoryList = state.inventoryList.filter(e => e.id !== payload.data.id); // Adjust based on your response structure
		})
		.addCase(deleteInventory.rejected, (state, action) => {
			state.isLoadingDelete = false;
			state.error = action.payload;
		});
};
