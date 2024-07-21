import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddInventoryImportSchemaValues } from 'src/app/schema/settings/AddInventoryImportSchema';
import { AddInventorySchemaValues } from 'src/app/schema/settings/AddInventorySchema';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';


// get inventory (Export)
export const getInventoryExport = createAsyncThunk('inventoryExport/getInventoryExport', () =>
	PublicRequest.getData('merchant/settings/inventory-sources/export'),
);

// post Inventory Import
export const postInventoryImport = createAsyncThunk(
	"inventoryExport/postInventoryImport",
	(payload: AddInventoryImportSchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/inventory-sources/import`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

///////////////////////////////////////////

// get inventory (List)
export const getInventoryList = createAsyncThunk('inventoryList/getInventoryList', () =>
	PublicRequest.getData('merchant/settings/inventory-sources/list'),
);

// get inventory (show)
export const getInventoryShow = createAsyncThunk('inventoryShow/getInventoryShow', (payload: string) =>
	PublicRequest.getData(`merchant/settings/inventory-sources/show/${payload}`),
);

// create inventory
export const postInventory = createAsyncThunk(
	"inventoryList/postInventory",
	(payload: AddInventorySchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/inventory-sources/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update inventory
export const putInventory = createAsyncThunk(
	"inventoryList/putInventory",
	(payload: AddInventorySchemaValues) =>
		PublicRequest.putData(payload, `merchant/settings/inventory-sources/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// delete Inventory
export const deleteInventory = createAsyncThunk(
	'delete/deleteInventory',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/inventory-sources/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);