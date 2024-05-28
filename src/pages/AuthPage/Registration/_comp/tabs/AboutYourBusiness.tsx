import { FC } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import AuthImage from 'src/pages/AuthPage/_comp/AuthImage';
import { z, ZodObject, ZodRawShape } from 'zod';

const AboutYourBusiness: FC = () => {
	return (
		<section className='flex flex-col lg:flex-row justify-between w-full items-center py-12 space-y-16 lg:space-y-0 lg:space-x-8'>
			<div className='w-full lg:w-2/5'>
				<CreateStoreForm />
			</div>

			<AuthImage path='images/register_2.svg' />
		</section>
	);
};

export default AboutYourBusiness;

const createStoreSchema: ZodObject<ZodRawShape> = z.object({
	storeName: z.string().min(3, 'Store name is required'),
	storeLink: z.string().min(3, 'Store link is required'),
	industry: z.string().min(3, 'Industry is required'),
	agreed: z.boolean().refine((val) => val, 'You must agree to the terms and conditions'),
});

const CreateStoreForm: FC = () => {
	const { formStore, onSubmit } = useForm({
		schema: createStoreSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
		},
		defaultValues: {
			storeName: '',
			storeLink: '',
			industry: '',
			agreed: false,
		},
	});

	return (
		<div className='flex justify-center items-center'>
			<Form {...formStore}>
				<form className='bg-white rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg' onSubmit={onSubmit}>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='storeName'
						render={(field) => (
							<Input {...field} id='storeName' type='text' placeholder='Store name' />
						)}
					/>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='storeLink'
						render={(field) => (
							<div className='flex mt-1'>
								<Input
									{...field}
									id='storeLink'
									type='text'
									placeholder='Store link (in English)'
									className='flex-grow'
								/>
								<span className='inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
									.dookan.net
								</span>
							</div>
						)}
					/>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='industry'
						render={(field) => (
							<select
								{...field}
								id='industry'
								className='mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							>
								<option value='' disabled>
									Select industry
								</option>
								<option value='fashion'>Fashion</option>
								<option value='electronics'>Electronics</option>
								<option value='groceries'>Groceries</option>
							</select>
						)}
					/>
					<div className='mb-4'>
						<label className='flex items-center'>
							<input
								type='checkbox'
								className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
								{...formStore.register('agreed')}
							/>
							<span className='ml-2 text-sm text-gray-600'>
								I agree to{' '}
								<a href='#' className='text-indigo-600 hover:underline'>
									Terms and Conditions
								</a>
								,{' '}
								<a href='#' className='text-indigo-600 hover:underline'>
									Privacy Policy
								</a>
								, and{' '}
								<a href='#' className='text-indigo-600 hover:underline'>
									Selling policy
								</a>
							</span>
						</label>
					</div>
					<div className='flex items-center justify-end'>
						<Button variant='primary' type='submit'>
							Create Store
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
