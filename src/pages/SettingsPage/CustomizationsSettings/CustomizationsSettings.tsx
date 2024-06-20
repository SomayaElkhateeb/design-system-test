import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';

import { Form } from 'src/app/components/ui/form';
import CheckoutCustomizeForm from './_comp/CheckoutCustomizeForm';
import NewsletterConsentForm from './_comp/NewsletterConsentForm';
import OrderInvoiceCustomizeForm from './_comp/OrderInvoiceCustomizeForm';
import ProductCustomizeForm from './_comp/ProductCustomizeForm';
import UseCustomization from './_comp/useCustomization';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

export default function CustomizationsSettings() {
	const { t } = useTranslation();
	const { formStore, onSubmit } = UseCustomization();
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Customizations')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='grid custom_container grid-cols-3'>
					<div className='grid gap-5 col-span-3 lg:col-span-2'>
						<CheckoutCustomizeForm formStore={formStore} />
						<ProductCustomizeForm formStore={formStore} />
						<NewsletterConsentForm formStore={formStore} />
						<OrderInvoiceCustomizeForm formStore={formStore} />
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
