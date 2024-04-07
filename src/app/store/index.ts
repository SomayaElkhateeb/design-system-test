import { configureStore } from '@reduxjs/toolkit';
import discount from './slices/marketing/discounts/discountSlice';
import coupons from './slices/marketing/coupons/couponSlice';
import selectCategories from './slices/marketing/categories/categoriesSlice';
import customersSlice from './slices/marketing/customers/customersSlice';

const store = configureStore({
	reducer: {
		discount: discount,
		coupons: coupons,
		categories: selectCategories,
		customers: customersSlice,
	},
});

export default store;
