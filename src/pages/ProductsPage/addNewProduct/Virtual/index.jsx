import ProductFormMediaSection from '../_comp/Forms/Product/sections/Media';
import ProductFormBasicInfoSection from '../_comp/Forms/Product/sections/BasicInfo';
import ProductFormDescriptionAndSpecificationsSection from '../_comp/Forms/Product/sections/DescriptionAndSpecifications';
import ProductFormPricingSection from '../_comp/Forms/Product/sections/Pricing';
import ProductFormStockSection from '../_comp/Forms/Product/sections/Stock';
import ProductFormShippingSection from '../_comp/Forms/Product/sections/Shipping';
import ProductFormOptionsAndVariationsSection from '../_comp/Forms/Product/sections/OptionsAndVariations';
import ProductFormFaqsSection from '../_comp/Forms/Product/sections/Faqs';
import SeoFormFaqsSection from '../_comp/Forms/Product/sections/Seo';
import ProductFormQuickActionsSection from '../_comp/Forms/Product/sections/QuickActions';
import { ProductSchema } from './utils';

import { useForm } from 'src/app/utils/hooks/form';
import ProductFormContainer from '../_comp/FormContainer';
import { productTypeMap } from '../_comp/Forms/Product/config';
import { productShippingTypeMap } from '../_comp/Forms/Product/sections/Shipping/utils';

const productsSections = [
	{
		Elem: ProductFormMediaSection,
		id: 'ProductFormMediaSection',
		title: 'media',
	},
	{
		Elem: ProductFormBasicInfoSection,
		id: 'ProductFormBasicInfoSection',
		title: 'basic info',
	},
	{
		Elem: ProductFormDescriptionAndSpecificationsSection,
		id: 'ProductFormDescriptionAndSpecificationsSection',
		title: 'description and specifications',
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
		title: 'options and variations',
	},
	{
		Elem: SeoFormFaqsSection,
		id: 'SeoFormFaqsSection',
		title: 'seo',
	},
	{
		Elem: ProductFormFaqsSection,
		id: 'ProductFormFaqsSection',
		title: 'faqs',
	},
];

export default function VirtualProductPage() {
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			console.log(values);
		},
		defaultValues: {
			productType: productTypeMap.virtual,
			bulkPrices: [],
			shipping: {
				type: productShippingTypeMap.online,
				downloadLink: '',
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