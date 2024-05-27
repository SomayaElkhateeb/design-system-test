import { useState } from 'react';
import { FaEye, FaEyeSlash, FaChevronLeft } from 'react-icons/fa';
import { getImageUrl } from 'src/app/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';
import FormField from 'src/app/components/ui/form/field';
import { Button } from 'src/app/components/optimized';

const LoginPage = () => {
	const [step, setStep] = useState(1);
	const { t } = useTranslation();

	return (
		<section className='flex flex-col space-x-4 w-full py-12 space-y-16 bg-white m-auto items-center'>
			<div className='flex justify-between items-center w-4/5'>
				<img src={getImageUrl('brand/en-light.svg')} alt='Brand' />
				<button className='text-xl font-semibold'>{t('العربية')}</button>
			</div>
			<div className='flex justify-between items-center w-4/5 mt-12'>
				<div className='w-2/5'>{step === 1 ? <Account setStep={setStep} /> : <Password />}</div>
				<div className='w-2/5 flex items-center justify-center'>
					<img src={getImageUrl('images/register_3.svg')} alt='Illustration' />
				</div>
			</div>
		</section>
	);
};

// z.object({
// 	email: z.string().min(1, 'Email is required').email('Invalid email address').optional(),
// 	phone: z
// 		.string()
// 		.min(1, 'Phone is required')
// 		.min(11, 'Phone number must be at least 11 digits')
// 		.max(15, 'Phone number is too long')
// 		.optional(),
// });

const AccountSchema = z.discriminatedUnion('type', [
	z.object({
		type: z.literal('email'),
		email: z.string().min(1, 'Email is required').email('Invalid email address'),
	}),
	z.object({
		type: z.literal('phone-number'),
		phoneNumber: z
			.string()
			.min(1, 'Phone is required')
			.min(11, 'Phone number must be at least 11 digits')
			.max(15, 'Phone number is too long'),
	}),
]);

const Account = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
	const { formStore, onSubmit } = useForm({
		schema: AccountSchema,
		handleSubmit: (validatedData) => {
			setStep(2);
		},
		defaultValues: { type: 'email' },
	});

	const [usePhone, setUsePhone] = useState<boolean>(false);

	const handleToggle = () => {
		setUsePhone((prev) => {
			const newValue = !prev;

			formStore.setValue('phone', undefined);
			formStore.setValue('email', undefined);
			formStore.setValue('type', newValue? 'phone-number' : 'email');

			return newValue;
		});
	};

	return (
		<div className='flex items-center justify-center bg-gray-100'>
			<div className='w-full'>
				<Form {...formStore}>
					<form className='bg-white rounded px-8 pt-6 pb-8 mb-4' onSubmit={onSubmit}>
						<FormField
							container={{ className: 'mb-4' }}
							formStore={formStore}
							name={usePhone ? 'phone' : 'email'}
							render={(field) => (
								<Input
									{...field}
									id={usePhone ? 'phone' : 'email'}
									type={usePhone ? 'tel' : 'email'}
									placeholder={usePhone ? 'Phone Number' : 'Email Address'}
									autoComplete={usePhone ? 'tel' : 'email'}
									onChange={(e) => {
										const value = e.target.value;
										field.onChange(!value ? undefined : value);
									}}
									value={field.value ?? ''}
								/>
							)}
						/>
						<div className='flex items-center justify-between mb-4'>
							<Link
								className='inline-block align-baseline font-semibold text-sm text-primary hover:text-blue-800'
								to='/forgot_password' // Corrected typo here
							>
								Forgot Password?
							</Link>
							<button
								type='button'
								onClick={handleToggle}
								className='text-primary hover:underline focus:outline-none text-sm font-semibold'
							>
								Use {usePhone ? 'email' : 'phone'}
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

const PasswordSchema: ZodObject<ZodRawShape> = z.object({
	password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type PasswordType = z.infer<typeof PasswordSchema>;

const Password = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const { formStore, onSubmit } = useForm<PasswordType>({
		schema: PasswordSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
		},
		defaultValues: { password: '' },
	});

	const togglePasswordVisibility = () => {
		setPasswordVisible((prev) => !prev);
	};

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
									formStore={formStore} // Pass the formStore prop to FormField
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
								to='/forget_password'
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

export default LoginPage;
