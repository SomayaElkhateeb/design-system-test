import { z } from 'zod';

export interface CustomizationsTypes {
	activateProductComparison: boolean;
	showProductsDescription: boolean;
	collectShippingAddress: boolean;
	limitDownloadAttempts: boolean;
	controlOrderPurchase: boolean;
	subscriptionConfirm: string[];
	showSubscribeOptionAt: string;
	showNewsletterFooter: boolean;
	minimumOrderSubtotal: number;
	maxDownloadAttempts: number;
	purchasesNumExceeds: number;
	askForCompanyName: boolean;
	hideProductImages: boolean;
	autoArchiveOrder: boolean;
	askForPostalCode: boolean;
	showProductStock: boolean;
	productStockLimit: number;
	showPurchasesNum: boolean;
	newsletterTextEn: string;
	newsletterTextAr: string;
	preselectOption: boolean;
	hideOutOfStock: boolean;
	guestCheckout: boolean;
	maxComparisons: number;
	showTaxNumber: boolean;
	showContacts: boolean;
	checkOutWith: string;
	taxNumber: number;
	showSKU: boolean;
}

export default function useCustomHookCustomizationSettings() {
	const booleanValidation = z.boolean().default(false);
	const customizationsSchema = {
		activateProductComparison: booleanValidation,
		showProductsDescription: booleanValidation,
		collectShippingAddress: booleanValidation,
		limitDownloadAttempts: booleanValidation,
		showNewsletterFooter: booleanValidation,
		controlOrderPurchase: booleanValidation,
		subscriptionConfirm: z.array(z.string()).min(1),
		minimumOrderSubtotal: z.coerce.number().min(1),
		hideProductImages: booleanValidation,
		askForCompanyName: booleanValidation,
		purchasesNumExceeds: z.coerce.number().min(1),
		maxDownloadAttempts: z.coerce.number().min(1),
		askForPostalCode: booleanValidation,
		showProductStock: booleanValidation,
		autoArchiveOrder: booleanValidation,
		showPurchasesNum: booleanValidation,
		productStockLimit: z.coerce.number().min(1),
		preselectOption: booleanValidation,
		hideOutOfStock: booleanValidation,
		guestCheckout: booleanValidation,
		showTaxNumber: booleanValidation,
		showContacts: booleanValidation,
		maxComparisons: z.coerce.number().min(1),
		showSubscribeOptionAt: z.string().min(1),
		newsletterTextEn: z.string().min(1),
		taxNumber: z.coerce.number().min(1),
		showSKU: booleanValidation,
		newsletterTextAr: z.string().min(1),
		checkOutWith: z.string().min(1),
	};

	const handelDefaultValue = () => {
		return {
			activateProductComparison: false,
			showProductsDescription: false,
			collectShippingAddress: false,
			limitDownloadAttempts: false,
			showNewsletterFooter: false,
			controlOrderPurchase: false,
			showSubscribeOptionAt: 'Registration',
			hideProductImages: false,
			askForCompanyName: false,
			askForPostalCode: false,
			autoArchiveOrder: false,
			showProductStock: false,
			showPurchasesNum: false,
			subscriptionConfirm: [],
			minimumOrderSubtotal: 0,
			maxDownloadAttempts: 0,
			purchasesNumExceeds: 0,
			preselectOption: false,
			hideOutOfStock: false,
			showTaxNumber: false,
			productStockLimit: 0,
			guestCheckout: false,
			newsletterTextEn: '',
			newsletterTextAr: '',
			showContacts: false,
			maxComparisons: 0,
			checkOutWith: 'Email & phone',
			showSKU: false,
			taxNumber: 0,
		};
	};

	return {
		handelDefaultValue,
		customizationsSchema,
	};
}
