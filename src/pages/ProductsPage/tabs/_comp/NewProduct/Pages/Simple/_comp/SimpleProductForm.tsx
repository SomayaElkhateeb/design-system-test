import { useEffect, useMemo, useState } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { InferredZodSchema, useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { FaCirclePlus } from 'react-icons/fa6';
import { TfiUpload } from 'react-icons/tfi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import ImageInput from 'src/app/components/ui/form/ImageInput';

import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	getAllProductsTable,
	PostSimpleQuickProduct,
} from 'src/app/store/slices/productsPage/allProducts/allProductsAsyncThunks';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import AddCategoryForm from 'src/pages/ProductsPage/tabs/Categories/_comp/AddCategoryForm';
import { getInventoryTable } from 'src/app/store/slices/productsPage/inventory/inventoryAsyncThunks';

interface simpleProductInterface {
	name: string;
	price: number;
	quy: number;
	sku: string;
	category: string;
	images: File;
}
const simpleProductSchema = {
	name: z.string().min(1, 'Product name is required'),
	price: z.coerce.number().min(1).positive(),
	quy: z.coerce.number().optional(),
	sku: z.string().min(1, 'SKU code is required'),
	category: z.string().min(1, 'Category is required'),
	inventories: z.string().min(1, 'inventories is required'),
	images: z.instanceof(File),
	type: z.optional(z.string()).or(z.literal('')),
};
export type AddsimpleProductSchemaSchemaValues = InferredZodSchema<typeof simpleProductSchema>;

const SimpleProductForm = ({
	categoriesTable,
	handleClose,
}: {
	categoriesTable: CategoryInterface[];
	handleClose: () => void;
}) => {
	//  hooks
	const dispatch = useAppDispatch();
	const { allProducts } = useAppSelector((state) => state.allProducts);
	const { inventory } = useAppSelector((state) => state.inventory);
	//  custom hook
	const { formStore, onSubmit } = useForm({
		schema: simpleProductSchema,
		handleSubmit: (values) => {
			const formData = new FormData();

			formData.append('name', values.name);
			values.price && formData.append('price', values.price.toString());
			values.quy && formData.append('quy', values.quy.toString());
			formData.append('sku', values.sku);
			formData.append('category[]', values.category);
			formData.append('images[files][]', values.images);
			formData.append('type', 'simple');
			formData.append(`inventories[${values.inventories}]`, values.quy);

			dispatch(PostSimpleQuickProduct(formData)).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					dispatch(getAllProductsTable());
					handleClose();
				}
			});
		},
		defaultValues: {
			name: '',
			price: 0,
			quy: 0,
			sku: '',
			images: undefined,
			category: '',
			inventories: '',
		},
	});

	const [openDialog, setOpenDialog] = useState(false);
	const { t } = useTranslation();

	useMemo(() => {
		dispatch(getAllProductsTable());
		dispatch(getInventoryTable());
	}, [dispatch]);
	return (
		<div className='flex-col-global gap-6'>
			<h3 className='title md:font-bold'>{t('Add a quick Product')}</h3>
			<Form {...formStore}>
				<form className='bg-white rounded  flex-col-global  w-full' onSubmit={onSubmit}>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
						<div className='col-span-2'>
							<ImageInput<simpleProductInterface> name={'images'} formStore={formStore}>
								<TfiUpload className='text-[1.5rem]' />
								<p className='paragraph text-center'>{t('Upload Image')}</p>
							</ImageInput>
						</div>

						<div className='col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-4'>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='name'
								render={(field) => (
									<Input
										{...field}
										id='name'
										type='text'
										placeholder={`${t('Product Name')} (${t('Required')})`}
									/>
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='price'
								render={(field) => (
									<div className='relative flex items-center border border-gray-300 rounded-md'>
										<span className='px-3 py-2 border-r rounded-l-md bg-gray-50 text-gray-500'>
											SAR
										</span>
										<Input
											{...field}
											id='price'
											type='number'
											placeholder={`${t('Price')} (${t('Required')})`}
											className='flex-1'
										/>
									</div>
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='quy'
								render={(field) => (
									<Input {...field} id='quy' type='number' placeholder={t('Quantity')} />
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='sku'
								render={(field) => (
									<Input {...field} id='sku' type='text' placeholder={t('SKU Code')} />
								)}
							/>

							<FormField
								container={{ className: 'col-span-6' }}
								formStore={formStore}
								name='category'
								render={(field) => (
									<div className='relative flex items-center border border-gray-300 rounded-md'>
										<select
											{...field}
											name='category'
											className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus:border-none focus:outline-none '
											onChange={field.onChange}
										>
											<option value='' disabled>
												{t('Select Category')}
											</option>
											{categoriesTable?.length > 0 &&
												categoriesTable?.map((e, i) => <option value={e.id}>{e.name}</option>)}
										</select>
										<button
											type='button'
											className='md:flex-row-global flex-col-global items-center px-2 py-2 border-l w-2/5'
											onClick={() => setOpenDialog(true)}
										>
											<FaCirclePlus size={24} />
											<span className='ms-1'>{t('Add One')}</span>
										</button>
									</div>
								)}
							/>
							<FormField
								container={{ className: 'col-span-6' }}
								formStore={formStore}
								name='inventories'
								render={(field) => (
									<div className='relative flex items-center border border-gray-300 rounded-md'>
										<select
											{...field}
											name='inventories'
											className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus:border-none focus:outline-none '
											onChange={field.onChange}
										>
											<option value='' disabled>
												{t('Select Inventory')}
											</option>
											{inventory?.length > 0 &&
												inventory?.map((e, i) => <option value={e.id}>{e.name}</option>)}
										</select>
									</div>
								)}
							/>
						</div>
					</div>
					{openDialog && (
						<AddCategoryForm
							openDialog={openDialog}
							handleClose={() => setOpenDialog(false)}
							allProducts={allProducts}
							Edit_id={''}
							setEdit_id={function (e: string): void {
								throw new Error('Function not implemented.');
							}}
						/>
					)}
					<div className='flex  space-x-4 lg:justify-end justify-center'>
						<Button variant='primary' type='submit'>
							{t('Save Changes')}
						</Button>
						<Link to='/products/new/simple'>
							<Button variant='secondary' RightIcon={IoIosArrowForward}>
								{t('Add More Info')}
							</Button>
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SimpleProductForm;
