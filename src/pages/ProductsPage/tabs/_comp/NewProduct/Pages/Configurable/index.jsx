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
	productDimensionUnitMap,
	productShippingMethodMap,
	productShippingRateMap,
	productShippingTypeMap,
	productTypeMap,
	productWeightUnitMap,
} from '../../..';

import { ProductSchema } from './utils';
import { useForm } from 'src/app/utils/hooks/form';

const productsSections = [
	{
		Elem: ProductFormMediaSection,
		id: 'ProductFormMediaSection',
		title: 'General info',
	},
	{
		Elem: ProductFormBasicInfoSection,
		id: 'ProductFormBasicInfoSection',
		title: '',
	},
	{
		Elem: ProductFormDescriptionAndSpecificationsSection,
		id: 'ProductFormDescriptionAndSpecificationsSection',
		title: '',
	},
	{
		Elem: ProductFormPricingSection,
		id: 'ProductFormPricingSection',
		title: 'pricing',
	},
	{
		Elem: ProductFormStockSection,
		id: 'ProductFormStockSection',
		title: 'stock',
	},
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
	{
		Elem: SeoFormFaqsSection,
		id: 'SeoFormFaqsSection',
		title: 'seo',
	},
	{
		Elem: ProductFormFaqsSection,
		id: 'ProductFormFaqsSection',
		title: '',
	},
];

export default function ConfigurableProductPage() {
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			console.log(values);
		},
		defaultValues: {
			productType: productTypeMap.configurable,
			bulkPrices: [],
			shipping: {
				type: productShippingTypeMap.pickup,
				statesOfTheProduct: [],
				isShippableOrPickupable: true,
				weightUnit: productWeightUnitMap.kg,
				dimensionUnit: productDimensionUnitMap.cm,
				rateType: productShippingRateMap['fixed rate'],
				rateValue: 0,
				method: productShippingMethodMap['Dhl (main)'],
				weight: 0,
				dimensions: {
					length: 0,
					width: 0,
					height: 0,
				},
			},
			isTaxable: true,
			price: 0,
			canContinueSellingWhenOutOfStock: false,
			branches:
				// TODO: Remove this when branches feature is ready
				// This is a temporary test data
				// For development purposes, we are adding a default branch
				// and should be removed when we have the branches feature ready
				process.env.NODE_ENV === 'development'
					? [{ id: '1', name: 'Main Branch', quantity: 0 }]
					: [],
			metaKeywords: [],
			options: [],
			variations: [],
			faqs: [],
			specifications: [],
		},
	});

	return (
		<ProductFormContainer formStore={formStore} onSubmit={onSubmit} sections={productsSections}>
			<section onSubmit={onSubmit} className='flex-grow flex flex-col gap-4 relative p-4'>
				<div className='flex gap-6 flex-col-reverse md:flex-row'>
					<div className='flex flex-col gap-4'>
						{productsSections.map(({ Elem, id }) => (
							// @ts-ignore
							<Elem key={id} formStore={formStore} id={id} />
						))}
					</div>
					<div className='flex-shrink-0'>
						<ProductFormQuickActionsSection formStore={formStore} />
					</div>
				</div>
			</section>
		</ProductFormContainer>
	);
}
