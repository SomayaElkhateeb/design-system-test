import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

export interface CustomizationsFormProps {
	formStore: UseFormReturn<CustomizationsTypes>;
}
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

export default function useCustomization() {
	const booleanValidation = z.boolean().default(false);
	const customizationsSchema = {
		subscriptionConfirm: z.array(z.string()).min(1),
		minimumOrderSubtotal: z.coerce.number().min(1),
		purchasesNumExceeds: z.coerce.number().min(1),
		maxDownloadAttempts: z.coerce.number().min(1),
		activateProductComparison: booleanValidation,
		productStockLimit: z.coerce.number().min(1),
		showProductsDescription: booleanValidation,
		collectShippingAddress: booleanValidation,
		limitDownloadAttempts: booleanValidation,
		maxComparisons: z.coerce.number().min(1),
		showSubscribeOptionAt: z.string().min(1),
		showNewsletterFooter: booleanValidation,
		controlOrderPurchase: booleanValidation,
		hideProductImages: booleanValidation,
		askForCompanyName: booleanValidation,
		askForPostalCode: booleanValidation,
		newsletterTextEn: z.string().min(1),
		taxNumber: z.coerce.number().min(1),
		newsletterTextAr: z.string().min(1),
		showProductStock: booleanValidation,
		autoArchiveOrder: booleanValidation,
		showPurchasesNum: booleanValidation,
		preselectOption: booleanValidation,
		hideOutOfStock: booleanValidation,
		guestCheckout: booleanValidation,
		showTaxNumber: booleanValidation,
		showContacts: booleanValidation,
		showSKU: booleanValidation,
		checkOutWith: z.string().min(1),
	};
	const handelDefaultValue = () => {
		return {
			showSubscribeOptionAt: 'Registration',
			activateProductComparison: false,
			showProductsDescription: false,
			checkOutWith: 'Email & phone',
			collectShippingAddress: false,
			limitDownloadAttempts: false,
			showNewsletterFooter: false,
			controlOrderPurchase: false,
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
			showSKU: false,
			taxNumber: 0,
		};
	};

	const handleSubmit = (values: CustomizationsTypes) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		handleSubmit: handleSubmit,
		schema: customizationsSchema,
		defaultValues: handelDefaultValue(),
	});

	return { formStore, onSubmit };
}
