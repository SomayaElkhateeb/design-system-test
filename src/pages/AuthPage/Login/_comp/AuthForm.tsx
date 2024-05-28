import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const emailSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

const phoneSchema = z.object({
	phone: z
		.string()
		.min(1, 'Phone is required')
		.min(11, 'Phone number must be at least 11 digits')
		.max(15, 'Phone number is too long'),
});

interface AuthFormProps {
	setStep: React.Dispatch<React.SetStateAction<number>>;
	handleToggle: () => void;
	type: 'email' | 'phone';
}

const AuthForm: React.FC<AuthFormProps> = ({ setStep, handleToggle, type }) => {
	const schema = type === 'email' ? emailSchema : phoneSchema;
	const placeholder = type === 'email' ? 'Email Address' : 'Phone Number';
	const name = type === 'email' ? 'email' : 'phone';
	const autoComplete = type === 'email' ? 'email' : 'tel';

	const { formStore, onSubmit } = useForm({
		schema: schema.shape,
		handleSubmit: () => setStep(2),
		defaultValues: { [name]: '' },
	});

	return (
		<div className='flex items-center justify-center bg-gray-100'>
			<div className='w-full'>
				<Form {...formStore}>
					<form className='bg-white rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
						<FormField
							container={{ className: 'mb-4' }}
							formStore={formStore}
							name={name}
							render={(field) => (
								<Input
									{...field}
									id={name}
									type={type}
									placeholder={placeholder}
									autoComplete={autoComplete}
								/>
							)}
						/>
						<div className='flex items-center justify-between mb-4'>
							<Link
								className='inline-block align-baseline font-semibold text-sm text-primary hover:text-blue-800'
								to='/forgot_password'
							>
								Forgot Password?
							</Link>
							<button
								type='button'
								onClick={handleToggle}
								className='text-primary hover:underline focus:outline-none text-sm font-semibold'
							>
								Use {type === 'email' ? 'Phone' : 'Email'}
							</button>
						</div>
						<div className='flex items-center justify-end'>
							<Button type='submit' variant='primary'>
								Next
							</Button>
						</div>
						<div className='text-center mt-4'>
							<p className='text-gray-600 text-sm'>
								Don&apos;t have an account?{' '}
								<Link
									to='/register'
									className='font-semibold text-blue-500 hover:text-blue-800 text-primary'
								>
									Sign up
								</Link>
							</p>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default AuthForm;
