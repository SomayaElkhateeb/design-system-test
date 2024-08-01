
import { z } from 'zod';

export interface CustomizationsTypes {
	customizations: {
		checkout: {
			guest_checkout: number;
			set_minimum_allowed_order_subtotal: number;
			minimum_order_subtotal: number;
			ask_for_company_name: number;
			customer_can_checkout_with: string;
			ask_for_zip_postal_code: number;
		},
		product: {
			activate_product_comparison: number;
			auto_archive_order: number;
			stock_limit: number;
			show_purchases_number_in_product_page: number;
			when_purchases_number_exceeds_times: number;
			download_digital_product_limit: number;
		},
		double_opt: {
			require_customers_confirm_subscription: string;
			show_option_at: string;
			text_label: string;
			preselect_option_for_customers: number;
			show_email_newsletter_in_footer: number;
		},
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
	const zodNumber = z.coerce.number().min(0).max(1);
	
	const customizationsSchema = z.object({
		customizations: z.object({
			checkout: z.object({
				guest_checkout: zodNumber,
				set_minimum_allowed_order_subtotal: zodNumber,
				minimum_order_subtotal: z.coerce.number().positive().min(1),
				ask_for_company_name: zodNumber,
				customer_can_checkout_with: z.enum(['email_phone', 'email_only', 'phone_only']),
				ask_for_zip_postal_code: zodNumber,
			}),
			product: z.object({
				activate_product_comparison: zodNumber,
				auto_archive_order: zodNumber,
				stock_limit: zodNumber,
				show_purchases_number_in_product_page: zodNumber,
				when_purchases_number_exceeds_times: zodNumber,
				download_digital_product_limit: zodNumber,
			}),
			double_opt: z.object({
				require_customers_confirm_subscription: z.string().min(1),
				show_option_at: z.string().min(1),
				text_label: z.string().min(1),
				preselect_option_for_customers: zodNumber,
				show_email_newsletter_in_footer: zodNumber,
			}),
			order_invoice: z.object({
				show_tax_number: zodNumber,
				tax_number: z.coerce.number().positive().min(1),
				hide_product_images: zodNumber,
				show_products_description: zodNumber,
				show_sku: zodNumber,
				show_contacts: zodNumber,
			})
		}),
	});

	const handelDefaultValue = (): CustomizationsTypes => {
		return {
			customizations: {
				checkout: {
					guest_checkout: 0,
					set_minimum_allowed_order_subtotal: 0,
					minimum_order_subtotal: 0,
					ask_for_company_name: 0,
					customer_can_checkout_with: 'email_phone',
					ask_for_zip_postal_code: 0,
				},
				product: {
					activate_product_comparison: 0,
					auto_archive_order: 0,
					stock_limit: 0,
					show_purchases_number_in_product_page: 0,
					when_purchases_number_exceeds_times: 0,
					download_digital_product_limit: 0,
				},
				double_opt: {
					require_customers_confirm_subscription: 'email_sms',
					show_option_at: 'registration',
					text_label: '',
					preselect_option_for_customers: 0,
					show_email_newsletter_in_footer: 0,
				},
				order_invoice: {
					show_tax_number: 0,
					tax_number: 0,
					hide_product_images: 0,
					show_products_description: 0,
					show_sku: 0,
					show_contacts: 0,
				},
			}
		};
	};

	return {
		handelDefaultValue,
		customizationsSchema,
	};
}
