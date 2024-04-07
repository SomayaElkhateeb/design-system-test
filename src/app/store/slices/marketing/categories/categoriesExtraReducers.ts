import { getSelectCategories } from './categoriesAsyncThunks';

export const getCategoriesReducer = (builder) => {
	builder
		// get selectCategories
		.addCase(getSelectCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(getSelectCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
