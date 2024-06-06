import { configureStore } from '@reduxjs/toolkit';
import discount from './slices/marketing/discounts/discountSlice';
import coupons from './slices/marketing/coupons/couponSlice';
import categories from './slices/marketing/categories/categoriesSlice';
import customers from './slices/marketing/customers/customersSlice';
import products from './slices/marketing/products/productsSlice';
import groups from './slices/marketing/groups/groupsSlice';
import productsAnalytics from './slices/analyticsPage/ProductsAnalytics/productsAnalyticsTableSlice';

const store = configureStore({
	reducer: {
		discount: discount,
		coupons: coupons,
		categories: categories,
		customers: customers,
		products: products,
		groups: groups,
		productsAnalytics: productsAnalytics,
	},
});

export default store;
