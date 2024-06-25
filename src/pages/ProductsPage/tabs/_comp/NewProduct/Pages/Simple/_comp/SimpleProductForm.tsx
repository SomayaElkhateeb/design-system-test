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
import AddBrandForm from 'src/pages/ProductsPage/tabs/Barnds/_comp/AddBrandForm';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';

const simpleProductSchema: ZodObject<ZodRawShape> = z.object({
	productName: z.string().min(1, 'Product name is required'),
	price: z.number().min(1, 'Price is required'),
	quantity: z.number().min(1, 'Quantity is required'),
	skuCode: z.string().min(1, 'SKU code is required'),
	category: z.string().min(1, 'Category is required'),
	image: z.instanceof(File),
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
			image: undefined,
			category: '',
		},
	});

	const [openDialog, setOpenDialog] = useState(false);
	const { t } = useTranslation();

	const handleBrandSubmit = (val) => {
		console.log(val);
		setOpenDialog(false);
	};

	return (
		<div className='flex flex-col-global'>
			<h3 className='title font-bold'>{t('Add a quick Product')}</h3>
			<Form {...formStore}>
				<form className='bg-white rounded px-2 pt-6 w-full' onSubmit={onSubmit}>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
						<FormField
							container={{ className: 'col-span-2' }}
							formStore={formStore}
							name='image'
							render={({ onChange, value, ...field }) => (
								<FileInput
									className='flex flex-col-global items-center justify-center gap-2 size-32 cursor-pointer'
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
									<p>{t('Upload Image')}</p>
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
										placeholder={`${t('Product name')} (${t('required')})`}
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
											placeholder={`${t('Price')} (${t('required')})`}
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
									<Input {...field} id='quantity' type='number' placeholder={t('Quantity')} />
								)}
							/>
							<FormField
								container={{ className: 'col-span-6 lg:col-span-3' }}
								formStore={formStore}
								name='skuCode'
								render={(field) => (
									<Input {...field} id='skuCode' type='text' placeholder={t('SKU Code')} />
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
											className='block w-full px-3 py-2 bg-white rounded-l-md shadow-sm focus '
										>
											<option value='' disabled>
												{t('Select category')}
											</option>
											<option value='category1'>Category 1</option>
											<option value='category2'>Category 2</option>
											{/* Add more categories as needed */}
										</select>
										<button
											type='button'
											className='flex items-center justify-center px-2 py-2 border-l w-2/5'
											onClick={() => setOpenDialog(true)}
										>
											<FaCirclePlus size={24} />
											<span className='ms-1'>{t('Add One')}</span>
										</button>
									</div>
								)}
							/>
							{/* 20/06/2024 */}
							{/* <FormField
								container={{ className: 'col-span-6' }}
								formStore={formStore}
								name='category'
								label={t('Category')}
								render={(field) => (
									<div className='flex'>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											required={field.required}
											name={field.name}
										>
											<SelectTrigger
												className='border-e-0 rounded-e-none rtl:border-e rtl:rounded-e rtl:border-s-0 rtl:rounded-s-none'
												onBlur={field.onBlur}
												disabled={field.disabled}
												id={field.id}
											>
												<SelectValue placeholder={t('Select category')} />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='category1'>{t('Category 1')}</SelectItem>
												<SelectItem value='category2'>{t('Category 2')}</SelectItem>
											</SelectContent>
										</Select>
										<button
											type='button'
											className='flex items-center justify-center px-2 py-2 border-l w-3/5 lg:w-2/5'
											onClick={() => setOpenDialog(true)}
										>
											<FaCirclePlus size={24} />
											<span className='ms-1'>{t('Add One')}</span>
										</button>
									</div>
								)}
							/> */}
						</div>
					</div>
					{openDialog && (
						<AddBrandForm
							openDialog={openDialog}
							handleClose={() => setOpenDialog(false)}
							handleBrandSubmit={handleBrandSubmit}
						/>
					)}
					<div className='flex mt-6 space-x-4 lg:justify-end justify-center'>
						<Button variant='primary' type='submit'>
							{t('Save Changes')}
						</Button>
						<Link to='/products/new/simple'>
							<Button variant='secondary' RightIcon={<IoIosArrowForward />}>
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
