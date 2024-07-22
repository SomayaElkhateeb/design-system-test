import { combineReducers } from '@reduxjs/toolkit';
import discount from './slices/marketing/discounts/discountSlice';
import coupons from './slices/marketing/coupons/couponSlice';
import categories from './slices/selectors/categories/categoriesSlice';
import customers from './slices/selectors/customers/customersSlice';
import products from './slices/selectors/products/productsSlice';
import groups from './slices/selectors/groups/groupsSlice';
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
import categoriesTable from './slices/productsPage/categories/categoriesTable/categoriesTableSlice';
import subCategories from './slices/productsPage/categories/subCategoriesTable/subCategoriesSlice';
import allOrders from './slices/ordersPage/allOrders/allOrdersSlice';

import AddresseCustomersSlice from './slices/customersPage/AddresseCustomer/AddresseCustomersSlice';

// imports settings page
import shippingSettings from './slices/settingsPage/shipping/shippingSlice';
import taxSettings from './slices/settingsPage/tax/taxCategories/taxCategriesSlice';
import usersSettings from './slices/settingsPage/users/usersSlice';
import rolesSettings from './slices/settingsPage/roles/rolesSlice';
import helpSettings from './slices/settingsPage/help/helpSlice';
import emailNotificationSettings from './slices/settingsPage/emailNotification/emailNotificationSlice';


export const rootReducer = combineReducers({
	discount: discount,
	coupons: coupons,
	categories: categories,
	customers: customers,
	products: products,
	groups: groups,
	// analytics page
	productsAnalytics: productsAnalytics,
	ordersAnalytics: ordersAnalytics,
	customersAnalytics: customersAnalytics,
	// customers page
	allCustomer: allCustomer,
	AddressesCustomer:AddresseCustomersSlice,
	customersGroup: customersGroup,
	// pages page
	pages: pages,
	blog: blog,
	// products page
	allProducts: allProducts,
	brands: brands,
	inventory: inventory,
	categoriesTable: categoriesTable,
	subCategories: subCategories,
	// orders page
	allOrders: allOrders,

	// settings page
	shippingSettings: shippingSettings,
	taxSettings: taxSettings,
	usersSettings:usersSettings,
	rolesSettings:rolesSettings,
	helpSettings:helpSettings,
	emailNotificationSettings:emailNotificationSettings,
});
