import { useTranslation } from 'react-i18next';
import {
	ProductFormBasicInfoSection,
	ProductFormContainer,
	ProductFormDescriptionAndSpecificationsSection,
	ProductFormFaqsSection,
	ProductFormMediaSection,
	ProductFormOptionsAndVariationsSection,
	ProductFormPricingSection,
	ProductFormQuickActionsSection,
	ProductFormShippingSection,
	ProductFormStockSection,
	SeoFormFaqsSection,
} from '../../..';
import { ProductDefaultValues, ProductSchema } from './utils';
import { useForm } from 'src/app/utils/hooks/form';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { ProductFormValues } from './types';
import { useEffect } from 'react';

const productsSections = [
	// {
	// 	Elem: ProductFormMediaSection,
	// 	id: 'ProductFormMediaSection',
	// 	title: 'General info',
	// },
	{
		Elem: ProductFormBasicInfoSection,
		id: 'ProductFormBasicInfoSection',
		title: 'General info',
	},
	{
		Elem: ProductFormDescriptionAndSpecificationsSection,
		id: 'ProductFormDescriptionAndSpecificationsSection',
		title: 'Description',
	},
	{
		Elem: ProductFormPricingSection,
		id: 'ProductFormPricingSection',
		title: 'pricing',
	},
	// {
	// 	Elem: ProductFormStockSection,
	// 	id: 'ProductFormStockSection',
	// 	title: 'stock',
	// },
	{
		Elem: ProductFormShippingSection,
		id: 'ProductFormShippingSection',
		title: 'shipping',
	},
	{
		Elem: ProductFormOptionsAndVariationsSection,
		id: 'ProductFormOptionsAndVariationsSection',
		title: 'options & variations',
	},
	// {
	// 	Elem: SeoFormFaqsSection,
	// 	id: 'SeoFormFaqsSection',
	// 	title: 'seo',
	// },
	// {
	// 	Elem: ProductFormFaqsSection,
	// 	id: 'ProductFormFaqsSection',
	// 	title: '',
	// },
];

export default function ConfigurableProductPage() {
	const { t } = useTranslation();
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			// console.log(values);
		},
		defaultValues: ProductDefaultValues,
	});

	const actionData = [
		{
			name: 'status',
			label: t('Available on store'),
			enable: true,
		},
	];
	useEffect(() => {
		formStore.setValue(
			'status',
			formStore.watch('status') ? 1 : 0,
		);
	}, [formStore.watch('status')]);

	return (
		<ProductFormContainer formStore={formStore} onSubmit={onSubmit} sections={productsSections}>
			<section onSubmit={onSubmit} className='flex-grow flex flex-col gap-4 relative'>
				<div className='custom-grid-parent gap-5  custom_container'>
					<div className='flex-col-global grid-left gap-4'>
						{productsSections.map(({ Elem, id }) => (
							// @ts-ignore
							<Elem key={id} formStore={formStore} id={id} />
						))}
					</div>
					<div className='grid-right'>
					<QuickActions<ProductFormValues>
						formStore={formStore}
						data={actionData}
						title={t('Quick actions')}
					/>
						
					</div>
				</div>
			</section>
		</ProductFormContainer>
	);
}
