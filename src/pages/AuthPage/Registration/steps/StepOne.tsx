import { FC } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { getImageUrl } from 'src/app/utils';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';

interface StepOneProps {
	onNext: () => void;
}

const StepOne: FC<StepOneProps> = ({ onNext }) => {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<RegistrationForm onNext={onNext} />
			</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_2.svg')} alt='' />
			</div>
		</section>
	);
};

export default StepOne;

const registrationSchema: ZodObject<ZodRawShape> = z.object({
	email: z.string().email('Invalid email address'),
	name: z.string().min(1, 'Name is required'),
	phone: z.string().min(10, 'Phone number is too short').max(15, 'Phone number is too long'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
});

interface RegistrationFormProps {
	onNext: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onNext }) => {
	const { formStore, onSubmit } = useForm({
		schema: registrationSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
			onNext();
		},
		defaultValues: {
			email: '',
			name: '',
			phone: '',
			password: '',
		},
	});

	return (
		<div className='flex justify-center items-center'>
			<Form {...formStore}>
				<form className='bg-white rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg' onSubmit={onSubmit}>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='email'
						render={(field) => (
							<Input {...field} id='email' type='email' placeholder='Email Address' />
						)}
					/>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='name'
						render={(field) => (
							<Input {...field} id='name' type='text' placeholder='Enter your name' />
						)}
					/>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='phone'
						render={(field) => (
							<Input {...field} id='phone' type='tel' placeholder='Phone number' />
						)}
					/>
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='password'
						render={(field) => (
							<Input {...field} id='password' type='password' placeholder='Password' />
						)}
					/>

					<div className='flex items-center justify-end'>
						<Button variant='primary' type='submit'>
							Next
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
