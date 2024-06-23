import { combineReducers } from '@reduxjs/toolkit';
import discount from './slices/marketing/discounts/discountSlice';
import coupons from './slices/marketing/coupons/couponSlice';
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
// ===========================
import categoriesSlice from './slices/selectors/categories/categoriesSlice';
import customersSlice from './slices/selectors/customers/customersSlice';
import productsSlice from './slices/selectors/products/productsSlice';
import groupsSlice from './slices/selectors/groups/groupsSlice';
export const rootReducer = combineReducers({
	discount: discount, //
	coupons: coupons, //
	categories: categoriesSlice,
	customers: customersSlice,
	products: productsSlice,
	groups: groupsSlice,
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
});
