import { Form } from '../../../ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import ProductFormMediaSection from './sections/Media';
import ProductFormBasicInfoSection from './sections/BasicInfo';
import ProductFormDescriptionAndSpecificationsSection from './sections/DescriptionAndSpecifications';
import ProductFormPricingSection from './sections/Pricing';
import ProductFormStockSection from './sections/Stock';
import ProductFormShippingSection from './sections/Shipping';
import ProductFormOptionsAndVariationsSection from './sections/OptionsAndVariations';
import ProductFormFaqsSection from './sections/Faqs';
import SeoFormFaqsSection from './sections/Seo';
import { ProductSchema } from './utils';

/**
 * @typedef {import("src/app/utils/hooks/form").InferredZodSchema<typeof ProductSchema>} ProductFormValues
 *
 * @typedef {import('react-hook-form').UseFormReturn<ProductFormValues>} ProductFormStore
 */

/**
 * @param {{
 *  defaultValues?: ProductFormValues;
 *  handleSubmit: (values: ProductFormValues) => void;
 * }} props
 *
 * @example
 *
 * ```jsx
 *	<ProductForm
 *		handleSubmit={(values) => {
 *			console.log(values);
 *		}}
 *	/>
 * ```
 */
export default function ProductForm(props) {
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: props.handleSubmit,
		defaultValues: {
			isTaxable: true,
			price: 0,
			canContinueSellingWhenOutOfStock: false,
			isShippableOrPickupable: true,
			weightUnit: 'kg',
			dimensionUnit: 'cm',
			branches: [{ id: '1', name: 'Main Branch', quantity: 0 }],
			metaKeywords: [],
			options: [],
			variations: [],
			faqs: [
				{
					tempId: '1',
					questionEn: 'Test?',
					answerEn: 'Test.',
					questionAr: 'اختبار؟',
					answerAr: 'اختبار.',
				},
			],
			...props.defaultValues,
		},
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex flex-col gap-4'>
				<ProductFormMediaSection formStore={formStore} />
				<ProductFormBasicInfoSection formStore={formStore} />
				<ProductFormDescriptionAndSpecificationsSection formStore={formStore} />
				<ProductFormPricingSection formStore={formStore} />
				<ProductFormStockSection formStore={formStore} />
				<ProductFormShippingSection formStore={formStore} />
				<ProductFormOptionsAndVariationsSection formStore={formStore} />
				<SeoFormFaqsSection formStore={formStore} />
				<ProductFormFaqsSection formStore={formStore} />
			</form>
		</Form>
	);
}
