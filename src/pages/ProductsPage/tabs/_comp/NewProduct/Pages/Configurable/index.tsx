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
import { useAppDispatch } from 'src/app/store';
import { useEffect, useMemo } from 'react';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';
import { PostSimpleQuickProduct } from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { useNavigate } from 'react-router-dom';
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
	// {
	// 	Elem: ProductFormFaqsSection,
	// 	id: 'ProductFormFaqsSection',
	// 	title: '',
	// },
];

export default function ConfigurableProductPage() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {
			//  handel inventory of product
			let handelInventory = values.inventories?.map((el: any, i) => {
				return {
					[`${el.id}`]: values?.quy?.toString(),
				};
			});
			//  convert array inventory to object
			const obj = handelInventory.reduce((acc: any, item: any) => {
				const key = Object.keys(item)[0];
				acc[key] = item[key];
				return acc;
			}, {});

			let variants = values.variants?.map((e: any) => {
				//  handel inventory of variants
				let handelInventoryVariants = e?.inventories?.map((el: any, i) => {
					return {
						[`${el.id}`]: e?.quantity,
					};
				});
				//  convert array inventory of variants to object
				const InventoryVariantsObj = handelInventoryVariants.reduce((acc: any, item: any) => {
					const key = Object.keys(item)[0];
					acc[key] = item[key];
					return acc;
				}, {});
				return {
					...e,
					[e.code]: e.attributeValues,
					inventories: InventoryVariantsObj,
				};
			});

			const variantsData = variants.reduce((acc: any, variant: any, index: number) => {
				acc[`variant_${index}`] = variant;
				return acc;
			}, {});

			const { descriptionAr, descriptionEn, nameEn, nameAr, inventories, ...updatedData } = values;
			updatedData.en.name = values.nameEn
			updatedData.en.description = values.descriptionEn
			updatedData.ar.description = values.descriptionAr
			updatedData.ar.name = values.nameAr

			console.log(updatedData.en)
			let refactorData = {
				...updatedData, inventories: obj, "type": "configurable", 'categories[]': values.category,


				variants: JSON.stringify(variantsData)
			}

			dispatch(PostSimpleQuickProduct(refactorData)).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			})
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

	useMemo(() => {
		dispatch(getInventoryTable());
	}, [dispatch]);

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
