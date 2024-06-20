import { configureStore } from '@reduxjs/toolkit';
import discount from './slices/marketing/discounts/discountSlice';
import coupons from './slices/marketing/coupons/couponSlice';
import categories from './slices/marketing/categories/categoriesSlice';
import customers from './slices/marketing/customers/customersSlice';
import products from './slices/marketing/products/productsSlice';
import groups from './slices/marketing/groups/groupsSlice';
import productsAnalytics from './slices/analyticsPage/ProductsAnalytics/productsAnalyticsTableSlice';
import ordersAnalytics from './slices/analyticsPage/OrderAnalytics/orderAnalyticsTableSlice';
import customersAnalytics from './slices/analyticsPage/CustomerAnalytics/customersAnalyticsTableSlice';
import allCustomer from './slices/customersPage/AllCustomers/customersTableSlice';
import customersGroup from './slices/customersPage/CustomersGroup/customersGroupTableSlice';
import pages from './slices/pagesPage/pages/pagesTableSlice';
import blog from './slices/pagesPage/blog/blogTableSlice';
import allProducts from './slices/productsPage/allProducts/allProductsTableSlice';
import brands from './slices/productsPage/brands/brandsTableSlice';
import inventory from './slices/productsPage/inventory/inventoryTableSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
	reducer: {
		discount: discount, //
		coupons: coupons, //
		categories: categories,
		customers: customers,
		products: products,
		groups: groups,
		// analytics page
		productsAnalytics: productsAnalytics, //
		ordersAnalytics: ordersAnalytics, //
		customersAnalytics: customersAnalytics, //
		// customers page
		allCustomer: allCustomer, //
		customersGroup: customersGroup, //
		// pages page
		pages: pages, //
		blog: blog, //
		// products page
		allProducts: allProducts, //
		brands: brands, //
		inventory: inventory, //
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
