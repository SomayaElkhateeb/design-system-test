import { FC, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';

const passwordSchema: ZodObject<ZodRawShape> = z.object({
	newPassword: z.string().min(8, 'Password must be at least 8 characters long'),
	confirmPassword: z.string().min(8, 'Password must be at least 8 characters long'),
});

type PasswordSchemaType = z.infer<typeof passwordSchema>;

const CreateNewPassword: FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const { formStore, onSubmit } = useForm<PasswordSchemaType>({
		schema: passwordSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
		},
		defaultValues: { newPassword: '', confirmPassword: '' },
	});

	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<div className='w-full max-w-md bg-white p-8 rounded-md shadow-md'>
					<h2 className='mb-6 text-2xl font-semibold text-gray-800'>Create a new password</h2>
					<Form {...formStore}>
						<form onSubmit={onSubmit}>
							<div className='mb-4 relative'>
								<FormField
									container={{ className: 'mb-4' }}
									formStore={formStore}
									name='newPassword'
									render={(field) => (
										<Input
											{...field}
											id='new-password'
											type={showPassword ? 'text' : 'password'}
											placeholder='New password'
										/>
									)}
								/>
								<button
									type='button'
									onClick={togglePasswordVisibility}
									className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 focus:outline-none'
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							<div className='mb-4 relative'>
								<FormField
									container={{ className: 'mb-4' }}
									formStore={formStore}
									name='confirmPassword'
									render={(field) => (
										<Input
											{...field}
											id='confirm-password'
											type={showConfirmPassword ? 'text' : 'password'}
											placeholder='New password again'
										/>
									)}
								/>
								<button
									type='button'
									onClick={toggleConfirmPasswordVisibility}
									className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 focus:outline-none'
								>
									{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							<div className='flex items-center justify-end'>
								<Button type='submit' variant='primary'>
									Update Password
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
			<div className='w-3/6 flex justify-center'>
				<img src={getImageUrl('images/register_2.svg')} alt='Create New Password' />
			</div>
		</section>
	);
};

export default CreateNewPassword;
