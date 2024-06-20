import { FC, useState } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';
import { FaCirclePlus } from 'react-icons/fa6';
import { TfiUpload } from 'react-icons/tfi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import FileInput, { getDefaultFileInputOptions } from 'src/app/components/ui/file-input';
import { useTranslation } from 'react-i18next';
import AddBrandItem from 'src/pages/ProductsPage/tabs/Barnds/_comp/AddBrandItem';
import { AddBrandSchemaValues } from 'src/pages/ProductsPage/tabs/Barnds/_hook/AddbrandsFormSchema';

const simpleProductSchema: ZodObject<ZodRawShape> = z.object({
	productName: z.string().min(1, 'Product name is required'),
	price: z.number().min(1, 'Price is required'),
	quantity: z.number().min(1, 'Quantity is required'),
	skuCode: z.string().min(1, 'SKU code is required'),
	category: z.string().min(1, 'Category is required'),
	brands: z
		.array(
			z.object({
				brandNameEn: z.string(),
				brandNameAr: z.string(),
				brandDescribtionEn: z.string(),
				brandDescribtionAr: z.string(),
				brandLinkEn: z.string(),
				brandLinkAr: z.string(),
				image: z.instanceof(File),
				available: z.boolean(),
				products: z.array(z.any()),
			}),
		)
		.optional(),
});

const SimpleProductForm: FC = () => {
	const { formStore, onSubmit } = useForm({
		schema: simpleProductSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
		},
		defaultValues: {
			productName: '',
			price: 0,
			quantity: 0,
			skuCode: '',
			category: '',
			brands: [],
		},
	});

	const [openDialog, setOpenDialog] = useState(false);
	const { t } = useTranslation();

	const handleBrandSubmit = (brand: AddBrandSchemaValues) => {
		const currentBrands = formStore.getValues('brands') || [];
		formStore.setValue('brands', [...currentBrands, brand]);
		setOpenDialog(false);
	};

	return (
		<div className='flex flex-col'>
			<h3 className='title font-bold'>Add a quick Product</h3>
			<Form {...formStore}>
				<form className='bg-white rounded px-2 pt-6 w-full' onSubmit={onSubmit}>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
						<FormField
							container={{ className: 'col-span-2' }}
							formStore={formStore}
							name='image'
							render={({ onChange, value, ...field }) => (
								<FileInput
									className='flex flex-col items-center justify-center gap-2 size-32 cursor-pointer'
									{...field}
									options={getDefaultFileInputOptions({
										accept: { 'image/*': [] },
										setError: (error) => {
											formStore.setError('image', { message: error.message });
										},
										onFileLoad: (params) => {
											onChange(params.file);
										},
									})}
								>
									<TfiUpload className='text-[1.5rem]' />
									<p>{t('UploadImage')}</p>
								</FileInput>
							)}
						/>
						<div className='col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-4'>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='productName'
								render={(field) => (
									<Input
										{...field}
										id='productName'
										type='text'
										placeholder='Product name (required)'
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
											placeholder='Price (required)'
											className='flex-1'
										/>
									</div>
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='quantity'
								render={(field) => (
									<Input {...field} id='quantity' type='number' placeholder='Quantity' />
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='skuCode'
								render={(field) => (
									<Input {...field} id='skuCode' type='text' placeholder='SKU code' />
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
											id='category'
											className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
										>
											<option value='' disabled>
												Select category
											</option>
											<option value='category1'>Category 1</option>
											<option value='category2'>Category 2</option>
											{/* Add more categories as needed */}
										</select>
										<button
											type='button'
											className='flex items-center justify-center px-2 py-2 border-l w-3/5 lg:w-2/5'
											onClick={() => setOpenDialog(true)}
										>
											<FaCirclePlus size={24} />
											<span className='ms-1'>Add One</span>
										</button>
									</div>
								)}
							/>
						</div>
					</div>
					{openDialog && (
						<AddBrandItem
							openDialog={openDialog}
							handleClose={() => setOpenDialog(false)}
							handleBrandSubmit={handleBrandSubmit}
						/>
					)}
					<div className='flex mt-6 space-x-4 lg:justify-end justify-center'>
						<Button variant='primary' type='submit'>
							Save Changes
						</Button>
						<Link to='/products/new/simple'>
							<Button variant='secondary' RightIcon={<IoIosArrowForward />}>
								Add More Info
							</Button>
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SimpleProductForm;
