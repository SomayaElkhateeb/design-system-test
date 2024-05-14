import { z } from 'zod';
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

const ProductSchema = {
	generalInfo: z.object({
		imagesMedia: z.array(z.instanceof(File)),
		videoMedia: z.instanceof(File),
		threeSixtyViewMedia: z.instanceof(File),
		threeDModelMedia: z.instanceof(File),
		// Basic Info
		nameEn: z.string().min(3).max(50),
		nameAr: z.string().min(3).max(50),
		sku: z.preprocess((arg) => (!arg ? undefined : arg), z.string().min(3).max(50).optional()),
		brand: z.preprocess(
			(arg) => (!arg ? undefined : arg),
			z
				.object({
					id: z.string(),
					name: z.string().min(3).max(50),
				})
				.optional(),
		),
		category: z.preprocess(
			(arg) => (!arg ? undefined : arg),
			z
				.object({
					id: z.string(),
					name: z.string().min(3).max(50),
				})
				.optional(),
		),
		//
		descriptionEn: z.string().min(10).max(1000),
		descriptionAr: z.string().min(10).max(1000),
		// specification
		// pricing
		price: z.coerce.number().min(0).default(0),
		discountPrice: z.coerce.number().min(0).optional(),
		costPrice: z.coerce.number().min(0),
		isTaxable: z.boolean().default(true),
		// add bulk pricing???
		// Stock
		quantity: z.coerce.number().min(0),
		canContinueSellingWhenOutOfStock: z.boolean().default(false),
		branches: z.array(
			z.object({ id: z.string(), name: z.string(), quantity: z.coerce.number().min(0) }),
		),
		// Shipping
		isShippableOrPickupable: z.boolean().default(true),
		weight: z.coerce.number().min(0),
		weightUnit: z.enum(['kg', 'g', 'lb', 'oz']),
		dimensions: z.object({
			length: z.coerce.number().min(0),
			width: z.coerce.number().min(0),
			height: z.coerce.number().min(0),
		}),
		dimensionUnit: z.enum(['cm', 'm', 'mm', 'in', 'ft']),
		// more advanced shipping options???
		// Options & Variants
		// options: z.array(
		// SEO
		pageTitle: z.string().min(3).max(70),
		// link: z.string().url(),
		metaKeywords: z.array(z.string().min(3)).max(10),
		metaDescription: z.string().min(3).max(160),
		// FAQs
		faqs: z.array(
			z.object({
				question: z.string().min(3).max(100),
				answer: z.string().min(3).max(1000),
			}),
		),
	}),
};

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
			...props.defaultValues,
			generalInfo: {
				isTaxable: true,
				price: 0,
				canContinueSellingWhenOutOfStock: false,
				isShippableOrPickupable: true,
				weightUnit: 'kg',
				dimensionUnit: 'cm',
				branches: [{ id: '1', name: 'Main Branch', quantity: 0 }],
				...props.defaultValues?.generalInfo,
			},
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
