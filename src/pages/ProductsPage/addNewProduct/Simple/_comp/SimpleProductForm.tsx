import  { FC } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';

const simpleProductSchema: ZodObject<ZodRawShape> = z.object({
	productName: z.string().min(1, 'Product name is required'),
	price: z.number().min(0, 'Price is required'),
	quantity: z.number().min(0, 'Quantity is required').optional(),
	skuCode: z.string().optional(),
	category: z.string().min(1, 'Category is required'),
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
			quantity: undefined,
			skuCode: '',
			category: '',
		},
	});

	return (
		<div className='flex justify-center items-center'>
			<Form {...formStore}>
				<form
					className='bg-white rounded px-8 pt-6 pb-8 mb-4 w-full max-w-full'
					onSubmit={onSubmit}
				>
					<div className='flex items-center space-x-4'>
						<button
							type='button'
							className='border-dashed border-2 border-gray-300 rounded px-4 py-2 text-center'
						>
							Upload Images
						</button>
						<FormField
							container={{ className: 'flex-1' }}
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
						<div className='flex items-center'>
							<span className='px-3 py-2 border rounded-l-md bg-gray-50 text-gray-500'>SAR</span>
							<FormField
								container={{ className: 'flex-1' }}
								formStore={formStore}
								name='price'
								render={(field) => (
									<Input
										{...field}
										id='price'
										type='number'
										placeholder='Price (required)'
										className='rounded-r-md'
									/>
								)}
							/>
						</div>
						<FormField
							container={{ className: 'flex-1' }}
							formStore={formStore}
							name='quantity'
							render={(field) => (
								<Input {...field} id='quantity' type='number' placeholder='Quantity' />
							)}
						/>
						<FormField
							container={{ className: 'flex-1' }}
							formStore={formStore}
							name='skuCode'
							render={(field) => (
								<Input {...field} id='skuCode' type='text' placeholder='SKU code' />
							)}
						/>
						<FormField
							container={{ className: 'flex-1' }}
							formStore={formStore}
							name='category'
							render={(field) => (
								<div className='relative'>
									<select
										{...field}
										id='category'
										className='block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
										className='absolute right-0 inset-y-0 px-3 py-2 text-blue-500 hover:text-blue-700'
									>
										+ Add One
									</button>
								</div>
							)}
						/>
					</div>
					<div className='flex justify-end mt-4 space-x-4'>
						<Button variant='primary' type='submit'>
							Save Changes
						</Button>
						<Button
							variant='secondary'
							type='button'
							onClick={() => alert('Add more info clicked')}
						>
							Add More Info
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default SimpleProductForm;
