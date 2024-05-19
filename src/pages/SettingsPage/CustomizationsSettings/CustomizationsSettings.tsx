import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HeaderSettings } from 'src/app/components/optimized';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import CheckoutCustomizeForm from './comp/CheckoutCustomizeForm';
import ProductCustomizeForm from './comp/ProductCustomizeForm';
import OrderInvoiceCustomizeForm from './comp/OrderInvoiceCustomizeForm';
import NewsletterConsentForm from './comp/NewsletterConsentForm';

export interface customizationsSettingsInterface {
	collectShippingAddress: boolean;
	controlOrderPurchase: boolean;
	minimumOrderSubtotal: number;
	askForCompanyName: boolean;
	askForPostalCode: boolean;
	guestCheckout: boolean;
	checkOutWith: string;
	hideOutOfStock: boolean;
	activateProductComparison: boolean;
	maxComparisons: number;
	autoArchiveOrder: boolean;
	showProductStock: boolean;
	productStockLimit: number;
	showPurchasesNum: boolean;
	purchasesNumExceeds: number;
	limitDownloadAttempts: boolean;
	maxDownloadAttempts: number;
	showTaxNumber: boolean;
	taxNumber: number;
	hideProductImages: boolean;
	showProductsDescription: boolean;
	showSKU: boolean;
	showContacts: boolean;
	subscriptionConfirm: string[];
	showSubscribeOptionAt: string;
	newsletterTextEn: string;
	newsletterTextAr: string;
	preselectOption: boolean;
	showNewsletterFooter: boolean;
}

export interface CustomizationsFormProps {
	formStore: UseFormReturn<customizationsSettingsInterface>;
}
const customizationsSettingsSchema = {
	guestCheckout: z.boolean().default(false),
	collectShippingAddress: z.boolean().default(false),
	minimumOrderSubtotal: z.coerce.number().min(0),
	controlOrderPurchase: z.boolean().default(false),
	askForCompanyName: z.boolean().default(false),
	askForPostalCode: z.boolean().default(false),
	checkOutWith: z.string().min(1, { message: 'Check out method is required' }),
	hideOutOfStock: z.boolean().default(false),
	activateProductComparison: z.boolean().default(false),
	maxComparisons: z.coerce.number().min(0),
	autoArchiveOrder: z.boolean().default(false),
	showProductStock: z.boolean().default(false),
	productStockLimit: z.coerce.number().min(0),
	showPurchasesNum: z.boolean().default(false),
	purchasesNumExceeds: z.coerce.number().min(0),
	limitDownloadAttempts: z.boolean().default(false),
	maxDownloadAttempts: z.coerce.number().min(0),
	showTaxNumber: z.boolean().default(false),
	taxNumber: z.coerce.number().min(0),
	hideProductImages: z.boolean().default(false),
	showProductsDescription: z.boolean().default(false),
	showSKU: z.boolean().default(false),
	showContacts: z.boolean().default(false),
	subscriptionConfirm: z
		.string()
		.min(1, { message: 'Newsletter subscription confirmation required' }),
	showSubscribeOptionAt: z
		.string()
		.min(1, { message: 'A place to display the Subscribe option is required' }),
	newsletterTextEn: z.string().min(1, { message: 'Text label is required' }),
	newsletterTextAr: z.string().min(1, { message: 'Text label is required' }),
	preselectOption: z.boolean().default(false),
	showNewsletterFooter: z.boolean().default(false),
};

export default function CustomizationsSettings() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handelDefaultValue = () => {
		return {
			guestCheckout: false,
			collectShippingAddress: false,
			minimumOrderSubtotal: 0,
			controlOrderPurchase: false,
			askForCompanyName: false,
			askForPostalCode: false,
			checkOutWith: '',
			hideOutOfStock: false,
			activateProductComparison: false,
			maxComparisons: 0,
			autoArchiveOrder: false,
			showProductStock: false,
			productStockLimit: 0,
			showPurchasesNum: false,
			purchasesNumExceeds: 0,
			limitDownloadAttempts: false,
			maxDownloadAttempts: 0,
			showTaxNumber: false,
			taxNumber: 0,
			hideProductImages: false,
			showProductsDescription: false,
			showSKU: false,
			showContacts: false,
			subscriptionConfirm: [],
			showSubscribeOptionAt: '',
			newsletterTextEn: '',
			newsletterTextAr: '',
			preselectOption: false,
			showNewsletterFooter: false,
		};
	};

	const handleSubmit = (values: customizationsSettingsInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: customizationsSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Customizations')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='grid gap-5 p-5 grid-cols-3'>
					<div className='grid gap-5 col-span-3 lg:col-span-2'>
						<CheckoutCustomizeForm formStore={formStore} />
						<ProductCustomizeForm formStore={formStore} />
						<NewsletterConsentForm formStore={formStore} />
						<OrderInvoiceCustomizeForm formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
