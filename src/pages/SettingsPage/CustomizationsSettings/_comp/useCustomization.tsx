import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';

import useCustomHookCustomizationSettings from './HookForCustomizationsettings';

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

	


	const handleSubmit = (values: CustomizationsTypes) => {
		console.log(values);
	};

	const {customizationsSchema,handelDefaultValue}=useCustomHookCustomizationSettings()

	const { formStore, onSubmit } = useForm({
		handleSubmit: handleSubmit,
		schema: customizationsSchema,
		defaultValues: handelDefaultValue(),
	});

	return { formStore, onSubmit };
}
