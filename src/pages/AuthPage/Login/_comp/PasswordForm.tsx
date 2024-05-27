import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaChevronLeft } from 'react-icons/fa';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { Button } from 'src/app/components/optimized';
import { Link } from 'react-router-dom';
import { z, ZodObject, ZodRawShape } from 'zod';

const PasswordSchema: ZodObject<ZodRawShape> = z.object({
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type PasswordType = z.infer<typeof PasswordSchema>;

const PasswordForm: React.FC = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	const { formStore, onSubmit } = useForm<PasswordType>({
		schema: PasswordSchema,
		handleSubmit: (validatedData) => console.log(validatedData),
		defaultValues: { password: '' },
	});

	const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

	return (
		<div className='flex items-center justify-center bg-gray-100'>
			<div className='w-full'>
				<Form {...formStore}>
					<form className='bg-white rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
						<div className='mb-4 text-primary flex space-x-1 items-center'>
							<FaChevronLeft />
							<span className='text-blue-500 text-sm'>Ahmed@gmail.com</span>
						</div>
						<div className='mb-4'>
							<h2 className='text-2xl font-semibold text-gray-700'>Sign in</h2>
						</div>
						<div className='mb-4 relative'>
							<div className='relative'>
								<FormField
									formStore={formStore}
									name='password'
									render={(field) => (
										<Input
											{...field}
											id='password'
											type={passwordVisible ? 'text' : 'password'}
											placeholder='Password'
										/>
									)}
								/>
								<button
									type='button'
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700'
									onClick={togglePasswordVisibility}
									aria-label={passwordVisible ? 'Hide password' : 'Show password'}
								>
									{passwordVisible ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
						</div>
						<div className='flex items-center justify-between mb-4'>
							<Link
								className='inline-block align-baseline font-semibold text-sm text-primary hover:text-blue-800'
								to='/forgot_password'
							>
								Forgot Password?
							</Link>
						</div>
						<div className='flex items-center justify-between'>
							<Button variant='primary' type='submit'>
								Sign In
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default PasswordForm;
