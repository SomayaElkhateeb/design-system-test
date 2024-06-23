import { createSlice } from '@reduxjs/toolkit';
import { getGroupsReducer } from './groupsExtraReducers';

// initialState
const initialState = { groups: [], isLoading: false, error: null };

const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getGroupsReducer(builder);
	},
});

export const selectGroups = (state) => state.groups;

export default groupsSlice.reducer;
