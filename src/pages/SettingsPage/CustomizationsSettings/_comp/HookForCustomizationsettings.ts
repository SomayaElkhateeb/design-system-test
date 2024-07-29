import { z } from 'zod';

export interface CustomizationsTypes {
	customizations: {
		// Customizations checkout
		checkout: {
			guest_checkout: number;
			set_minimum_allowed_order_subtotal: number;
			minimum_order_subtotal: number;
			ask_for_company_name: number;
			customer_can_checkout_with: string;  // 
			ask_for_zip_postal_code: number
		},
		// Customizations products
		product: {
			activate_product_comparison: number;
			auto_archive_order: number;
			stock_limit: number;
			show_purchases_number_in_product_page: number;
			when_purchases_number_exceeds_times: number;
			download_digital_product_limit: number;
		},
		// Customizations double
		double_opt: {
			require_customers_confirm_subscription: string;
			show_option_at: string;
			text_label: string;
			preselect_option_for_customers: number;
			show_email_newsletter_in_footer: number;
		},
		// Customizations order
		order_invoice: {
			show_tax_number: number;
			tax_number: number;
			hide_product_images: number;
			show_products_description: number;
			show_sku: number;
			show_contacts: number;
		}
	}
}

export default function useCustomHookCustomizationSettings() {
	const booleanValidation = z.boolean().default(false);
	const customizationsSchema = {
		customizations: {
			// Customizations checkout
			checkout: {
				guest_checkout: booleanValidation,
				set_minimum_allowed_order_subtotal: z.coerce.number().positive().min(1),
				minimum_order_subtotal: booleanValidation,
				ask_for_company_name: booleanValidation,
				customer_can_checkout_with: z.string().min(1),  // 
				ask_for_zip_postal_code: booleanValidation,
			},
			// Customizations products
			product: {
				activate_product_comparison: booleanValidation,
				auto_archive_order: booleanValidation,
				stock_limit: booleanValidation,
				show_purchases_number_in_product_page: booleanValidation,
				when_purchases_number_exceeds_times: booleanValidation,
				download_digital_product_limit: booleanValidation,
			},
			// Customizations double
			double_opt: {
				require_customers_confirm_subscription: z.array(z.string()).min(1),
				show_option_at: z.string().min(1),
				text_label: z.string().min(1),
				preselect_option_for_customers: booleanValidation,
				show_email_newsletter_in_footer: booleanValidation,
			},
			// Customizations order
			order_invoice: {
				show_tax_number: booleanValidation,
				tax_number: booleanValidation,
				hide_product_images: booleanValidation,
				show_products_description: booleanValidation,
				show_sku: booleanValidation,
				show_contacts: booleanValidation,
			}
		},

		// /////////////////////////
		activateProductComparison: booleanValidation,
		showProductsDescription: booleanValidation,
		collectShippingAddress: booleanValidation,
		limitDownloadAttempts: booleanValidation,
		showNewsletterFooter: booleanValidation,
		controlOrderPurchase: booleanValidation,
		subscriptionConfirm: z.array(z.string()).min(1),
		minimumOrderSubtotal: z.coerce.number().positive().min(1),
		hideProductImages: booleanValidation,
		askForCompanyName: booleanValidation,
		purchasesNumExceeds: z.coerce.number().positive().min(1),
		maxDownloadAttempts: z.coerce.number().positive().min(1),
		askForPostalCode: booleanValidation,
		showProductStock: booleanValidation,
		autoArchiveOrder: booleanValidation,
		showPurchasesNum: booleanValidation,
		productStockLimit: z.coerce.number().positive().min(1),
		preselectOption: booleanValidation,
		hideOutOfStock: booleanValidation,
		guestCheckout: booleanValidation,
		showTaxNumber: booleanValidation,
		showContacts: booleanValidation,
		maxComparisons: z.coerce.number().positive().min(1),
		showSubscribeOptionAt: z.string().min(1),
		newsletterTextEn: z.string().min(1),
		taxNumber: z.coerce.number().positive().min(1),
		showSKU: booleanValidation,
		newsletterTextAr: z.string().min(1),
		checkOutWith: z.string().min(1),
	};

	const handelDefaultValue = () => {
		return {
			guest_checkout: 0,
			set_minimum_allowed_order_subtotal: 0,
			minimum_order_subtotal: 0,
			ask_for_company_name: 0,
			customer_can_checkout_with: 'Email & phone',
			ask_for_zip_postal_code: 0,
			/////////////////////////////////////////
			activate_product_comparison: 0,
			auto_archive_order: 0,
			stock_limit: 0,
			show_purchases_number_in_product_page: 0,
			when_purchases_number_exceeds_times: 0,
			download_digital_product_limit: 0,
			/////////////////////////////////////////
			require_customers_confirm_subscription: [],
			show_option_at: 'Registration',
			text_label: '',
			preselect_option_for_customers: 0,
			show_email_newsletter_in_footer: 0,
			/////////////////////////////////////////
			show_tax_number: 0,
			tax_number: 0,
			hide_product_images: 0,
			show_products_description: 0,
			show_sku: 0,
			show_contacts: 0,
		};
	};

	return {
		handelDefaultValue,
		customizationsSchema,
	};
}
