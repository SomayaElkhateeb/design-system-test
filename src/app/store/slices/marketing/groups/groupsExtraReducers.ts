// import { toast } from "react-toastify";

import {
	getDiscounts,
	getSelectCategories,
	getSelectProducts,
	getSelectCustomerGroups,
	getSelectCustomers,
} from './groupsAsyncThunks';

export const getDiscountReducer = (builder) => {
	builder
		// get discounts
		.addCase(getDiscounts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getDiscounts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons = action.payload;
		})
		.addCase(getDiscounts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};

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

export const getProductsReducer = (builder) => {
	builder
		// get selectProducts
		.addCase(getSelectProducts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(getSelectProducts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};

export const getGroupsReducer = (builder) => {
	builder
		// get selectCustomerGroups
		.addCase(getSelectCustomerGroups.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCustomerGroups.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(getSelectCustomerGroups.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};

export const getCustomersReducer = (builder) => {
	builder
		// get selectCustomers
		.addCase(getSelectCustomers.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCustomers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons.push(action.payload);
		})
		.addCase(getSelectCustomers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
