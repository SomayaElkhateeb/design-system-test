import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getInventoryTable = createAsyncThunk('inventoryTable/getInventoryTable', () =>
	PublicRequest.getData('merchant/catalog/products/inventory-products'),
);
