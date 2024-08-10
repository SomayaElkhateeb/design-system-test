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
	const { formStore, onSubmit } = useForm({
		schema: ProductSchema,
		handleSubmit: (values) => {

			let handelInventory = values.inventories?.map((el: any, i) => {
				return {
					[`inventories[${el.id}]`]: values?.quy?.toString(),
				};
			});
			const obj = handelInventory.reduce((acc: any, item: any) => {
				const key = Object.keys(item)[0];
				acc[key] = item[key];
				return acc;
			}, {});


			let refactorData = {
				...values, 'categories[]': values.category, ["en[name]"]: values.nameEn,
				["ar[name]"]: values.nameAr, ["en[description]"]: values.descriptionEn,
				["ar[description]"]: values.descriptionAr, ...obj
			}
			console.log(refactorData)
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
