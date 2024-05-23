import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';

import useCustomHookCustomizationSettings, {
	customizationsInterface,
} from './HookForCustomizationsettings';

export interface CustomizationsFormProps {
	formStore: UseFormReturn<CustomizationsInterface>;
}

export interface CustomizationsInterface {
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
	const customizationsSchema = {
		activateProductComparison: z.boolean().default(false),
		showProductsDescription: z.boolean().default(false),
		collectShippingAddress: z.boolean().default(false),
		limitDownloadAttempts: z.boolean().default(false),
		showNewsletterFooter: z.boolean().default(false),
		controlOrderPurchase: z.boolean().default(false),
		subscriptionConfirm: z.array(z.string()).min(1),
		minimumOrderSubtotal: z.coerce.number().min(0),
		hideProductImages: z.boolean().default(false),
		askForCompanyName: z.boolean().default(false),
		purchasesNumExceeds: z.coerce.number().min(0),
		maxDownloadAttempts: z.coerce.number().min(0),
		askForPostalCode: z.boolean().default(false),
		showProductStock: z.boolean().default(false),
		autoArchiveOrder: z.boolean().default(false),
		showPurchasesNum: z.boolean().default(false),
		productStockLimit: z.coerce.number().min(0),
		preselectOption: z.boolean().default(false),
		hideOutOfStock: z.boolean().default(false),
		guestCheckout: z.boolean().default(false),
		showTaxNumber: z.boolean().default(false),
		showContacts: z.boolean().default(false),
		maxComparisons: z.coerce.number().min(0),
		showSubscribeOptionAt: z.string().min(1),
		newsletterTextEn: z.string().min(1),
		taxNumber: z.coerce.number().min(0),
		showSKU: z.boolean().default(false),
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
			showSubscribeOptionAt: '',
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
			checkOutWith: '',
			showSKU: false,
			taxNumber: 0,
		};
	};


const handleSubmit = (values: CustomizationsInterface) => {
		console.log(values);
	};

export default function UseCustomization() {
	const handleSubmit = (values: customizationsInterface) => {

		console.log(values);
	};

	//  custom hooks
	const { customizationsSchema, handelDefaultValue } = useCustomHookCustomizationSettings();
	const { formStore, onSubmit } = useForm({
		handleSubmit: handleSubmit,
		schema: customizationsSchema,
		defaultValues: handelDefaultValue(),
	});
	return { formStore, onSubmit };
}
