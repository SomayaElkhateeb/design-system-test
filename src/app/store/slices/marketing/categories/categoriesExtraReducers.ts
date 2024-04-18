import { getSelectCategories, deleteCategory } from './categoriesAsyncThunks';

export const getCategoriesReducer = (builder) => {
	builder
		// get selectCategories
		.addCase(getSelectCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categories = action.payload;
		})
		.addCase(getSelectCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	// .addCase(deleteCategory.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(deleteCategory.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	state.categories = state.categories.filter((el) => el.id !== action.payload.id);
	// })
	// .addCase(deleteCategory.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// });
};
