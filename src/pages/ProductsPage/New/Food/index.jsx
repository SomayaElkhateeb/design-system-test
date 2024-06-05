import ProductFormMediaSection from 'src/app/components/optimized/Forms/Product/sections/Media';
import ProductFormBasicInfoSection from 'src/app/components/optimized/Forms/Product/sections/BasicInfo';
import ProductFormDescriptionAndSpecificationsSection from 'src/app/components/optimized/Forms/Product/sections/DescriptionAndSpecifications';
import ProductFormPricingSection from 'src/app/components/optimized/Forms/Product/sections/Pricing';
import ProductFormStockSection from 'src/app/components/optimized/Forms/Product/sections/Stock';
import ProductFormShippingSection from 'src/app/components/optimized/Forms/Product/sections/Shipping';
import ProductFormOptionsAndVariationsSection from 'src/app/components/optimized/Forms/Product/sections/OptionsAndVariations';
import ProductFormFaqsSection from 'src/app/components/optimized/Forms/Product/sections/Faqs';
import SeoFormFaqsSection from 'src/app/components/optimized/Forms/Product/sections/Seo';
import { ProductSchema } from './utils';

import { useForm } from 'src/app/utils/hooks/form';
import NewProductWrapper from '../_comps/Wrapper';

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

export default function FoodProductPage() {
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			console.log(values);
		},
		defaultValues: {
			isTaxable: true,
			statesOfTheProduct: [],
			price: 0,
			canContinueSellingWhenOutOfStock: false,
			isShippableOrPickupable: true,
			weightUnit: 'kg',
			dimensionUnit: 'cm',
			branches: [{ id: '1', name: 'Main Branch', quantity: 0 }],
			metaKeywords: [],
			options: [],
			variations: [],
			faqs: [],
			specifications: [],
		},
	});

	return (
		<NewProductWrapper formStore={formStore} onSubmit={onSubmit} sections={productsSections}>
			<section onSubmit={onSubmit} className='flex-grow flex flex-col gap-4 relative p-4'>
				{productsSections.map(({ Elem, id }) => (
					// @ts-ignore
					<Elem key={id} formStore={formStore} id={id} />
				))}
			</section>
		</NewProductWrapper>
	);
}
