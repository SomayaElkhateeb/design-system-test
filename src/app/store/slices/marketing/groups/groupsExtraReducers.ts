import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getSelectCustomerGroups } from './groupsAsyncThunks';

interface GroupsState {
	isLoading: boolean;
	error: any;
	groups: any[];
}

export const getGroupsReducer = (builder: ActionReducerMapBuilder<GroupsState>) => {
	builder
		.addCase(getSelectCustomerGroups.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCustomerGroups.fulfilled, (state, action) => {
			state.isLoading = false;
			state.groups = action.payload;
		})
		.addCase(getSelectCustomerGroups.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
