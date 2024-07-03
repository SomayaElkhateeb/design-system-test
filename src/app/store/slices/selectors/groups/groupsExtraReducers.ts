import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSelectcustomer_groups } from './groupsAsyncThunks';

interface GroupsState {
	isLoading: boolean;
	error: any;
	groups: any[];
}

export const getGroupsReducer = (builder: ActionReducerMapBuilder<GroupsState>) => {
	builder
		.addCase(getSelectcustomer_groups.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectcustomer_groups.fulfilled, (state, {payload}:any) => {
			state.isLoading = false;
			state.groups = payload?.data;
		})
		.addCase(getSelectcustomer_groups.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
