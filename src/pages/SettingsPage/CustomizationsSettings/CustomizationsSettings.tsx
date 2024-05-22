import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/app/components/ui/form';
import useCustomization from './comp/useCustomization';
import { HeaderSettings } from 'src/app/components/optimized';
import ProductCustomizeForm from './comp/ProductCustomizeForm';
import CheckoutCustomizeForm from './comp/CheckoutCustomizeForm';
import NewsletterConsentForm from './comp/NewsletterConsentForm';
import OrderInvoiceCustomizeForm from './comp/OrderInvoiceCustomizeForm';

export default function CustomizationsSettings() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { formStore, onSubmit } = useCustomization();
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className="flex-col-top-section-pages">
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
					}}
				/>
				<div className='grid custom_container grid-cols-3'>
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
