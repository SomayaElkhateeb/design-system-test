import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { AddRoleSchemaValues } from 'src/app/schema/settings/AddRoleSchema';
import PublicHandlingErrors from 'src/app/utils/AxiosUtils/PublicHandlingErrors';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

// get permissions
export const getPermissions = createAsyncThunk('permissions/getPermissions', () =>
	PublicRequest.getData('merchant/settings/permissions'),
);

// get permissions list
export const getPermissionsList = createAsyncThunk('permissionsList/getPermissionsList', () =>
	PublicRequest.getData('merchant/settings/roles'),
);

// get permissions show
export const getPermissionsShow = createAsyncThunk('permissionsShow/getPermissionsShow', (payload: string) =>
	PublicRequest.getData(`merchant/settings/roles/show/${payload}`),
);

// create roles
export const postRole = createAsyncThunk(
	"addRole/PostRole",
	(payload: AddRoleSchemaValues) =>
		PublicRequest.postData(payload, `merchant/settings/roles/store`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);

// update role
export const putRole = createAsyncThunk(
	"addRole/putRole",
	(payload: AddRoleSchemaValues) =>
		PublicRequest.putData(payload, `merchant/settings/roles/update${payload}`)
			.then((res: any) => {
				if (res) {
					toast.success(res?.message);
					return res;
				}
			})
			.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);


// delete role
export const deleteRole = createAsyncThunk(
	'deleteRole/deleteRole',
	(payload: string) => PublicRequest.deleteData(`merchant/settings/roles/delete/${payload}`).then((res: any) => {
		if (res) {
			toast.success(res?.message);
			return res;
		}
	})
		.catch(err => PublicHandlingErrors.onErrorResponse(err)),
);