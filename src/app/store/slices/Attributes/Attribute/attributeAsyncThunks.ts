import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { Attribute } from 'src/app/interface/AttributeInterface';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get attributes list
export const getAttributes = createAsyncThunk('attribute/getAttributes', () =>
	PublicRequest.getData('merchant/catalog/attributes/list'),
);

// get attribute show
export const getAttributeShow = createAsyncThunk('attributeShow/getAttributeShow', (payload: string) =>
	PublicRequest.getData(`merchant/catalog/attributes/show/${payload}`),
);

// create attribute
export const postAttribute = createAsyncThunk(
	"addAttribute/PostAttribute",
	(payload: Attribute) =>
		PublicRequest.postData(payload, `merchant/catalog/attributes/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update attribute
export const putAttribute = createAsyncThunk(
	"updateAttribute/putAttribute",
	(payload: Attribute) =>
		PublicRequest.putData(payload, `merchant/catalog/attributes/update/${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// store option
export const postOption = createAsyncThunk(
	"addOption/postOption",
	(payload: any) =>
		PublicRequest.postData(payload, `merchant/catalog/attributes/addOptions`) // id ==> ?
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// delete attribute
export const deleteAttribute = createAsyncThunk(
	'deleteAttribute/deleteAttribute',
	(payload: string) => PublicRequest.deleteData(`merchant/catalog/attributes/destroy/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// mass destroy
export const deleteAllAttributesAction = createAsyncThunk(
	'deleteAllAttributes/deleteAllAttributesAction',
	(payload: { indexes: string }) => PublicRequest.postData(payload, `merchant/catalog/attributes/mass-destroy`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);